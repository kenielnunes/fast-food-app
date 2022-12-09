/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Toast from "../toast";

const Home: React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/hello")
            .then((response) => response.json())
            .then((result) => setData(result));
    }, []);

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
                                            type="button"
                                            onClick={() => {
                                                Swal.fire({
                                                    position: "center",
                                                    icon: "success",
                                                    title: "Adicionado ao carrinho!",
                                                    showConfirmButton: false,
                                                    timer: 1500,
                                                });
                                                adicionaProdutoNoCarrinho(
                                                    props.nomeProduto,
                                                    props.valor,
                                                    props.quantidade,
                                                    props.imagem
                                                );
                                            }}
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

    console.log(data);
    const [product, setProduct] = useState([]);
    const notify = () => {
        toast("xesq");
    };

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
                {data.map((data) => {
                    console.log(data.id);
                    return (
                        <>
                            <CardsProducts
                                key={data.id}
                                quantidade={data.quantidade}
                                valor={data.valor}
                                imagem={data.imagem}
                                nomeProduto={data.nomeProduto}
                            />
                        </>
                    );
                })}

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
