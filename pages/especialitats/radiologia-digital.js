import React from "react";
import Head from "next/head";
import NavigationBar from "../../components/navigation/NavigationBar";
import GlobalTexts from "../../utils/globals.json";
import HomeTexts from "../../utils/home.json";
import CommonTexts from "../../utils/commons.json";
import Footer from "../../components/Footer";
import CitaPrevia from "../../components/CitaPrevia";

const RadiologiaDigital = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Radiologia digital - Clínica Dental Graell</title>
        <meta
          name="description"
          content="A Clínica Dental Graell som experts en radiologia digital. Fes clic per a més informació sobre radiologia digital i les nostres especialitats."
        />
        <link
          rel="canonical"
          href="https://clinicadentalgraell.com/especialitats/radiologia-digital"
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
          content="Radiologia digital  - Clínica Dental Graell"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A Clínica Dental Graell som experts en radiologia digital. Fes clic per a més informació sobre radiologia digital i les nostres especialitats."
        />
        <meta property="og:image" content="../share.jpg" />
        <meta property="og:url" content="https://clinicadentalgraell.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@clinicadentalgraell" />
        <meta name="twitter:creator" content="@clinicadentalgraell" />
        <meta property="article:publisher" content="Clinica Dental Graell" />
        <meta
          name="twitter:title"
          content="Radiologia digital  - Clínica Dental Graell"
        />
        <meta
          name="twitter:description"
          content="A Clínica Dental Graell som experts en radiologia digital. Fes clic per a més informació sobre radiologia digital i les nostres especialitats."
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
                    srcSet="../especialitats/radiologia-digital-cover.webp"
                    type="image/webp"
                  />
                  <img
                    src="../especialitats/radiologia-digital-cover.jpg"
                    data-src="../especialitats/radiologia-digital-cover.jpg"
                    alt="Cirurgia Oral"
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
                      <span>Radiologia digital</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Radiologia digital
                  </h1>
                  <div className="pl-16 relative">
                    <span className="hidden lg:block absolute left-6 -top-20 bg-primary-100 h-full p-28 w-full bg-opacity-20 rounded-md"></span>
                    <span className="relative z-20">
                      Les radiografies intraorals i extraorals són les proves
                      complementàries més habituals en Odontologia. En els
                      últims temps la radiologia ha sofert una gran evolució amb
                      el canvi del sistema analògic pel digital.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden py-10 lg:py-20">
            <div className="container">
              <div className="flex flex-wrap w-full md:w-9/12 lg:w-6/12 mx-auto">
                <p>
                  Les radiografies intraorals i extraorals són les proves
                  complementàries més habituals en Odontologia. En els últims
                  temps la radiologia ha sofert una gran evolució amb el canvi
                  del sistema analògic pel digital.
                </p>
                <p>
                  A la nostra clínica tots els aparells són digitals, cosa que
                  ens permet irradiar molt menys als pacients. Disposem de
                  visografia (aparell digital per a les radiografies intraorals)
                  i a més a més, disposem d’un TAC per a poder realitzar imatges
                  en 3D, indispensable en els casos complicats de cirurgia i
                  implantologia. També podem realitzar ortopantomografies i
                  teleradiografies.
                </p>
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

export default RadiologiaDigital;
