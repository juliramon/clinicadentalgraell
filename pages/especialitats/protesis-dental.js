import React from "react";
import Head from "next/head";
import NavigationBar from "../../components/navigation/NavigationBar";
import GlobalTexts from "../../utils/globals.json";
import HomeTexts from "../../utils/home.json";
import CommonTexts from "../../utils/commons.json";
import Footer from "../../components/Footer";
import CitaPrevia from "../../components/CitaPrevia";

const ProtesisDental = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pròtesis dentals - Clínica Dental Graell</title>
        <meta
          name="description"
          content="A Clínica Dental Graell som experts en pròtesis dentals. Fes clic per a més informació sobre pròtesis dentals i les nostres especialitats."
        />
        <link
          rel="canonical"
          href="https://clinicadentalgraell.com/especialitats/protesis-dental"
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
          content="Pròtesis dentals  - Clínica Dental Graell"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A Clínica Dental Graell som experts en pròtesis dentals. Fes clic per a més informació sobre pròtesis dentals i les nostres especialitats."
        />
        <meta property="og:image" content="../share.jpg" />
        <meta property="og:url" content="https://clinicadentalgraell.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@clinicadentalgraell" />
        <meta name="twitter:creator" content="@clinicadentalgraell" />
        <meta property="article:publisher" content="Clinica Dental Graell" />
        <meta
          name="twitter:title"
          content="Pròtesis dentals  - Clínica Dental Graell"
        />
        <meta
          name="twitter:description"
          content="A Clínica Dental Graell som experts en pròtesis dentals. Fes clic per a més informació sobre pròtesis dentals i les nostres especialitats."
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
                  <source srcSet="../especialitats/protesis-dentals-1.jpg" />
                  <img
                    src="../especialitats/protesis-dentals-1.jpg"
                    data-src="../especialitats/protesis-dentals-1.jpg"
                    alt="Pròtesis dentals"
                    width="400"
                    height="300"
                    className="object-cover object-center w-full h-full"
                    loading="eager"
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
                      <span>Periodòncia dental</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Pròtesis dental
                  </h1>
                  <div className="pl-16 relative">
                    <span className="hidden lg:block absolute left-6 -top-20 bg-primary-100 h-full p-28 w-full bg-opacity-20 rounded-md"></span>
                    <span className="relative z-20">
                      La prostodòncia és la branca de l’odontologia que
                      s’encarrega de la restauració i manteniment de la funció
                      masticatòria, l’estètica i la salut del pacient mitjançant
                      la restauració de les dents naturals i/o la substitució de
                      les peces dentàries.
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
                  En la societat moderna, el deteriorament de la salut
                  bucodental i la pèrdua de dents sovint es deuen a les càries i
                  a la malaltia periodontal. Altres causes inclouen el càncer
                  bucal, traumatismes i trastorns del moviment de l’aparell
                  masticatori com el bruxisme. Com a resultat, el pacient pot
                  patir problemes estètics, alteració de la funció masticatòria,
                  malestar psicològic i deteriorament de la qualitat de vida.
                </p>
                <div className="lg:-ml-24 pt-10 pb-8">
                  <blockquote>
                    El prostodoncista elabora plans de tractament en estreta
                    col·laboració amb altres odontòlegs especialistes, per tal
                    d’oferir als pacient la millor atenció possible.
                  </blockquote>
                </div>
                <div className="w-full mt-4">
                  <picture>
                    <img
                      src="../especialitats/protesis-dentals-2.jpg"
                      data-src="../especialitats/protesis-dentals-2.jpg"
                      alt="Pròtesis dentals a la Seu d'Urgell"
                      width="400"
                      height="300"
                      className="object-cover object-center w-full h-full"
                      loading="lazy"
                    />
                    <figcaption className="text-xs mt-4">
                      El prostodoncista elabora plans de tractament en estreta col·laboració amb altres odontòlegs especialistes, per tal d’oferir als pacient la millor atenció possible.
                    </figcaption>
                  </picture>
                </div>
                <p className="mt-20">
                  Bona part de la feina quotidiana d’un prostodoncista té a
                  veure amb l’estètica dental. Tant si es tracta d’una única
                  restauració o una rehabilitació més extensa. Tot procediment
                  utilitzat amb un pacient no només ha de ser funcional i
                  còmode, sinó que a més ha de reproduir fidelment la forma i
                  l’estètica de les dents naturals amb l’objectiu de mantenir un
                  aspecte saludable i atractiu. El prostodoncista és expert en
                  tècniques de blanquejament i adhesió, reproducció de colors,
                  ús de carilles dentals per remodelar i millorar l’estètica de
                  les dents, i fabricació i col·locació de pròtesis fixes, per
                  exemple corones dentals i ponts.
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

export default ProtesisDental;
