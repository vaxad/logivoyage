import * as React from "react";

import { SearchForm } from "@/components/custom/sidebar/search-form";
import { VersionSwitcher } from "@/components/custom/sidebar/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

// This is sample data.
const data = {
  versions: ["1.0.1"],
  navMain: [
    {
      title: "Business Intelligence",
      url: "",
      items: [
        // {
        //   title: "Home",
        //   url: "/dashboard",
        // },
        // {
        //   title: "Analytics",
        //   url: "/analytics",
        // },
      ],
    },
    {
      title: "Solutions",
      url: "",
      items: [
        {
          title: "Home",
          url: "/dashboard",
        },
        {
          title: "Inventory Management",
          url: "/inventory-management",
          // isActive: true,
        },
        {
          title: "Asset Utilization",
          url: "/asset-utilization",
        },
        {
          title: "Routes",
          url: "/route-optimization",
        },
        {
          title: "Analytics",
          url: "/analytics",
        },
        {
          title: "Sustainability",
          url: "/sustainability",
        },
        {
          title: "Support",
          url: "/support",
        },
        // {
        //   title: "Caching",
        //   url: "#",
        // },
        // {
        //   title: "Styling",
        //   url: "#",
        // },
        // {
        //   title: "Optimizing",
        //   url: "#",
        // },
        // {
        //   title: "Configuring",
        //   url: "#",
        // },
        // {
        //   title: "Testing",
        //   url: "#",
        // },
        // {
        //   title: "Authentication",
        //   url: "#",
        // },
        // {
        //   title: "Deploying",
        //   url: "#",
        // },
        // {
        //   title: "Upgrading",
        //   url: "#",
        // },
        // {
        //   title: "Examples",
        //   url: "#",
        // },
      ],
    },
    {
      title: "How it works?",
      url: "",
      items: [
        // {
        //   title: "Architecture",
        //   url: "/architecture",
        // },
        // {
        //   title: "Usage",
        //   url: "/usage",
        // },
        // {
        //   title: "Functions",
        //   url: "#",
        // },
        // {
        //   title: "next.config.js Options",
        //   url: "#",
        // },
        // {
        //   title: "CLI",
        //   url: "#",
        // },
        // {
        //   title: "Edge Runtime",
        //   url: "#",
        // },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            {/* <SidebarGroupLabel>{item.title}</SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild url={item.url}>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
