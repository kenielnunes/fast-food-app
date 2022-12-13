import Document, {
    DocumentContext,
    DocumentInitialProps,
    Html,
    Head,
    Main,
    NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="pt">
                <Head>
                    <meta
                        charSet="utf-8"
                        name="description"
                        content="Soul Healthcare Bank. é uma startup , que transforma hospitais e clínicas em bancos, com a tecnologia fintech e healthtech, em outras palavras, a Soul de um lado ajuda aumentar a receita dos Hospitais e Clínicas, com crédito saúde, disponibilizado aos pacientes e paralelamente, traz economia, com o avanço sobre instrumentos de tecnologia aplicados na acessibilidade digital na área da saúde. Porém, seu destaque é ser uma plataforma white label, valorizando recall de marca de cada hospitais e clínicas.."
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
