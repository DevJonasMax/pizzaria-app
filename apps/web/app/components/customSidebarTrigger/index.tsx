"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function CustomSidebarTrigger() {
    const { open, toggleSidebar } = useSidebar();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="cursor-pointer"
        >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
    );
}
