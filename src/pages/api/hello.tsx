// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const data = [
        {
            id: 1,
            quantidade: 1,
            valor: 21,
            imagem: "https://t3.ftcdn.net/jpg/00/84/28/54/360_F_84285488_CaWrmiQ9xWJXFpCPMHD1r2ZYAzcESfkU.jpg",
            nomeProduto: "hamburguer",
            description:
                "Pão com gergelim, alface picada, tomate, 2 hambúrguer, queijo, maionese e batata frita.",
        },
        {
            id: 2,
            quantidade: 1,
            valor: 45,
            imagem: "https://www.juliatto.com.br/wp-content/uploads/2022/09/lanches-para-a-tarde.jpg",
            nomeProduto: "Sanduíche",
            description:
                "Pão fatiado, presunto, queijo, tomate e alface picado",
        },
        {
            id: 3,
            quantidade: 1,
            valor: 45,
            imagem: "https://www.shutterstock.com/shutterstock/photos/1829205563/display_1500/stock-photo-fresh-homemade-italian-pizza-margherita-with-buffalo-mozzarella-and-basil-1829205563.jpg",
            nomeProduto: "pizza",
            description: "",
        },
        {
            id: 4,
            quantidade: 1,
            valor: 45,
            imagem: "https://www.shutterstock.com/shutterstock/photos/1829205563/display_1500/stock-photo-fresh-homemade-italian-pizza-margherita-with-buffalo-mozzarella-and-basil-1829205563.jpg",
            nomeProduto: "pizza",
            description: "",
        },
        {
            id: 5,
            quantidade: 1,
            valor: 45,
            imagem: "https://www.shutterstock.com/shutterstock/photos/1829205563/display_1500/stock-photo-fresh-homemade-italian-pizza-margherita-with-buffalo-mozzarella-and-basil-1829205563.jpg",
            nomeProduto: "pizza",
            description: "",
        },
    ];
    res.status(200).json(data);
}
