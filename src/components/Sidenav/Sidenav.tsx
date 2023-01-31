import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
    { name: "Início", href: "/home", current: true },
    { name: "Sobre", href: "/sobre", current: false },
    { name: "Github", href: "https://github.com/KenielDev", current: false },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/keniel-nunes/",
        current: false,
    },
];
type CountItems = {
    valorAcumuladoCarrinho: number;
    totalItems: number;
    dataProducts: any;
    children: React.ReactNode;
};

type Products = {
    id: number;
    name: string;
    valor: number;
    quantidade: number;
    imagem: string;
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar({
    valorAcumuladoCarrinho,
    totalItems,
    dataProducts,
    children,
}: CountItems) {
    const [showSidebar, setShowSidebar] = useState(false);
    const handleQuantityIncrease = (index) => {
        const newItems = [...dataProducts];
        newItems[index].quantidade++;
        dataProducts.push(newItems);
    };

    console.log(dataProducts);

    function removeItem(index) {
        const item = dataProducts.slice();
        item.splice(index, 1);
        dataProducts.push(item);
    }

    const handleQuantityDecrease = (index) => {
        const products = [...dataProducts];
        products[index].quantidade--;

        if (products[index].quantidade == 0) {
            products[index].quantidade = 1;
        } else {
            dataProducts.push(products);
        }
    };

    const Carrinho = () => {
        return (
            <div className="flex gap-6">
                <div className="mt-2">
                    <img width="30px" src="/carrinho.svg" alt="carrinho" />
                </div>
                <div className="text-left font-semibold text-white">
                    <div>R$ {valorAcumuladoCarrinho}</div>
                    <div>
                        {totalItems} {totalItems <= 1 ? "item" : "itens"}{" "}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "rounded-md px-3 py-2 text-sm font-medium"
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <BellIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    {showSidebar ? (
                                        <button
                                            className="fixed right-10 top-6 z-50 flex cursor-pointer items-center text-4xl text-white"
                                            onClick={() =>
                                                setShowSidebar(!showSidebar)
                                            }
                                        >
                                            x
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                setShowSidebar(!showSidebar)
                                            }
                                        >
                                            <Carrinho />
                                        </button>
                                    )}
                                    <div
                                        className={`fixed top-0 right-0 z-40  h-full w-[25vw] bg-blue-600 p-10 pl-20 text-white  duration-300 ease-in-out ${
                                            showSidebar
                                                ? "translate-x-0 "
                                                : "translate-x-full"
                                        }`}
                                    >
                                        <h3 className="mt-20 text-3xl font-semibold text-white">
                                            <div>{children}</div>
                                        </h3>
                                    </div>
                                    {/* <div>
                                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <Carrinho />
                                        </Menu.Button>
                                    </div> */}
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-[400px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"></Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
