"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    // Check if user is already logged in
    useEffect(() => {
        // Check for auth cookie
        const isAuthenticated = document.cookie.split(";").some((item) => item.trim().startsWith("auth="))

        if (isAuthenticated) {
            window.location.href = "/dashboard"
        }
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        // Hard-coded credentials
        const validEmail = "admin@example.com"
        const validPassword = "password123"

        try {
            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Check if credentials match
            if (email === validEmail && password === validPassword) {
                console.log("Login successful!")

                // Store user data in localStorage for persistence
                const userData = { email, name: "Admin User" }
                localStorage.setItem("user", JSON.stringify(userData))

                // Set authentication cookie for middleware
                document.cookie = "auth=true; path=/; max-age=86400" // 24 hours

                // Redirect after successful login
                window.location.href = "/dashboard"
            } else {
                throw new Error("Invalid credentials")
            }
        } catch (err) {
            setError("Invalid email or password. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold ">Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
                {/* <div className="mt-2 p-2 bg-muted rounded-md text-sm">
                    <p>
                        <strong>Demo Credentials:</strong>
                    </p>
                    <p>Email: admin@example.com</p>
                    <p>Password: password123</p>
                </div> */}
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    {error && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Button variant="link" className="p-0 h-auto text-sm" type="button">
                                Forgot password?
                            </Button>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Log in"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

