"use client";
import { Button } from "@/components/ui/button";
import { LocateIcon, MessagesSquareIcon, Package } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RouteOptimizationNavbar() {
  const pathname = usePathname();

  if (pathname !== "/route-optimization") return <></>;
  return (
    <nav className="pl-40 flex gap-4">
      <Link href="/route-optimization/create-shipment">
        <Button
          variant="ghost"
          className="bg-primary/30 text-primary rounded-md !p-2"
        >
          <Package size={24} />
        </Button>
      </Link>
      <Button
        variant="ghost"
        className="bg-primary/30 text-primary rounded-md !p-2"
      >
        <LocateIcon size={24} />
      </Button>
      <Button
        variant="ghost"
        className="bg-primary/30 text-primary rounded-md !p-2"
      >
        <MessagesSquareIcon size={24} />
      </Button>
    </nav>
  );
}
