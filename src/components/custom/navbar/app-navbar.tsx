import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/ui/theme-toggler";
import { Bell, User } from "lucide-react";
import RouteOptimizationNavbar from "../route-optimization/navbar";

export default function SolutionsNavbar() {
  return (
    <section className="flex py-4 px-6 bg-background shadow-md justify-between items-center z-[1000]">
      <div className="flex">
        <SidebarTrigger
          variant="ghost"
          className="bg-primary/30 text-primary rounded-md !p-2"
        />
        <RouteOptimizationNavbar />
      </div>
      <div className="flex">
        <Input className="w-[400px] rounded-md" placeholder="Type here..." />
        <nav className="pl-12 flex gap-4">
          <Button
            variant="ghost"
            className="bg-primary/30 text-primary rounded-md !p-2"
          >
            <Bell size={24} />
          </Button>
          <Button
            variant="ghost"
            className="bg-primary/30 text-primary rounded-md !p-2"
          >
            <User size={24} />
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </section>
  );
}
