export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    featured?: boolean;
}

export const products: Product[] = [
    // 🍕 PIZZAS
    {
        id: "1",
        name: "Frango com Catupiry",
        description: "Frango desfiado, catupiry original e orégano",
        price: 49.9,
        image: "/frango-catupiry.jpg",
        category: "pizzas",
        featured: true,
    },
    {
        id: "2",
        name: "Calabresa",
        description: "Calabresa fatiada, cebola roxa e azeitonas",
        price: 45.9,
        image: "/calabresa.jpg",
        category: "pizzas",
    },
    {
        id: "3",
        name: "Marguerita",
        description: "Molho artesanal, mussarela e manjericão fresco",
        price: 47.9,
        image: "/marguerita.jpg",
        category: "pizzas",
    },

    // 🥤 BEBIDAS
    {
        id: "4",
        name: "Coca-Cola 2L",
        description: "Refrigerante Coca-Cola 2 litros",
        price: 12.9,
        image: "/coca-2l.jpg",
        category: "bebidas",
    },
    {
        id: "5",
        name: "Guaraná Antarctica 2L",
        description: "Guaraná Antarctica gelado 2 litros",
        price: 11.9,
        image: "/guarana-2l.jpg",
        category: "bebidas",
    },
    {
        id: "6",
        name: "Água Mineral",
        description: "Água mineral sem gás 500ml",
        price: 4.9,
        image: "/agua.jpg",
        category: "bebidas",
    },
    {
        id: "7",
        name: "X-Burguer",
        description: "Pão brioche, hambúrguer 180g, queijo e molho especial",
        price: 29.9,
        image: "/x-burguer.jpg",
        category: "lanches",
    },
    {
        id: "8",
        name: "X-Salada",
        description: "Hambúrguer 180g, queijo, alface, tomate e maionese",
        price: 31.9,
        image: "/x-salada.jpg",
        category: "lanches",
    },

    // 🍟 PORÇÕES
    {
        id: "9",
        name: "Batata Frita",
        description: "Porção de batata frita crocante 400g",
        price: 22.9,
        image: "/batata-frita.jpg",
        category: "porcoes",
    },
    {
        id: "10",
        name: "Calabresa Acebolada",
        description: "Calabresa fatiada com cebola caramelizada",
        price: 34.9,
        image: "/calabresa-acebolada.jpg",
        category: "porcoes",
    },

    // 🍰 SOBREMESAS
    {
        id: "11",
        name: "Petit Gateau",
        description: "Bolo quente de chocolate com sorvete de creme",
        price: 19.9,
        image: "/petit-gateau.jpg",
        category: "sobremesas",
    },
    {
        id: "12",
        name: "Pudim",
        description: "Pudim tradicional de leite condensado",
        price: 14.9,
        image: "/pudim.jpg",
        category: "sobremesas",
    },

    {
        id: "13",
        name: "Heineken Long Neck",
        description: "Cerveja Heineken 330ml gelada",
        price: 12.9,
        image: "/heineken.jpg",
        category: "alcoolicas",
    },
    {
        id: "14",
        name: "Caipirinha",
        description: "Limão, açúcar e cachaça premium",
        price: 18.9,
        image: "/caipirinha.jpg",
        category: "alcoolicas",
    },

    // 🥗 SALADAS
    {
        id: "15",
        name: "Salada Caesar",
        description: "Alface, frango grelhado, parmesão e molho caesar",
        price: 27.9,
        image: "/salada-caesar.jpg",
        category: "saladas",
    },
    {
        id: "16",
        name: "Salada Tropical",
        description: "Mix de folhas, manga, tomate cereja e molho especial",
        price: 25.9,
        image: "/salada-tropical.jpg",
        category: "saladas",
    },
];
