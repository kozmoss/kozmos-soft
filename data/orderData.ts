export const order = {
    id: "ORD-123456",
    date: "April 7, 2023",
    status: "In Transit",
    trackingNumber: "TRK-9876543210",
    carrier: "Express Shipping",
    estimatedDelivery: "April 10, 2023",
    history: [
      {
        status: "Order Placed",
        date: "April 7, 2023",
        time: "09:15 AM",
        location: "Online",
        completed: true,
      },
      {
        status: "Payment Confirmed",
        date: "April 7, 2023",
        time: "09:20 AM",
        location: "Online",
        completed: true,
      },
      {
        status: "Processing",
        date: "April 7, 2023",
        time: "11:30 AM",
        location: "Warehouse",
        completed: true,
      },
      {
        status: "Shipped",
        date: "April 8, 2023",
        time: "08:45 AM",
        location: "Distribution Center",
        completed: true,
      },
      {
        status: "In Transit",
        date: "April 9, 2023",
        time: "10:20 AM",
        location: "En Route",
        completed: false,
      },
      {
        status: "Out for Delivery",
        date: "April 10, 2023",
        time: "08:00 AM",
        location: "Local Facility",
        completed: false,
      },
      {
        status: "Delivered",
        date: "April 10, 2023",
        time: "02:30 PM",
        location: "Destination",
        completed: false,
      },
    ],
    items: [
      {
        id: "1",
        name: "Wireless Headphones",
        price: 129.99,
        quantity: 1,
        image:"/static/image/earbuds.jpg"
      },
      {
        id: "3",
        name: "Running Shoes",
        price: 89.99,
        quantity: 1,
        image:"/static/image/runningshoes.jpg"
      },
      {
        id: "5",
        name: "Backpack",
        price: 49.99,
        quantity: 1,
        image:"/static/image/backpack.jpg"
      },
    ],
  }