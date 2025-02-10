"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = () => {
    setDownloading(true)
    // Simulate download start
    setTimeout(() => {
      const link = document.createElement("a")
      link.href = "/saibaba.exe"
      link.download = "saibaba.exe"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setDownloading(false)
    }, 2000) // Simulate 2 second delay before download starts
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-orange-100 to-yellow-100">
      <h1 className="text-3xl font-bold text-orange-800 mb-4">Sai Baba Game</h1>
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-8">
        <Image src="/logo.jpeg" alt="Sai Baba" fill className="rounded-full object-cover shadow-lg" priority />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={handleDownload} className="bg-red-500 hover:bg-yellow-600 text-white" disabled={downloading}>
          {downloading ? "Downloading..." : "Download For Windows"}
        </Button>
      </div>
    </div>
  )
}

