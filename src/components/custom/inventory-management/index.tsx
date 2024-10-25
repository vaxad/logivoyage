import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  CreditCard,
  DollarSign,
  File,
  ListFilter,
  Users,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import CircularProgress from "@/components/ui/circular-progress";
import { DialogForm } from "./dialog-form";

const sampleTableData = [
  {
    title: "Textile Shipment",
    from: "Shanghai, China",
    to: "Los Angeles, USA",
    aisleNo: "A12",
    category: "Textiles",
    date: "2023-06-23",
    amount: "$250.00",
  },
  {
    title: "Electronics Shipment",
    from: "Shenzhen, China",
    to: "New York, USA",
    aisleNo: "B05",
    category: "Electronics",
    date: "2023-06-24",
    amount: "$150.00",
  },
  {
    title: "Furniture Shipment",
    from: "Guangzhou, China",
    to: "London, UK",
    aisleNo: "C02",
    category: "Furniture",
    date: "2023-06-25",
    amount: "$350.00",
  },
  {
    title: "Clothing Shipment",
    from: "Beijing, China",
    to: "Paris, France",
    aisleNo: "D15",
    category: "Clothing",
    date: "2023-06-23",
    amount: "$275.00",
  },
  {
    title: "Machinery Shipment",
    from: "Tianjin, China",
    to: "Berlin, Germany",
    aisleNo: "E08",
    category: "Machinery",
    date: "2023-06-24",
    amount: "$500.00",
  },
  {
    title: "Pharmaceutical Shipment",
    from: "Wuhan, China",
    to: "Toronto, Canada",
    aisleNo: "F10",
    category: "Pharmaceuticals",
    date: "2023-06-25",
    amount: "$400.00",
  },
  {
    title: "Automobile Parts Shipment",
    from: "Nanjing, China",
    to: "Detroit, USA",
    aisleNo: "G03",
    category: "Automobile Parts",
    date: "2023-06-23",
    amount: "$600.00",
  },
  {
    title: "Electronics Shipment",
    from: "Shenzhen, China",
    to: "New York, USA",
    aisleNo: "B05",
    category: "Electronics",
    date: "2023-06-24",
    amount: "$150.00",
  },
  {
    title: "Textile Shipment",
    from: "Shanghai, China",
    to: "Los Angeles, USA",
    aisleNo: "A12",
    category: "Textiles",
    date: "2023-06-23",
    amount: "$250.00",
  },
  {
    title: "Electronics Shipment",
    from: "Shenzhen, China",
    to: "New York, USA",
    aisleNo: "B05",
    category: "Electronics",
    date: "2023-06-24",
    amount: "$150.00",
  },
  {
    title: "Furniture Shipment",
    from: "Guangzhou, China",
    to: "London, UK",
    aisleNo: "C02",
    category: "Furniture",
    date: "2023-06-25",
    amount: "$350.00",
  },
];

export default function InventoryManagement() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        {/* <Button className="font-semibold text-lg p-4">Add Order</Button> */}
        <DialogForm />
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="A card showing the total revenue in USD and the percentage difference from last month.">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">+45,231.89</h1>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </div>
            <CircularProgress
              className="size-12"
              progress={20}
              color="hsl(var(--primary))"
            />
          </CardContent>
        </Card>
        <Card x-chunk="A card showing the total subscriptions and the percentage difference from last month.">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contracts</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">+2350</h1>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </div>
            <CircularProgress
              className="size-12"
              progress={180}
              color="hsl(var(--primary))"
            />
          </CardContent>
        </Card>
        <Card x-chunk="A card showing the total sales and the percentage difference from last month.">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">+12,234</h1>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </div>
            <CircularProgress
              className="size-12"
              progress={45}
              color="hsl(var(--primary))"
            />
          </CardContent>
        </Card>
        <Card x-chunk="A card showing the total active users and the percentage difference from last hour.">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>

          <CardContent className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">+573</h1>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </div>
            <CircularProgress
              className="size-12"
              progress={53}
              color="hsl(var(--primary))"
            />
          </CardContent>
        </Card>
      </div>
      <div>
        <Tabs defaultValue="week">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="week">This Week</TabsTrigger>
              {/* <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger> */}
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-sm"
                  >
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    All
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Category</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Aisle Number
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Export</span>
              </Button>
            </div>
          </div>
          <TabsContent value="week">
            <Card x-chunk="A table of recent orders showing the following columns: Customer, Type, Status, Date, and Amount.">
              <CardHeader className="px-7">
                <CardTitle>Stock</CardTitle>
                <CardDescription>Stock from your inventory.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Shipment</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Category
                      </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Aisle Number
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Date
                      </TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  {/* <ScrollArea className="w-full"> */}
                  <TableBody className="w-full">
                    {sampleTableData.map((item, idx) => (
                      <TableRow key={idx} className="bg-accent">
                        <TableCell>
                          <div className="font-medium">{item.title}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {item.from} to {item.to}
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          {item.category}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge
                            className="text-xs text-background"
                            variant="secondary"
                          >
                            {item.aisleNo}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {item.date}
                        </TableCell>
                        <TableCell className="text-right">
                          {item.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  {/* </ScrollArea> */}
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
