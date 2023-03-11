import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { browser } = userAgent(request);
  if (browser.name === "IE") {
    return NextResponse.rewrite(new URL("/not-supported-ie", request.url));
  }
  if (
    request.nextUrl.pathname.startsWith("/") &&
    request.nextUrl.pathname.length > 2 &&
    request.nextUrl.pathname !== "/not-supported-ie"
  ) {
    return NextResponse.rewrite(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - static (local image files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|static|favicon.ico).*)",
  ],
};
