import Image from "next/image";

export default function CardSimple({
    children,
    className,
    title,
}: {
    children: React.ReactNode;
    className?: string;
    title: string;
}) {
    return (
        <div
            className={`bg-linear-to-r from-emerald-400 to-cyan-400 rounded-md shadow-sm relative w-full flex items-center justify-end overflow-hidden h-36 ${className}`}
        >
            {/* Área das imagens */}

            {children}

            {/* Texto central */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-white text-center px-4">
                    {title}
                </h2>
            </div>
        </div>
    );
}
