import Image from "next/image";
import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
    return (
        <header className="w-full flex justify-center items-center bg-[#dcdcdc] ">
            <div className="w-full flex p-4 justify-start items-center max-w-6xl border-2 gap-4">
                {children}
                <Image
                    src="/logo-pizza.png"
                    alt="Pizzaria logo"
                    width={60}
                    height={60}
                />
                <h1 className="flex-1 text-center text-2xl font-bold text-[#FF4500]">
                    MY PIZZARIA
                </h1>
            </div>
        </header>
    );
}
