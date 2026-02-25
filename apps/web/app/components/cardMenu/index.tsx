import Image from "next/image";

export default function CardMenu(list: {
    id: string;
    image: string;
    name: string;
    price: number;
    description: string;
    category: string;
}) {
    return (
        <div key={list.id} className="bg-white/5 rounded-lg p-4 ">
            <div className="relative w-full h-20 md:h-25 rounded-md overflow-hidden">
                <Image
                    src={list.image}
                    alt={list.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="mt-2">
                <h3 className="text-lg font-bold text-white">{list.name}</h3>
                <p className="text-sm text-gray-300">{list.description}</p>
                <span className="text-green-400 font-semibold">
                    R$ {list.price.toFixed(2)}
                </span>
            </div>
        </div>
    );
}
