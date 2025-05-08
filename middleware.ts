import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const publicPages = [
  "/",
  "/ai",
  "/about-us",
  "/contact-us",
  "/mobile",
  "/chat",
  "/products/web",
];

const intlMiddleware = createMiddleware(routing);

const authMiddleware = withAuth((req) => intlMiddleware(req), {
  callbacks: {
    authorized: ({ token }) => token != null,
  },
  pages: {
    signIn: "/",
  },
});

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i",
  );
  
  // Check if the path starts with /products or /view/styles
  const localePrefix = `/(${routing.locales.join("|")})?`;
  const productsRegex = new RegExp(`^${localePrefix}/products`, "i");
  const viewStylesRegex = new RegExp(`^${localePrefix}/view/styles`, "i");
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage || productsRegex || viewStylesRegex) {
    // Allow access to public pages and paths starting with /products or /view/styles
    return intlMiddleware(req);
  } else {
    // For all other paths, apply authentication
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Match all pathnames except for
  // - ... if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - ... the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};