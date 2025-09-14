import Head from "next/head";
import NavigationBar from "../components/navigation/NavigationBar";
import GlobalTexts from "../utils/globals.json";
import HomeTexts from "../utils/home.json";
import CommonTexts from "../utils/commons.json";
import ContacteTexts from "../utils/contacte.json";
import Footer from "../components/Footer";
import LegalTexts from "../utils/legal.json";

const PoliticaCookies = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Política de Reserves - Clínica Dental Graell</title>
        <meta
          name="description"
          content="Política de Reserves de la Clínica Dental Graell"
        />
        <link
          rel="canonical"
          href="https://clinicadentalgraell.com/politica-de-reserves"
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="Clinica Dental Graell" />
        <link rel="icon" href="../favicon.svg" />
        <link rel="mask-icon" href="../favicon.svg" color="#ffffff" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png"></link>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          property="og:title"
          content="Política de Reserves  - Clínica Dental Graell"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Política de Reserves de la Clínica Dental Graell"
        />
        <meta property="og:image" content="../share.jpg" />
        <meta property="og:url" content="https://clinicadentalgraell.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@clinicadentalgraell" />
        <meta name="twitter:creator" content="@clinicadentalgraell" />
        <meta property="article:publisher" content="Clinica Dental Graell" />
        <meta
          name="twitter:title"
          content="Política de Reserves  - Clínica Dental Graell"
        />
        <meta
          name="twitter:description"
          content="Política de Reserves de la Clínica Dental Graell"
        />
        <meta name="twitter:image" content="../share.jpg" />
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main className="legal">
        <section className="relative overflow-hidden pt-16 lg:pt-36">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2">
              <div className="px-6 w-full md:w-2/3 mt-10 lg:mt-4 mb-8">
                <ul className="breadcrumb list-none flex items-center">
                  <li>
                    <span>Inici</span>
                  </li>
                  <li>
                    <span>Política de Reserves</span>
                  </li>
                </ul>
                <h1 className="text-4xl mt-4 mb-7 leading-snug relative z-20">
                  Política de Reserves
                </h1>
                <div className="pl-16 relative">
                  <span className="absolute left-6 -top-28 bg-primary-100 h-full p-24 w-full bg-opacity-20"></span>
                  <span className="relative z-20">
                    Darrera actualització: 14 de setembre, 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 md:pt-14 md:pb-20 relative">
          <div className="container relative z-10">
            <div className="w-full md:w-1/2 mt-4 mb-8 mx-auto">
              <p>
                <strong>Avís important:</strong>
              </p>
              <p>
                Les visites que no s&apos;avisin amb{" "}
                <strong>24 hores d&apos;antelació</strong>&nbsp;per ser
                canviades, <strong>es cobraran</strong> abans de programar la
                nova visita.
              </p>
              <p>
                Les visites fallades (no presentades) també{" "}
                <strong>es cobraran</strong> abans de programar la nova visita.
              </p>
              <p>Gràcies per la vostra comprensió.</p>
              <hr className="my-8" />
              <p>
                <strong>Aviso importante:</strong>
              </p>
              <p>
                Las visitas que no se avisen con{" "}
                <strong>24 horas de antelación</strong>&nbsp;para ser cambiadas,{" "}
                <strong>se cobrarán</strong> antes de programar la nueva visita.
              </p>
              <p>
                Las visitas falladas (no presentadas) también{" "}
                <strong>se cobrarán</strong> antes de programar la nueva visita.
              </p>
              <p>Gracias por su comprensión.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default PoliticaCookies;
