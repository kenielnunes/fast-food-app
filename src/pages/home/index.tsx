/* eslint-disable @next/next/no-img-element */
import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import ModalInfoLanche from "../../components/ModalInfoLanche";
import SidebarCarrinho from "../../components/SidebarCarrinho";
import Sidenav from "../../components/Sidenav/Sidenav";
import Toast from "../toast";

const Home: React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/hello")
            .then((response) => response.json())
            .then((result) => setData(result));
    }, []);

    const CardsProducts = ({
        imagem,
        nomeProduto,
        valor,
        quantidade,
        description,
        comentario,
    }) => {
        return (
            <>
                <div className="flex h-full gap-4">
                    <div className="flex max-h-full w-full flex-col rounded-lg bg-white shadow-lg duration-300">
                        <div className="h-[60%] w-full">
                            <img
                                className="h-full w-full rounded-t-lg"
                                src={imagem}
                                alt="post"
                            />
                        </div>
                        <div className="h-[40%]">
                            <div className="h-full p-6">
                                <div className="flex h-full flex-col gap-x-3">
                                    <div className="h-full">
                                        <div className="mb-2 text-sm font-medium text-gray-900">
                                            {nomeProduto}
                                        </div>
                                        <div className="text-sm">
                                            {description}
                                        </div>
                                    </div>

                                    <div className="flex h-full w-full items-center justify-between  text-sm font-medium text-gray-900">
                                        <div>R$ {valor}</div>
                                        <div className=" flex h-full items-end justify-end space-x-2">
                                            <ModalInfoLanche
                                                id={nomeProduto}
                                                name={nomeProduto}
                                                description={description}
                                                value={valor}
                                                location={
                                                    "Rua joão Bento n° 28, Santa Luzia"
                                                }
                                                deliveryTime={"15 min"}
                                                // comment={comentario}
                                                image={imagem}
                                                adicionaItemNoCarrinho={() => {
                                                    adicionaProdutoNoCarrinho(
                                                        nomeProduto,
                                                        valor,
                                                        quantidade,
                                                        imagem,
                                                        description,
                                                        comentario
                                                    );
                                                    setTimeout(() => {
                                                        const Toast =
                                                            Swal.mixin({
                                                                toast: true,
                                                                position:
                                                                    "top-end",
                                                                showConfirmButton:
                                                                    false,
                                                                timer: 1500,
                                                                timerProgressBar:
                                                                    true,
                                                                didOpen: (
                                                                    toast
                                                                ) => {
                                                                    toast.addEventListener(
                                                                        "mouseleave",
                                                                        Swal.resumeTimer
                                                                    );
                                                                },
                                                            });
                                                        Toast.fire({
                                                            icon: "success",
                                                            title: "Produto adicionado ao carrinho!",
                                                        });
                                                    }, 200);
                                                }}
                                                comment={""}
                                            />
                                            {/* <button
                                                onClick={() => {
                                                    // setTimeout(() => {
                                                    //     const Toast =
                                                    //         Swal.mixin({
                                                    //             toast: true,
                                                    //             position:
                                                    //                 "top-end",
                                                    //             showConfirmButton:
                                                    //                 false,
                                                    //             timer: 1500,
                                                    //             timerProgressBar:
                                                    //                 true,
                                                    //             didOpen: (
                                                    //                 toast
                                                    //             ) => {
                                                    //                 toast.addEventListener(
                                                    //                     "mouseleave",
                                                    //                     Swal.resumeTimer
                                                    //                 );
                                                    //             },
                                                    //         });
                                                    //     Toast.fire({
                                                    //         icon: "success",
                                                    //         title: "Produto adicionado ao carrinho!",
                                                    //     });
                                                    // }, 200);
                                                    // adicionaProdutoNoCarrinho(
                                                    //     nomeProduto,
                                                    //     valor,
                                                    //     quantidade,
                                                    //     imagem
                                                    // );
                                                }}
                                                type="button"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                                className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-medium  leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg "
                                            >
                                                Adicionar
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const Carrinho = () => {
        return (
            <div className="flex w-full justify-center">
                <div className="grid h-[300px] w-2/3 grid-cols-3 gap-6 px-6 py-6">
                    {data.map((data) => {
                        return (
                            <>
                                <CardsProducts
                                    key={data.id}
                                    quantidade={data.quantidade}
                                    valor={data.valor}
                                    imagem={data.imagem}
                                    nomeProduto={data.nomeProduto}
                                    description={data.description}
                                    comentario={data.comentario}
                                />
                            </>
                        );
                    })}
                </div>

                {/* <div className="ml-auto flex h-screen w-1/3 items-start justify-end overflow-auto bg-gray-600 p-4 font-semibold text-white">
                    <div className="flex  w-full flex-col overflow-auto">
                        <div>Carrinho</div>
                        {product.length == 0
                            ? "vazio"
                            : product.map((product, index) => {
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
                                                              src={
                                                                  product.imagem
                                                              }
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
                                                  onClick={() =>
                                                      removeItem(index)
                                                  }
                                              >
                                                  Excluir
                                              </button>
                                          </div>
                                      </>
                                  );
                              })}
                    </div>
                </div> */}
            </div>
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
        imagem: string,
        descricao: string,
        comentario: string
    ) {
        const produto = {
            id: "1",
            name: name,
            valor: valor,
            quantidade: quantidade,
            imagem: imagem,
            descricao: descricao,
            comentario: comentario,
        };

        setProduct((prevState) => [...prevState, produto]);
    }

    function removeItem(index) {
        const item = product.slice();
        item.splice(index, 1);
        setProduct(item);
    }
    let somaValores = product.reduce(function (accumulator, object) {
        return accumulator + object.valor;
    }, 0);

    return (
        <div className="flex flex-col">
            {/* <SidebarCarrinho /> */}
            <Sidenav
                dataProducts={product}
                valorAcumuladoCarrinho={somaValores}
                totalItems={product.length}
            />
            <Carrinho />
        </div>
    );
};

export default Home;
