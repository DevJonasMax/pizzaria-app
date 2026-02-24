import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/app/components/header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/app/components/app-sidebar";
import { CustomSidebarTrigger } from "../components/customSidebarTrigger";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body>
                <TooltipProvider>
                    <SidebarProvider>
                        <div className="flex min-h-screen w-full">
                            <AppSidebar />

                            <div className="flex flex-col flex-1">
                                <Header>
                                    <CustomSidebarTrigger />
                                </Header>

                                <main className="flex-1 p-4">{children}</main>
                            </div>
                        </div>
                    </SidebarProvider>
                </TooltipProvider>
            </body>
        </html>
    );
}
