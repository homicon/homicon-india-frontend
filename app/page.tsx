import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Brush, Droplet, Hammer, HomeIcon, Laptop, PaintBucket, Sparkles, Zap } from "lucide-react"

const services = [
  { title: "Cleaning", icon: Sparkles },
  { title: "Plumbing", icon: Droplet },
  { title: "Electrical", icon: Zap },
  { title: "Painting", icon: Brush },
  { title: "Carpentry", icon: Hammer },
  { title: "Appliance Repair", icon: Laptop },
  { title: "Pest Control", icon: HomeIcon },
  { title: "Home Decor", icon: PaintBucket },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Homicon India</h1>
        <p className="text-xl mb-8">Your one-stop solution for all home services</p>
        <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
          <Link href="/book">Book a Service Now</Link>
        </Button>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Popular Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold">{service.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Homicon India?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Expert Professionals</h3>
                <p>Our team consists of highly skilled and vetted professionals to ensure top-quality service.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
                <p>We offer competitive rates without compromising on the quality of our services.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                <p>Your satisfaction is our priority. We strive to exceed your expectations every time.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to transform your home?</h2>
        <Button size="lg" asChild>
          <Link href="/book">Book a Service Now</Link>
        </Button>
      </section>
    </div>
  )
}

