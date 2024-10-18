import { Button } from "@/components/ui/button";
import { Sidebar } from "lucide-react";

export default function SolutionsNavbar() {
    return (
        <section className="flex py-6 px-12 bg-slate-50 shadow-md">
            <Button className="bg-secondary/30 text-secondary rounded-md !p-2">
                <Sidebar size={24} />
            </Button>
        </section>
    )
}
