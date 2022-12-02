import React from "react";

// import { Container } from './styles';

const Sidenav: React.FC = (props: any) => {
    return (
        <>
            <div className="absolute right-0 top-20 h-full w-60 bg-white px-1 text-black shadow-md">
                <div className="relative">
                    <div className="relative">
                        <div>
                            <div>
                                {props.index + 1} - {props.name} - R${" "}
                                {props.valor * props.quantidade}
                            </div>
                            <div>quantidade: {props.quantidade}</div>
                            <div>
                                <img src={props.imagem} alt="imagem" />
                            </div>
                        </div>
                        <button
                            onClick={() => props.handleQuantityDecrease}
                            className="rounded-full border px-2"
                        >
                            -
                        </button>
                        <button
                            onClick={() => props.handleQuantityIncrease}
                            className="rounded-full border px-2"
                        >
                            +
                        </button>
                        <button
                            className="rounded-md border px-4 py-2 duration-150 hover:bg-gray-400"
                            onClick={() => props.removeItem}
                        >
                            Excluir
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidenav;
