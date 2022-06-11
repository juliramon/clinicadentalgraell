import React from "react";
import Head from "next/head";
import NavigationBar from "../../components/navigation/NavigationBar";
import GlobalTexts from "../../utils/globals.json";
import HomeTexts from "../../utils/home.json";
import CommonTexts from "../../utils/commons.json";
import Footer from "../../components/Footer";
import CitaPrevia from "../../components/CitaPrevia";

const Odontopediatria = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Odontopediatria - Clínica Dental Graell</title>
        <meta
          name="description"
          content="A Clínica Dental Graell som experts en odontopediatria. Fes clic per a més informació sobre l'odontopediatria i les nostres especialitats."
        />
        <link
          rel="canonical"
          href="https://clinicadentalgraell.com/especialitats/odontopediatria"
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
          content="Odontopediatria  - Clínica Dental Graell"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A Clínica Dental Graell som experts en odontopediatria. Fes clic per a més informació sobre l'odontopediatria i les nostres especialitats."
        />
        <meta property="og:image" content="../share.jpg" />
        <meta property="og:url" content="https://clinicadentalgraell.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@clinicadentalgraell" />
        <meta name="twitter:creator" content="@clinicadentalgraell" />
        <meta property="article:publisher" content="Clinica Dental Graell" />
        <meta
          name="twitter:title"
          content="Odontopediatria  - Clínica Dental Graell"
        />
        <meta
          name="twitter:description"
          content="A Clínica Dental Graell som experts en odontopediatria. Fes clic per a més informació sobre l'odontopediatria i les nostres especialitats."
        />
        <meta name="twitter:image" content="../share.jpg" />
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <article>
          <section className="relative overflow-hidden pt-24 lg:pt-28">
            <div className="flex flex-wrap items-center justify-between bg-primary-100 bg-opacity-20">
              <div className="w-full md:w-5/12 h-60 lg:h-96 relative z-20">
                <picture>
                  <source
                    srcSet="../especialitats/odontopediatria-cover.jpg"
                    type="image/webp"
                  />
                  <source srcSet="../especialitats/odontopediatria-cover.jpg" />
                  <img
                    src="../especialitats/odontopediatria-cover.jpg"
                    data-src="../especialitats/odontopediatria-cover.jpg"
                    alt="Odontopediatria"
                    width="400"
                    height="300"
                    className="object-cover object-center w-full h-full"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="w-full md:w-1/2">
                <div className="px-6 w-full md:w-2/3 mt-10 lg:mt-4 mb-8">
                  <ul className="breadcrumb list-none flex items-center">
                    <li>
                      <span>Inici</span>
                    </li>
                    <li>
                      <span>Especialitats</span>
                    </li>
                    <li>
                      <span>Odontopediatria</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Odontopediatria
                  </h1>
                  <div className="relative">
                    <span className="hidden lg:block absolute left-6 -top-20 bg-primary-100 h-full p-28 w-full bg-opacity-20 rounded-md"></span>
                    <span className="relative z-20">
                      L&apos;odontopediatria és la branca de l&apos;odontologia
                      encarregada de tractar les dents dels nens, des del
                      naixement fins als 6 anys cuidant les seves dents
                      temporals, i fins als 12 anys quan finalitza la dentició
                      mixta i s&apos;inicia la definitiva.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden py-10 lg:py-20">
            <div className="container">
              <div className="flex flex-wrap w-full md:w-9/12 lg:w-6/12 mx-auto">
                <h2 className="text-2xl mb-5">
                  Què és l&apos;odontopediatria?
                </h2>
                <p>
                  Els odontopediatres s&apos;encarreguen de detectar precoçment
                  les anomalies de la posició dels maxil·lars per a remetre el
                  pacient a l&apos;ortodoncista i cirurgià maxil·lofacial i
                  així, poder modificar o frenar el creixement d&apos;aquests
                  ossos. Així mateix, detecta els mals hàbits per tal de
                  reeducar, realitzar un tractament restaurador en cas de càries
                  dental o segellador per prevenir la futura patologia. Informa
                  també sobre procediments d&apos;higiene oral per aconseguir un
                  creixement sa de la cavitat bucal.
                </p>
                <div className="w-full mt-4">
                  <picture>
                    <img
                      src="../especialitats/odontopediatria-1.jpg"
                      data-src="../especialitats/odontopediatria-1.jpg"
                      alt="Odontopediatria"
                      width="400"
                      height="300"
                      className="object-cover object-center w-full h-full"
                      loading="lazy"
                    />
                    <figcaption className="text-xs mt-4">
                      ls odontopediatres s&apos;encarreguen de detectar
                      precoçment les anomalies de la posició dels maxil·lars per
                      a remetre el pacient a l&apos;ortodoncista i cirurgià
                      maxil·lofacial i així, poder modificar o frenar el
                      creixement d&apos;aquests ossos.
                    </figcaption>
                  </picture>
                </div>
              </div>
            </div>
          </section>
        </article>

        <CitaPrevia />
      </main>
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default Odontopediatria;
