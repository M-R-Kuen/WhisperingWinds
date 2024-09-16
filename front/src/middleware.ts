import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware is running");

  const protectedRoutes = [
    "/profile",
    "/profile/orders",
    "/store",
    "/about",
    "/contact",
    "/home",
    "/login",
    "/login/register",
  ];

  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    console.log("Protected route accessed:", request.nextUrl.pathname);
    return NextResponse.redirect(new URL("/", request.url));
  }

  console.log("Allowed route:", request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/store/:path*",
    "/about",

    "/contact",
    "/home",
    "/login",
    "/login/register",
  ],
};
