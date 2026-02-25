"use client";
import Container from "@/app/components/containner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { products } from "./listExemple";
import CardMenu from "@/app/components/cardMenu";
export default function RestaurantMenu() {
    const plugin = useRef(
        Autoplay({
            delay: 4000,
            stopOnInteraction: false,
        }),
    );
    const categories = Array.from(
        new Set(products.map((product) => product.category)),
    );
    return (
        <Container className="w-full h-full flex items-center justify-center bg-neutral-900">
            <div className="flex flex-col items-center justify-center w-full max-w-6xl ">
                <div className="flex items-center justify-center p-8">
                    <h1 className="text-4xl font-bold text-white">MENU</h1>
                </div>
                <div className="flex flex-col items-center  w-full min-h-screen gap-4">
                    <div className=" flex w-full ">
                        <Carousel className="w-full" plugins={[plugin.current]}>
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="relative w-full h-42 md:h-45 overflow-hidden rounded-xl">
                                        <Image
                                            src="/frango-catupiry.jpg"
                                            alt="Frango com Catupiry"
                                            fill
                                            priority
                                            quality={100}
                                            className="object-cover"
                                        />

                                        {/* Overlay escuro */}
                                        <div className="absolute inset-0 bg-black/40" />

                                        {/* Texto */}
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <h2 className="text-2xl md:text-4xl font-bold">
                                                Frango com Catupiry
                                            </h2>
                                            <p className="text-sm md:text-lg opacity-90">
                                                As mais pedida da casa 🍕
                                            </p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="relative w-full h-42 md:h-45 overflow-hidden rounded-xl">
                                        <Image
                                            src="/pizza-calabresa.jpg"
                                            alt="Pizza com Calabressa"
                                            fill
                                            priority
                                            quality={100}
                                            className="object-cover"
                                        />

                                        {/* Overlay escuro */}
                                        <div className="absolute inset-0 bg-black/40" />

                                        {/* Texto */}
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <h2 className="text-2xl md:text-4xl font-bold">
                                                Calabressa
                                            </h2>
                                            <p className="text-sm md:text-lg opacity-90">
                                                As mais pedida da casa 🍕
                                            </p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="relative w-full h-42 md:h-45 overflow-hidden rounded-xl">
                                        <Image
                                            src="/pizza-portuguesa.jpg"
                                            alt="Pizza com Portuguesa"
                                            fill
                                            priority
                                            quality={100}
                                            className="object-cover"
                                        />

                                        {/* Overlay escuro */}
                                        <div className="absolute inset-0 bg-black/40" />

                                        {/* Texto */}
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <h2 className="text-2xl md:text-4xl font-bold">
                                                Portuguesa
                                            </h2>
                                            <p className="text-sm md:text-lg opacity-90">
                                                As mais pedida da casa 🍕
                                            </p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>

                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                    <div className="w-full overflow-x-auto no-scrollbar">
                        <Tabs defaultValue="pizzas" className="w-full">
                            <div className="relative w-full mb-4">
                                <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-neutral-900 to-transparent z-10 opacity-80" />
                                <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-neutral-900 to-transparent z-10 opacity-80" />

                                <div className="overflow-x-auto no-scrollbar">
                                    <TabsList className="flex w-max gap-3 bg-transparent p-2">
                                        <TabsTrigger
                                            value="todos"
                                            className="whitespace-nowrap rounded-full px-5 py-4 text-sm
                     bg-white/10 text-white
                     data-[state=active]:bg-white
                     data-[state=active]:text-black
                     transition-all duration-300"
                                        >
                                            Todos
                                        </TabsTrigger>

                                        {categories.map((category) => (
                                            <TabsTrigger
                                                key={category}
                                                value={category}
                                                className="whitespace-nowrap rounded-full px-5 py-4 text-sm
                       bg-white/10 text-white
                       data-[state=active]:bg-white
                       data-[state=active]:text-black
                       transition-all duration-300"
                                            >
                                                {category
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    category.slice(1)}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                </div>
                            </div>

                            <TabsContent value="todos">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                                    {products.map((product) => (
                                        <CardMenu
                                            key={product.id}
                                            {...product}
                                        />
                                    ))}
                                </div>
                            </TabsContent>

                            {categories.map((category) => (
                                <TabsContent key={category} value={category}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                                        {products
                                            .filter(
                                                (product) =>
                                                    product.category ===
                                                    category,
                                            )
                                            .map((product) => (
                                                <CardMenu
                                                    key={product.id}
                                                    {...product}
                                                />
                                            ))}
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </div>
        </Container>
    );
}
