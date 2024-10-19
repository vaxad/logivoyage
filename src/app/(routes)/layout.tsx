import SolutionsNavbar from "@/components/custom/route-optimization/navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <SolutionsNavbar />
            {children}
        </div>
    );
}
