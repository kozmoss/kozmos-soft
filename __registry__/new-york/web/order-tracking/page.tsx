"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Clock, Package, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { order } from "@/data/orderData"

export default function OrderTrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [orderNumber, setOrderNumber] = useState("")
  const [isTracking, setIsTracking] = useState(true)

  // Mock order data - in a real app, this would come from an API
  return (
    <div className="container py-8">
      <Link href="" className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>
      <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>

      <Tabs defaultValue="tracking" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="tracking" onClick={() => setIsTracking(true)}>
            Track by Order
          </TabsTrigger>
          <TabsTrigger value="lookup" onClick={() => setIsTracking(false)}>
            Order Lookup
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tracking">
          {isTracking ? (
            <Card>
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
                <CardDescription>
                  Order #{order.id} placed on {order.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Current Status</h3>
                    <p className="text-sm text-muted-foreground">{order.status}</p>
                  </div>
                  <div className="text-right">
                    <h3 className="font-medium">Estimated Delivery</h3>
                    <p className="text-sm text-muted-foreground">{order.estimatedDelivery}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Tracking Number:</span>
                    <span className="font-medium">{order.trackingNumber}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Carrier:</span>
                    <span className="font-medium">{order.carrier}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-6">
                  <h3 className="font-medium">Tracking History</h3>

                  <div className="relative">
                    <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-muted" />

                    <div className="space-y-6">
                      {order.history.map((event, index) => (
                        <div key={index} className="relative pl-8">
                          <div
                            className={`absolute left-0 top-1 h-6 w-6 rounded-full border ${
                              event.completed
                                ? "bg-primary border-primary text-primary-foreground"
                                : "bg-background border-muted"
                            } flex items-center justify-center`}
                          >
                            {event.completed ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : index === 4 ? (
                              <Truck className="h-4 w-4" />
                            ) : index === 5 ? (
                              <Package className="h-4 w-4" />
                            ) : (
                              <Clock className="h-4 w-4" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium">{event.status}</h4>
                            <p className="text-sm text-muted-foreground">
                              {event.date} at {event.time} • {event.location}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Order Items</h3>
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div className="flex gap-4">
                          <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover rounded-md"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">Need Help?</Link>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Track Your Order</CardTitle>
                <CardDescription>Enter your order number to track your shipment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="order-number">Order Number</Label>
                    <Input
                      id="order-number"
                      placeholder="e.g. ORD-123456"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => setIsTracking(true)}>
                  Track Order
                </Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="lookup">
          <Card>
            <CardHeader>
              <CardTitle>Look Up Your Order</CardTitle>
              <CardDescription>
                Don&apos;t have your tracking number? Look up your order with your email and order number
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="order-id">Order Number</Label>
                  <Input
                    id="order-id"
                    placeholder="e.g. ORD-123456"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => setIsTracking(true)}>
                Find Order
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

