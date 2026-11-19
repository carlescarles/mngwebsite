import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SITE_URL } from "@/lib/site"
import "./globals.css"

const title = "M&G Real Estate | Dubai Property Investment, Sales & Off-Plan"
const description =
  "M&G Real Estate is a Dubai agency in Business Bay offering investment consulting, secondary market sales and off-plan property purchases."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "M&G Real Estate",
    title,
    description,
    locale: "en_AE",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
