/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            mbm: "375px",
            mbl: "425px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "2560px",
        },
        extend: {
            colors: {
                primary: "#BADD2A",
            },
            fontFamily: {
                montserrat: "'Montserrat', sans-serif",
                montserratAlt: "'Montserrat Alternates', sans-serif",
            },
            animation: {
                pulse: "pulse 2s infinite",
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],
};
