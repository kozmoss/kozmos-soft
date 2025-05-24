import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { guestRegex, isDevelopmentEnvironment } from "./lib/constants";

const publicPages = [
  "/",
  "/ai",
  "/about-us",
  "/contact-us",
  "/mobile",
  "/products/web",
  "/view/styles/new-york/e-commerce",
];

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const pathWithoutLocale = pathname.replace(/^\/(en|tr)/, "");

  // Public pages regex
  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i",
  );

  const token = await getToken({
    req: req,
    secret: process.env.AUTH_SECRET,
    secureCookie: !isDevelopmentEnvironment,
  });

  if (pathname.startsWith("/ping")) {
    return new Response("pong", { status: 200 });
  }

  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Dynamic paths that should be public
  const localePrefix = `/(${routing.locales.join("|")})?`;
  const productsWebRegex = new RegExp(
    `^${localePrefix}/products/web(/.*)?$`,
    "i",
  );
  const viewStylesRegex = new RegExp(
    `^${localePrefix}/view/styles(/.*)?$`,
    "i",
  );

  // Check if current path is public
  const isPublicPage = publicPathnameRegex.test(pathname);
  const isProductsWeb = productsWebRegex.test(pathname);
  const isViewStyles = viewStylesRegex.test(pathname);

  // If it's a public page, allow access
  if (isPublicPage || isProductsWeb || isViewStyles) {
    return intlMiddleware(req);
  }

  const isGuest = guestRegex.test(token?.email ?? "");


  if (token && !isGuest && ["/login", "/register"].includes(pathWithoutLocale)) {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  if (pathWithoutLocale.startsWith("/chat")) {
    if (!token) {
      const redirectUrl = encodeURIComponent(req.url);

      return NextResponse.redirect(
        new URL(`/api/auth/guest?redirectUrl=${redirectUrl}`, req.url),
      );
    }

 
  }

  // If authenticated, continue with intl middleware
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/(en|tr)/chat/:path*",
    "/chat/:path*",
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};
