import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-xujVohU6NGCLEqMCsAH5hQkObg5kpX.png"
              alt="Homicon India Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-primary"></span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input type="text" placeholder="Search for services" className="pl-10 pr-4 py-2 w-64" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button variant="ghost" asChild>
              <Link href="/book">Book a Service</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/user">My Bookings</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

