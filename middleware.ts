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
  "/products",
  "/products/web",
  "/login",
  "/register",
];

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const pathWithoutLocale = pathname.replace(/^\/(en|tr)/, "");

  // Static files ve API routes için early return
  if (
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/r/") ||
    pathname.startsWith("/ping")
  ) {
    return NextResponse.next();
  }



  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})(/.*)?/?$`,
    "i",
  );

  const isPublicPage = publicPathnameRegex.test(pathname);

  
  if (isPublicPage) {
    return intlMiddleware(req);
  }

  // Auth kontrolü
  const token = await getToken({
    req: req,
    secret: process.env.AUTH_SECRET,
    secureCookie: !isDevelopmentEnvironment,
  });

  const isGuest = guestRegex.test(token?.email ?? "");

  // Login/register sayfalarından authenticated kullanıcıları yönlendir
  if (
    token &&
    !isGuest &&
    ["/login", "/register"].includes(pathWithoutLocale)
  ) {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  // Auth gerekli sayfalar için token kontrolü
  if (!token) {
    const redirectUrl = encodeURIComponent(req.url);

    return NextResponse.redirect(
      new URL(`/api/auth/guest?redirectUrl=${redirectUrl}`, req.url),
    );
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|robots.txt|sitemap.xml|favicon.ico|.*\\..*).*)",
  ],
};
