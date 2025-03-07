import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    // Get the path of the request
    const path = request.nextUrl.pathname

    // Define public paths that don't require authentication
    const isPublicPath = path === "/"

    // Check if user is authenticated
    const isAuthenticated = request.cookies.has("auth")

    // If trying to access protected route without authentication
    if (!isPublicPath && !isAuthenticated) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    // If trying to access login page while already authenticated
    if (isPublicPath && isAuthenticated) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    return NextResponse.next()
}

// Configure the middleware to run on specific paths
export const config = {
    matcher: ["/", "/dashboard/:path*"],
}

