import React from "react";
import Carrinho from "./Carrinho";
import Drink from "./Drink";
import Hamburguer from "./Hamburguer";
import Pizza from "./Pizza";

const Sidenav: React.FC = ({ value }: any) => {
    return (
        <>
            <div className="flex h-screen w-60 flex-col items-center justify-center bg-white px-1 shadow-md">
                <ul>
                    <li>
                        <a
                            className="flex rounded py-4 px-6 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
                            href="hamburguer"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="dark"
                        >
                            <Hamburguer />
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 px-6 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
                            href="pizza"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="dark"
                        >
                            <Pizza />
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 px-6 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
                            href="drink"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="dark"
                        >
                            <Drink />
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 px-6 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
                            href="drink"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="dark"
                        >
                            <Carrinho countItems={value} />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidenav;
