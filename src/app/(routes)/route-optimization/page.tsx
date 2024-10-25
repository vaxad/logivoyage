import RouteOptimization from "@/components/custom/route-optimization";
import { RouteOptimizationCard, Status } from "@/lib/types/route-optimization";

const sampleData: RouteOptimizationCard[] = [
  {
    id: "1jfdjdshbfwej",
    title: "Random Shipment",
    status: Status.COMPLETED,
    weatherData: [
      { weather: "sunny", chances: 275 },
      { weather: "rainy", chances: 9 },
      { weather: "humid", chances: 187 },
      { weather: "cold", chances: 5 },
      { weather: "foggy", chances: 3 },
    ],
    price: 10000,
    journey: {
      from: "China",
      via: ["Singapore", "Malaysia"],
      to: "Miami",
      progress: 0.9,
      route: [
        [25.7617, -80.1918],
        [30.2672, -97.7431],
        [32.7767, -96.797],
        [29.7604, -95.3698],
        [25.7617, -80.1918],
      ],
      viaRoute: [
        [32.7767, -96.797],
        [29.7604, -95.3698],
      ],
    },
    vehicle: {
      company: "FreightCo",
      model: "XPT-200",
      space: 50,
      volume: 5000,
      weight: 20000,
    },
    order: {
      title: "Electronic Goods",
      quantity: 100,
      weight: 1000,
      volume: 3000,
      payment: "Credit Card",
    },
    history: [
      {
        id: "INV001",
        status: "Paid",
        method: "Money Order",
        amount: 34455,
      },
    ],
    checkpoints: [
      {
        title: "Checking",
        progress: 100,
        date: "2022-01-23",
      },
      {
        title: "Processing",
        progress: 100,
        date: "2022-01-24",
      },
      {
        title: "Dispatched",
        progress: 100,
        date: "2022-01-26",
      },
      {
        title: "In Transit",
        progress: 78,
        date: "2022-01-28",
      },
      {
        title: "Delivered",
        progress: 0,
        date: "2022-01-30",
      },
    ],
  },
  {
    id: "2jhbsdihvdau",
    title: "BKC Shipment",
    status: Status.PENDING,
    price: 20000,
    weatherData: [
      { weather: "sunny", chances: 175 },
      { weather: "rainy", chances: 34 },
      { weather: "humid", chances: 127 },
      { weather: "cold", chances: 54 },
      { weather: "foggy", chances: 33 },
    ],
    journey: {
      from: "Texas",
      to: "Toronto",
      progress: 0.6,
      route: [
        [43.65107, -79.347015],
        [40.7128, -74.006],
        [34.0522, -118.2437],
        [32.7157, -117.1611],
        [29.7604, -95.3698],
        [43.65107, -79.347015],
      ],
    },
    vehicle: {
      company: "LogiTrans",
      model: "FTR-300",
      space: 70,
      volume: 7000,
      weight: 30000,
    },
    order: {
      title: "Heavy Machinery",
      quantity: 20,
      weight: 5000,
      volume: 10000,
      payment: "Paypal",
    },
    history: [
      {
        id: "INV002",
        status: "Pending",
        method: "Credit Card",
        amount: 12455,
      },
    ],
    checkpoints: [
      {
        title: "Checking",
        progress: 100,
        date: "2022-01-23",
      },
      {
        title: "Processing",
        progress: 100,
        date: "2022-01-24",
      },
      {
        title: "Dispatched",
        progress: 100,
        date: "2022-01-26",
      },
      {
        title: "In Transit",
        progress: 78,
        date: "2022-01-28",
      },
      {
        title: "Delivered",
        progress: 0,
        date: "2022-01-30",
      },
    ],
  },
  {
    id: "3jfdjshfwej",
    title: "Textiles",
    status: Status.READY,
    price: 30000,
    weatherData: [
      { weather: "sunny", chances: 235 },
      { weather: "rainy", chances: 94 },
      { weather: "humid", chances: 17 },
      { weather: "cold", chances: 53 },
      { weather: "foggy", chances: 3 },
    ],
    journey: {
      from: "Malad",
      to: "Andheri",
      progress: 0.5,
      route: [
        [19.076, 72.8777],
        [19.1197, 72.8464],
        [19.076, 72.8777],
      ],
    },
    vehicle: {
      company: "TextiMovers",
      model: "TX-150",
      space: 30,
      volume: 2000,
      weight: 10000,
    },
    order: {
      title: "Textile Rolls",
      quantity: 500,
      weight: 2500,
      volume: 4000,
      payment: "Bank Transfer",
    },
    history: [
      {
        id: "INV003",
        status: "Paid",
        method: "Paypal",
        amount: 3455,
      },
    ],
    checkpoints: [
      {
        title: "Checking",
        progress: 100,
        date: "2022-01-23",
      },
      {
        title: "Processing",
        progress: 100,
        date: "2022-01-24",
      },
      {
        title: "Dispatched",
        progress: 100,
        date: "2022-01-26",
      },
      {
        title: "In Transit",
        progress: 78,
        date: "2022-01-28",
      },
      {
        title: "Delivered",
        progress: 0,
        date: "2022-01-30",
      },
    ],
  },
  {
    id: "5jfhdsjkhfwe",
    title: "Medical Supplies Shipment",
    status: Status.COMPLETED,
    weatherData: [
      { weather: "sunny", chances: 295 },
      { weather: "rainy", chances: 9 },
      { weather: "humid", chances: 187 },
      { weather: "cold", chances: 5 },
      { weather: "foggy", chances: 3 },
    ],
    price: 45000,
    journey: {
      from: "Germany",
      to: "Canada",
      via: ["Finland"],
      progress: 0.8,
      route: [
        [51.1657, 10.4515],
        [50.1109, 8.6821],
        [48.8566, 2.3522],
        [45.5017, -73.5673],
        [51.1657, 10.4515],
      ],
      viaRoute: [[48.8566, 2.3522]],
    },
    vehicle: {
      company: "MediCargo",
      model: "RX-400",
      space: 60,
      volume: 6000,
      weight: 15000,
    },
    order: {
      title: "Vaccines",
      quantity: 10000,
      weight: 5000,
      volume: 12000,
      payment: "Wire Transfer",
    },
    history: [
      {
        id: "INV005",
        status: "Paid",
        method: "Credit Card",
        amount: 45000,
      },
    ],
    checkpoints: [
      {
        title: "Collected",
        progress: 100,
        date: "2022-02-01",
      },
      {
        title: "Shipped",
        progress: 100,
        date: "2022-02-03",
      },
      {
        title: "In Transit",
        progress: 80,
        date: "2022-02-05",
      },
    ],
  },
  {
    id: "6sfdhksjdhfwe",
    title: "Furniture Delivery",
    status: Status.COMPLETED,
    price: 30000,
    weatherData: [
      { weather: "sunny", chances: 75 },
      { weather: "rainy", chances: 394 },
      { weather: "humid", chances: 17 },
      { weather: "cold", chances: 152 },
      { weather: "foggy", chances: 33 },
    ],
    journey: {
      from: "Italy",
      to: "United Kingdom",
      progress: 1.0,
      route: [
        [41.9028, 12.4964],
        [48.8566, 2.3522],
        [51.5074, -0.1278],
      ],
    },
    vehicle: {
      company: "FurniTrans",
      model: "FT-700",
      space: 80,
      volume: 8000,
      weight: 25000,
    },
    order: {
      title: "Luxury Furniture",
      quantity: 50,
      weight: 7000,
      volume: 10000,
      payment: "Bank Transfer",
    },
    history: [
      {
        id: "INV006",
        status: "Paid",
        method: "Paypal",
        amount: 30000,
      },
    ],
    checkpoints: [
      {
        title: "Confirmed",
        progress: 100,
        date: "2022-03-10",
      },
      {
        title: "Processing",
        progress: 100,
        date: "2022-03-12",
      },
      {
        title: "Shipped",
        progress: 100,
        date: "2022-03-15",
      },
      {
        title: "Delivered",
        progress: 100,
        date: "2022-03-20",
      },
    ],
  },
  {
    id: "7gdhkjfdshfwe",
    title: "Food Supplies Transport",
    status: Status.PENDING,
    price: 50000,
    weatherData: [
      { weather: "sunny", chances: 275 },
      { weather: "rainy", chances: 9 },
      { weather: "humid", chances: 187 },
      { weather: "cold", chances: 5 },
      { weather: "foggy", chances: 3 },
    ],
    journey: {
      from: "California",
      to: "New York",
      progress: 0.4,
      route: [
        [34.0522, -118.2437],
        [36.7783, -119.4179],
        [40.7128, -74.006],
      ],
    },
    vehicle: {
      company: "FreshFoods",
      model: "FF-500",
      space: 40,
      volume: 4500,
      weight: 15000,
    },
    order: {
      title: "Organic Groceries",
      quantity: 500,
      weight: 2000,
      volume: 3000,
      payment: "Cash on Delivery",
    },
    history: [
      {
        id: "INV007",
        status: "Pending",
        method: "Bank Transfer",
        amount: 50000,
      },
    ],
    checkpoints: [
      {
        title: "Scheduled",
        progress: 100,
        date: "2022-04-01",
      },
      {
        title: "Preparing",
        progress: 100,
        date: "2022-04-03",
      },
      {
        title: "Dispatched",
        progress: 40,
        date: "2022-04-05",
      },
    ],
  },
  {
    id: "8hfdsjkfhswe",
    title: "Automobile Parts Delivery",
    status: Status.READY,
    price: 60000,
    weatherData: [
      { weather: "sunny", chances: 575 },
      { weather: "rainy", chances: 96 },
      { weather: "humid", chances: 17 },
      { weather: "cold", chances: 5 },
      { weather: "foggy", chances: 3 },
    ],
    journey: {
      from: "Detroit",
      to: "Los Angeles",
      progress: 0.0,
      route: [
        [42.3314, -83.0458],
        [36.7783, -119.4179],
        [34.0522, -118.2437],
      ],
    },
    vehicle: {
      company: "AutoMovers",
      model: "AM-900",
      space: 100,
      volume: 9000,
      weight: 35000,
    },
    order: {
      title: "Car Engines",
      quantity: 150,
      weight: 8000,
      volume: 9000,
      payment: "Credit Card",
    },
    history: [
      {
        id: "INV008",
        status: "Paid",
        method: "Credit Card",
        amount: 60000,
      },
    ],
    checkpoints: [
      {
        title: "Order Placed",
        progress: 100,
        date: "2022-05-01",
      },
      {
        title: "Ready for Dispatch",
        progress: 0,
        date: "2022-05-05",
      },
    ],
  },
  {
    id: "9kfjdshkjfhwe",
    title: "Pharmaceutical Delivery",
    status: Status.COMPLETED,
    price: 70000,
    weatherData: [
      { weather: "sunny", chances: 275 },
      { weather: "rainy", chances: 9 },
      { weather: "humid", chances: 187 },
      { weather: "cold", chances: 5 },
      { weather: "foggy", chances: 3 },
    ],
    journey: {
      from: "India",
      to: "Dubai",
      progress: 0.7,
      route: [
        [20.5937, 78.9629],
        [25.276987, 55.296249],
      ],
    },
    vehicle: {
      company: "PharmaShip",
      model: "PS-800",
      space: 70,
      volume: 6000,
      weight: 12000,
    },
    order: {
      title: "Medical Equipment",
      quantity: 250,
      weight: 3000,
      volume: 4000,
      payment: "Wire Transfer",
    },
    history: [
      {
        id: "INV009",
        status: "Paid",
        method: "Wire Transfer",
        amount: 70000,
      },
    ],
    checkpoints: [
      {
        title: "Order Confirmed",
        progress: 100,
        date: "2022-06-01",
      },
      {
        title: "Dispatched",
        progress: 100,
        date: "2022-06-03",
      },
      {
        title: "In Transit",
        progress: 70,
        date: "2022-06-05",
      },
    ],
  },
];

export default function Page() {
  return <RouteOptimization data={sampleData} />;
}
