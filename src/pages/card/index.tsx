import React from "react";

interface FastFoodProps {
    image: string;
    ingredients: string[];
    price: number;
    onClick?: () => void;
    nome: string;
}

const FastFoodCard: React.FC<FastFoodProps> = ({
    nome,
    image,
    ingredients,
    price,
    onClick,
}) => {
    return (
        <div className="flex flex-col justify-between overflow-hidden rounded-lg shadow-lg transition-shadow duration-200 hover:shadow-xl">
            <img
                className="h-48 w-full object-cover"
                src={image}
                alt="Fast Food"
            />
            <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{nome}</div>
                <p className="text-base text-gray-700">
                    Ingredientes: {ingredients}
                </p>
            </div>
            <div className="flex items-center px-6 py-4">
                <span className="font-bold">$ {price}</span>
                <button className="relative ml-auto rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                    <span className="rotate-15 absolute inset-0 opacity-0 transition-all duration-300 hover:opacity-100"></span>
                    Ver mais detalhes
                </button>
            </div>
        </div>
    );
};

export default FastFoodCard;
