import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import Container from "@/app/components/containner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaPlus } from "react-icons/fa";

export default function Menu() {
    return (
        <Container className="flex flex-col items-center justify-center h-screen">
            <h1>Menu</h1>
            <div className="flex w-full h-full max-w-6xl">
                <Tabs
                    defaultValue="pizzas"
                    className="w-full h-full overflow-auto"
                >
                    <TabsList>
                        <TabsTrigger value="todos">Todos</TabsTrigger>
                        <TabsTrigger value="pizzas">Pizzas</TabsTrigger>
                        <TabsTrigger value="bebidas">Bebidas</TabsTrigger>
                    </TabsList>
                    <TabsContent
                        value="todos"
                        className="w-full h-full border-2 border-black flex flex-row items-center justify-start gap-4"
                    >
                        <Card className="relative w-full max-w-[150px] pt-0">
                            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                            <img
                                src="https://avatar.vercel.sh/shadcn1"
                                alt="Event cover"
                                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                            />

                            <CardHeader>
                                <CardTitle>Pizza Margherita</CardTitle>
                                <CardDescription>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-full mb-4">
                                            <h1>Ingredientes:</h1>
                                            <p className="w-full">
                                                molho de
                                                tomate,mussarela,manjericão
                                            </p>
                                        </div>
                                        <div className="w-full">
                                            <h1>Preço:</h1>
                                            <p>R$ 30,00</p>
                                        </div>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <button className="w-full bg-[#FFD700] text-black px-4 py-2 rounded-md flex items-center justify-center">
                                    Adicionar <FaPlus className="ml-2" />
                                </button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="bebidas">
                        <h1>Bebidas</h1>
                    </TabsContent>
                </Tabs>
            </div>
        </Container>
    );
}
