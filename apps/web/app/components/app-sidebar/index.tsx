"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { MdSpaceDashboard } from "react-icons/md";
import { FaConciergeBell } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

export default function AppSidebar() {
    const pathname = usePathname();
    const menuItems = [
        {
            icon: MdSpaceDashboard,
            label: "Dashboard",
            href: "/dashboard/painel",
        },
        {
            icon: FaConciergeBell,
            label: "Pedidos",
            href: "/dashboard/painel/requests",
        },
        {
            icon: FaPizzaSlice,
            label: "Cardapio",
            href: "/dashboard/painel/menu",
        },
        {
            icon: FaUsers,
            label: "Clientes",
            href: "/dashboard/painel/clients",
        },
        {
            icon: MdAttachMoney,
            label: "Financeiro",
            href: "/dashboard/painel/financial",
        },
        {
            icon: IoSettingsSharp,
            label: "Administracao",
            href: "/dashboard/painel/adm",
        },
    ];
    return (
        <Sidebar variant="inset">
            <SidebarHeader className="px-4 border-b border-gray-200">
                <h2 className="text-lg font-bold">Painel</h2>
            </SidebarHeader>
            <SidebarContent className="px-4 pt-4">
                <SidebarGroup>
                    <SidebarMenu className="space-y-3">
                        {menuItems.map((item) => (
                            <SidebarMenuItem
                                key={item.label}
                                className={
                                    pathname === item.href ? "bg-gray-100" : ""
                                }
                            >
                                <SidebarMenuButton asChild>
                                    <Link href={item.href}>
                                        <item.icon className="h-5 w-5" />
                                        <span className="ml-2">
                                            {item.label}
                                        </span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>{/* Rodapé (ex: logout, perfil) */}</SidebarFooter>
        </Sidebar>
    );
}
