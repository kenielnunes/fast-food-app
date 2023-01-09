import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";

// import { Container } from './styles';

type InfoLanche = {
    id: string;
    name: string;
    description: string;
    value: number;
    location: string;
    deliveryTime: string;
    comment: string;
    image: string;
    adicionaItemNoCarrinho: any;
};

const plans = [
    {
        name: "Startup",
        ram: "12GB",
        cpus: "6 CPUs",
        disk: "160 GB SSD disk",
    },
    {
        name: "Business",
        ram: "16GB",
        cpus: "8 CPUs",
        disk: "512 GB SSD disk",
    },
    {
        name: "Enterprise",
        ram: "32GB",
        cpus: "12 CPUs",
        disk: "1024 GB SSD disk",
    },
];

const ModalInfoLanche: React.FC<InfoLanche> = ({
    id,
    name,
    image,
    description,
    value,
    location,
    deliveryTime,
    // comment,
    adicionaItemNoCarrinho,
}) => {
    const [commentText, setCommentText] = useState("");
    console.log("🚀 ~ file: ModalInfoLanche.tsx:27 ~ commentText", commentText);

    return (
        <>
            <div className="">
                <button
                    type="button"
                    className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                    data-bs-toggle="modal"
                    data-bs-target={`#${id}`}
                >
                    Ver mais
                </button>
            </div>

            <div
                className="modal fade fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id={`${id}`}
                tabIndex={-1}
                aria-labelledby="exampleModalCenterTitle"
                aria-modal="true"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered modal-xl pointer-events-none relative w-auto">
                    <div className="modal-content pointer-events-auto relative flex h-full w-full  rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                        <div className="max-h-full w-1/2">
                            <img
                                className="h-full w-full"
                                src={image}
                                alt="imagem do lanche"
                            />
                        </div>
                        <div className="flex w-1/2 flex-col">
                            <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
                                <div
                                    className="text-xl font-medium leading-normal text-gray-800"
                                    id="exampleModalScrollableLabel"
                                >
                                    {name}
                                </div>
                                <button
                                    type="button"
                                    className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body relative flex flex-col gap-4 p-4">
                                <div> {description}</div>
                                <div>R$ {value}</div>
                                <div>
                                    <div>Deseja adicionar algo a mais?</div>

                                    <div>
                                        {/* <textarea
                                            onChange={(e) =>
                                                setCommentText(e.target.value)
                                            }
                                            name=""
                                            id={name}
                                            cols={50}
                                            rows={10}
                                        >
                                            {comment}
                                        </textarea> */}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
                                <button
                                    onClick={adicionaItemNoCarrinho}
                                    type="button"
                                    data-bs-dismiss="modal"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-medium  leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg "
                                >
                                    Adicionar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalInfoLanche;
