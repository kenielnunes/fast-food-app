/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Home: React.FC = () => {
    const CardsProducts = (props) => {
        return (
            <>
                <div className="flex h-[300px] gap-4">
                    <div className="flex h-full w-full flex-col rounded-lg bg-white shadow-lg duration-300">
                        <div className="h-[70%] w-full">
                            <img
                                className="h-full rounded-t-lg"
                                src={props.imagem}
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
                                                    props.valor,
                                                    props.quantidade,
                                                    props.imagem
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

    const handleQuantityIncrease = (index) => {
        const newItems = [...product];
        newItems[index].quantidade++;
        setProduct(newItems);
    };

    const handleQuantityDecrease = (index) => {
        const products = [...product];
        products[index].quantidade--;

        if (products[index].quantidade == 0) {
            products[index].quantidade = 1;
        } else {
            setProduct(products);
        }
    };

    function adicionaProdutoNoCarrinho(
        name: string,
        valor: number,
        quantidade: number,
        imagem: string
    ) {
        const produto = {
            id: "1",
            name: name,
            valor: valor,
            quantidade: quantidade,
            imagem: imagem,
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
            <div className="flex w-full  justify-center gap-4 pl-10">
                <CardsProducts
                    quantidade={1}
                    valor={25}
                    imagem="https://media.istockphoto.com/id/1206323282/pt/foto/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=-ItPFjqHgdjhtpgLrOdLCDjLKr0_BR2xItZUVfJ0lUc="
                    nomeProduto="x-burger"
                />
                <CardsProducts
                    quantidade={1}
                    valor={45}
                    imagem="https://media.istockphoto.com/id/938742222/pt/foto/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=IMbsKsB8sD78lAiCFax9rJAfl9nMvvRurZkrmNIZMQA="
                    nomeProduto="pizza"
                />
                <CardsProducts
                    quantidade={1}
                    valor={38}
                    imagem="https://media.istockphoto.com/id/516816688/pt/foto/caseiras-lenta-cozinheiro-ca%C3%A7arola-com-carne-assada.jpg?s=612x612&w=0&k=20&c=KFibjx4t-LoU3A2oJCR_A4EoC6J1xSTY68If3yZkiVY="
                    nomeProduto="carne"
                />

                <div className="ml-auto flex h-screen w-1/3 items-start justify-end overflow-auto bg-gray-600 p-4 font-semibold text-white">
                    <div className="flex  w-full flex-col overflow-auto">
                        Carrinho
                        {product.map((product, index) => {
                            return (
                                <>
                                    <div
                                        className="flex items-center  gap-4 p-4"
                                        key={product.id}
                                    >
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="flex items-center">
                                                <div className="w-48">
                                                    <img
                                                        src={product.imagem}
                                                        alt="imagem"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-4 p-2">
                                                    <div>
                                                        <div>
                                                            {product.name}
                                                        </div>
                                                        <div>
                                                            Valor: R${" "}
                                                            {product.valor *
                                                                product.quantidade}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                onClick={() => {
                                                    handleQuantityDecrease(
                                                        index
                                                    );
                                                }}
                                                className="rounded-full border px-2"
                                            >
                                                -
                                            </button>
                                        </div>

                                        <div>{product.quantidade}</div>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    handleQuantityIncrease(
                                                        index
                                                    );
                                                }}
                                                className="rounded-full border px-2"
                                            >
                                                +
                                            </button>
                                        </div>

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
