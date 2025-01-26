"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Phone } from "lucide-react"

// Mock data for bookings
const upcomingBookings = [
  {
    id: 1,
    service: "Cleaning",
    date: "2023-05-15",
    time: "14:00",
    address: "123 Main St, Mumbai",
    status: "Confirmed",
    provider: "Rahul S.",
  },
  {
    id: 2,
    service: "Plumbing",
    date: "2023-05-20",
    time: "10:00",
    address: "456 Park Ave, Delhi",
    status: "Pending",
    provider: "Amit K.",
  },
]

const pastBookings = [
  {
    id: 3,
    service: "Electrical",
    date: "2023-04-10",
    time: "11:00",
    address: "789 Oak Rd, Bangalore",
    status: "Completed",
    provider: "Priya M.",
  },
  {
    id: 4,
    service: "Cleaning",
    date: "2023-03-25",
    time: "09:00",
    address: "321 Pine St, Chennai",
    status: "Completed",
    provider: "Sanjay R.",
  },
]

export default function UserPanel() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const renderBookingCard = (booking: any) => (
    <Card key={booking.id} className="mb-4">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{booking.service}</CardTitle>
          <Badge
            variant={
              booking.status === "Completed" ? "secondary" : booking.status === "Confirmed" ? "success" : "warning"
            }
          >
            {booking.status}
          </Badge>
        </div>
        <CardDescription>Booking ID: #{booking.id}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{booking.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{booking.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{booking.address}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold">Service Provider</div>
            <div>{booking.provider}</div>
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              <span>Contact Support</span>
            </div>
          </div>
        </div>
        <div className="mt-4 space-x-2">
          {booking.status !== "Completed" && (
            <>
              <Button variant="outline" size="sm">
                Reschedule
              </Button>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
            </>
          )}
          <Button variant="secondary" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          {upcomingBookings.length > 0 ? (
            upcomingBookings.map(renderBookingCard)
          ) : (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground mb-4">You have no upcoming bookings.</p>
                <Button asChild>
                  <a href="/book">Book a Service</a>
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="past">
          {pastBookings.length > 0 ? (
            pastBookings.map(renderBookingCard)
          ) : (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">You have no past bookings.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

