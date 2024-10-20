import { AppSidebar } from "@/components/custom/sidebar/app-sidebar";
import SolutionsNavbar from "@/components/custom/navbar/app-navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <div className="flex flex-col min-h-screen w-full">
                <SolutionsNavbar />
                {children}
            </div>
        </SidebarProvider>

    );
}
