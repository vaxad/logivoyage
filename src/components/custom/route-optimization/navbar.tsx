import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/ui/theme-toggler";
import { Bell, LocateIcon, MessagesSquareIcon, Package, User } from "lucide-react";

export default function SolutionsNavbar() {
    return (
        <section className="flex py-4 px-12 bg-background shadow-md justify-between items-center z-[1000]">
            <div className="flex">
                <SidebarTrigger variant="ghost" className="bg-secondary/30 text-secondary rounded-md !p-2" />
                <nav className="pl-24 flex gap-4">
                    <Button variant="ghost" className="bg-secondary/30 text-secondary rounded-md !p-2">
                        <Package size={24} />
                    </Button>
                    <Button variant="ghost" className="bg-secondary/30 text-secondary rounded-md !p-2">
                        <LocateIcon size={24} />
                    </Button>
                    <Button variant="ghost" className="bg-secondary/30 text-secondary rounded-md !p-2">
                        <MessagesSquareIcon size={24} />
                    </Button>
                </nav>
            </div>
            <div className="flex">
                <Input className="w-[400px] rounded-md" placeholder="Type here..." />
                <nav className="pl-12 flex gap-4">
                    <Button variant="ghost" className="bg-secondary/30 text-secondary rounded-md !p-2">
                        <Bell size={24} />
                    </Button>
                    <Button variant="ghost" className="bg-secondary/30 text-secondary rounded-md !p-2">
                        <User size={24} />
                    </Button>
                    <ModeToggle />
                </nav>
            </div>
        </section>
    )
}
