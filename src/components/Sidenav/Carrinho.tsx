import React, { createContext } from "react";

type CountItems = {
    countItems: React.ReactNode;
};

const Carrinho: React.FC<CountItems> = ({ countItems }) => {
    return (
        <div className="relative w-full">
            <div>
                <img className="w-[90%]" src="/carrinho.svg" alt="carrinho" />
            </div>
            <div className="absolute top-0 right-0 rounded-full bg-red-500 px-4 py-1.5 text-xl font-bold text-white">
                {countItems}
            </div>
        </div>
    );
};

export default Carrinho;
