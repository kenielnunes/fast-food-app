/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Home: React.FC = () => {
    const CardsProducts = (props) => {
        return (
            <>
                <div className="flex gap-4">
                    <div className="flex w-full flex-col rounded-lg bg-white shadow-lg duration-300">
                        <div className="h-[70%] w-full">
                            <img
                                className="h-full rounded-t-lg"
                                src={props.imagemProduto}
                                alt="post"
                            />
                        </div>
                        <div>
                            <div className="p-6">
                                <div className="flex gap-x-3">
                                    <div className="mb-2 text-sm font-medium text-gray-900">
                                        {props.nomeProduto}
                                    </div>
                                    <div className="mb-2 text-sm font-medium text-gray-900">
                                        <button
                                            onClick={() =>
                                                adicionaProdutoNoCarrinho(
                                                    props.nomeProduto,
                                                    props.valor
                                                )
                                            }
                                            className="rounded-md border bg-gray-200 px-4 py-2 font-semibold hover:bg-red-300"
                                        >
                                            Adicionar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);

    function adicionaProdutoNoCarrinho(name, valor) {
        const produto = {
            id: "1",
            name: name,
            valor: valor,
        };

        setProduct((prevState) => [...prevState, produto]);
    }

    function removeItem(index) {
        const item = product.slice();
        item.splice(index, 1);
        setProduct(item);
    }

    console.log(product);

    return (
        <>
            <div className="flex w-full items-center justify-center gap-4 p-10">
                <CardsProducts
                    valor={25}
                    imagemProduto="https://media.istockphoto.com/id/1206323282/pt/foto/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=-ItPFjqHgdjhtpgLrOdLCDjLKr0_BR2xItZUVfJ0lUc="
                    nomeProduto="x-burger"
                />
                <CardsProducts
                    valor={45}
                    imagemProduto="https://media.istockphoto.com/id/938742222/pt/foto/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=IMbsKsB8sD78lAiCFax9rJAfl9nMvvRurZkrmNIZMQA="
                    nomeProduto="pizza"
                />
                <CardsProducts
                    valor={38}
                    imagemProduto="https://media.istockphoto.com/id/516816688/pt/foto/caseiras-lenta-cozinheiro-ca%C3%A7arola-com-carne-assada.jpg?s=612x612&w=0&k=20&c=KFibjx4t-LoU3A2oJCR_A4EoC6J1xSTY68If3yZkiVY="
                    nomeProduto="carne"
                />

                <div className="flex h-[300px] w-1/3 items-start bg-gray-600 p-4 font-semibold text-white">
                    <div className="flex max-h-[90%] w-full flex-col overflow-auto">
                        Carrinho
                        {product.map((product, index) => {
                            return (
                                <>
                                    <div
                                        className="flex items-center  gap-4 p-4"
                                        key={product.id}
                                    >
                                        <div>
                                            <div>
                                                {index + 1} - {product.name} -
                                                R$ {product.valor * quantity}
                                            </div>
                                            <div>quantidade: {quantity}</div>
                                        </div>
                                        <button
                                            onClick={() =>
                                                setQuantity(quantity + 1)
                                            }
                                            className="rounded-full border px-2"
                                        >
                                            +
                                        </button>
                                        <button
                                            className="rounded-md border px-4 py-2 duration-150 hover:bg-gray-400"
                                            onClick={() => removeItem(index)}
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
