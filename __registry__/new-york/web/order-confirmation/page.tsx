import Link from "next/link";
import { ArrowRight, Check, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function OrderConfirmationPage() {
  const orderNumber = "ORD-" + Math.floor(100000 + Math.random() * 900000);
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container max-w-3xl py-12">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
          <Check className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold">Order Confirmed!</h1>
        <p className="text-muted-foreground mt-2">
          Thank you for your purchase. Your order has been confirmed.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order Details</CardTitle>
          <CardDescription>
            Order #{orderNumber} was placed on {orderDate}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium">Items</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
                    <img
                      src="/static/image/earbuds.jpg"
                      alt="Wireless Headphones"
                      className="w-full h-full rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Wireless Headphones</p>
                    <p className="text-sm text-muted-foreground">Quantity: 1</p>
                  </div>
                </div>
                <p className="font-medium">$129.99</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
                    <img
                      src="/static/image/RunningShoes.jpg"
                      alt="Running Shoes"
                      className="w-full h-full rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Running Shoes</p>
                    <p className="text-sm text-muted-foreground">Quantity: 1</p>
                  </div>
                </div>
                <p className="font-medium">$89.99</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
                    <img
                      src="/static/image/backpack.jpg"
                      alt="Backpack"
                      className="w-full h-full rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Backpack</p>
                    <p className="text-sm text-muted-foreground">Quantity: 1</p>
                  </div>
                </div>
                <p className="font-medium">$49.99</p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-medium">Shipping Address</h3>
              <p className="text-sm text-muted-foreground">
                John Doe
                <br />
                123 Main St
                <br />
                New York, NY 10001
                <br />
                United States
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Payment Information</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.783 4.643h-2.189c-.11 0-.203.077-.219.185l-.305 1.938h3.777c.11 0 .216-.077.232-.185l.156-.992c.016-.109.11-.185.219-.185h.376c2.348 0 4.185-.51 5.362-1.616.963-.906 1.604-2.086 1.892-3.51a2.208 2.208 0 0 0-.87.01z" />
                  <path d="M20.887 7.684c-.12.076-.244.143-.376.219-.132.076-.272.152-.415.219.01-.076.01-.152.01-.228.3-1.938-.983-3.51-3.566-3.51h-5.783c-.524 0-.968.382-1.05.9l-2.255 14.3c-.028.174.1.337.277.337h2.423l.607-3.877c.016-.109.11-.185.22-.185h.65c3.063 0 5.45-.637 6.87-2.477.641-.84 1.07-1.938 1.318-3.238.083-.41.147-.807.19-1.18.12-.076.232-.152.35-.228.117-.076.233-.152.35-.219.082-.5.164-.109.246-.174a2.208 2.208 0 0 0-.066-.66z" />
                </svg>
                <span>PayPal</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="font-medium">Order Summary</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$269.97</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$21.60</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>$301.57</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <div className="flex items-center gap-4">
              <Package className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-medium">Shipping Status</h3>
                <p className="text-sm text-muted-foreground">
                  Your order is being processed
                </p>
              </div>
              <Button variant="outline" className="ml-auto" asChild>
                <Link href="#">
                  Track Order
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="#">Continue Shopping</Link>
          </Button>
          <Button asChild>
            <Link href="#">Track Order</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
