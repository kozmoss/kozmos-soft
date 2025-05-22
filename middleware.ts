import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { guestRegex, isDevelopmentEnvironment } from './lib/constants';

const publicPages = [
  "/",
  "/ai",
  "/about-us",
  "/contact-us",
  "/mobile",
  "/products/web",
  "/view/styles/new-york/e-commerce"
];

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

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

  console.log(token,"token")

  // Dynamic paths that should be public
  const localePrefix = `/(${routing.locales.join("|")})?`;
  const productsWebRegex = new RegExp(`^${localePrefix}/products/web(/.*)?$`, "i");
  const viewStylesRegex = new RegExp(`^${localePrefix}/view/styles(/.*)?$`, "i");

  // Check if current path is public
  const isPublicPage = publicPathnameRegex.test(pathname);
  const isProductsWeb = productsWebRegex.test(pathname);
  const isViewStyles = viewStylesRegex.test(pathname);

  // If it's a public page, allow access
  if (isPublicPage || isProductsWeb || isViewStyles) {
    return intlMiddleware(req);
  }





  // If authenticated, continue with intl middleware
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};