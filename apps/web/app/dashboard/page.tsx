"use client";
import Link from "next/link";
import Image from "next/image";

import Container from "../components/containner";
import CardSimple from "../components/cardSimple";

export default function SeviceSelect() {
    return (
        <Container className="h-screen flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-2xl font-bold">Bem-vindo!</h2>
                <p className="text-lg text-center">
                    faça o pedido você mesmo ou chame o garçom!
                </p>
            </div>
            <div className="flex flex-col w-full items-center justify-center h-1/2 gap-4">
                <h1>Selecione um serviço</h1>
                <Link
                    href="dashboard/menu"
                    className="max-w-[300px] w-full flex hover:scale-105 transition-all duration-100 hover:border-2 hover:border-white hover:bg-white rounded-md group"
                >
                    <CardSimple
                        title="Menu"
                        className="w-full group-hover:bg-white group-hover:opacity-75"
                    >
                        {/* Imagem de trás */}
                        <div className="w-[140px] h-full relative flex items-center justify-center">
                            <Image
                                src={"/onde-fazer-cardapio-para-pizzaria.jpg"}
                                alt="Logo"
                                width={120}
                                height={120}
                                className="object-cover absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 rotate-12 opacity-90"
                            />

                            {/* Imagem da frente */}
                            <Image
                                src={"/onde-fazer-cardapio-para-pizzaria.jpg"}
                                alt="Logo"
                                width={115}
                                height={115}
                                className="object-cover absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 -rotate-12"
                            />
                        </div>
                    </CardSimple>
                </Link>
                <button className="max-w-[300px] w-full flex hover:scale-105 transition-all duration-100 hover:border-2 hover:border-white hover:bg-white rounded-md group cursor-pointer">
                    <CardSimple
                        title="Garçom"
                        className="w-full group-hover:bg-white group-hover:opacity-75"
                    >
                        <div className="w-[140px] h-full relative flex items-center justify-center">
                            <Image
                                src={"/garcom.png"}
                                alt="Logo"
                                fill
                                className="object-cover absolute top-1/2 left-[80%]  "
                            />
                        </div>
                    </CardSimple>
                </button>
            </div>
        </Container>
    );
}
