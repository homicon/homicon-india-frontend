import "./globals.css"
import { Inter } from "next/font/google"
import { Navigation } from "./components/navigation"
import { Footer } from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Home Services Booking",
  description: "Book home services with ease",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

