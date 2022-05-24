import React from "react";
import Head from "next/head";
import NavigationBar from "../../components/navigation/NavigationBar";
import GlobalTexts from "../../utils/globals.json";
import HomeTexts from "../../utils/home.json";
import CommonTexts from "../../utils/commons.json";
import Footer from "../../components/Footer";
import CitaPrevia from "../../components/CitaPrevia";

const ImplantsDentals = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Implants Dentals - Clínica Dental Graell</title>
        <meta
          name="description"
          content="A Clínica Dental Graell som experts en implants dentals. Fes clic per a més informació sobre els implants dentals i les nostres especialitats."
        />
        <link
          rel="canonical"
          href="https://clinicadentalgraell.com/especialitats/implants-dentals"
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
          content="Implants Dentals  - Clínica Dental Graell"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A Clínica Dental Graell som experts en implants dentals. Fes clic per a més informació sobre els implants dentals i les nostres especialitats."
        />
        <meta property="og:image" content="../share.jpg" />
        <meta property="og:url" content="https://clinicadentalgraell.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@clinicadentalgraell" />
        <meta name="twitter:creator" content="@clinicadentalgraell" />
        <meta property="article:publisher" content="Clinica Dental Graell" />
        <meta
          name="twitter:title"
          content="Implants Dentals  - Clínica Dental Graell"
        />
        <meta
          name="twitter:description"
          content="A Clínica Dental Graell som experts en implants dentals. Fes clic per a més informació sobre els implants dentals i les nostres especialitats."
        />
        <meta name="twitter:image" content="../share.jpg" />
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <article>
          <section className="relative overflow-hidden pt-24 lg:pt-288">
            <div className="flex flex-wrap items-center justify-between bg-primary-100 bg-opacity-20">
              <div className="w-full md:w-5/12 h-60 lg:h-96 relative z-20">
                <picture>
                  <source srcSet="../especialitats/implants-4.jpg" />
                  <img
                    src="../especialitats/implants-4.jpg"
                    data-src="../especialitats/implants-4.jpg"
                    alt="Implants dentals"
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
                      <span>Implants dentals</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Implants dentals
                  </h1>
                  <div className="pl-16 relative">
                    <span className="hidden lg:block absolute left-6 -top-20 bg-primary-100 h-full p-28 w-full bg-opacity-20 rounded-md"></span>
                    <span className="relative z-20">
                      Els implants dentals són la millor solució per a la
                      substitució permanent de les dents. Aquesta tècnica està
                      basada en una àmplia investigació científica, des de fa 40
                      anys, i això ha fet possible aconseguir resultats fiables
                      que proporcionen una gran millora estètica i funcionalitat
                      al pacient.
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
                  L&apos;estètica dental és la disciplina de l&apos;Odontologia
                  que s&apos;encarrega de tractar totes aquelles alteracions,
                  dismòrfies i patologies de la morfologia bucodental per
                  aconseguir un cànon de bellesa que s&apos;ajusti a
                  l&apos;ideal social d&apos;avui en dia.
                </p>
                <p>
                  Generalment, aquelles persones que hagin perdut algun o totes
                  les seves dents són candidats per posar-se implants, però és
                  important que el pacient estigui sa ja que hi ha una sèrie de
                  condicionants i malalties que poden afectar a l&apos;implant.
                  Per exemple, la fusió de l&apos;implant amb l&apos;os podria
                  veure afectada en pacients amb diabetis no controlada,
                  fumadors, alcohòlics o amb malaltia periodontal no controlada.
                </p>
                <div className="w-full mt-4 mb-16">
                  <picture>
                    <img
                      src="../especialitats/implants-2.jpg"
                      data-src="../especialitats/implants-2.jpg"
                      alt="Odontologia conservadora"
                      width="400"
                      height="300"
                      className="object-cover object-center w-full h-full"
                      loading="lazy"
                    />
                    <figcaption className="text-xs mt-4">
                      La col·locació d&apos;implants en l&apos;os evita la
                      reducció òssia que es produeix després de la pèrdua de les
                      dents. Es considera com un tractament definitiu
                    </figcaption>
                  </picture>
                </div>
                <div className="lg:-ml-24 pt-10 pb-8">
                  <blockquote>
                    Els implants dentals són un cargol de titani que és acceptat
                    per l&apos;organisme com una cosa pròpia, adaptant-se a la
                    base òssia de forma natural.
                  </blockquote>
                </div>
                <p>
                  D&apos;aquesta manera, l&apos;os creix ràpidament al voltant
                  d&apos;ell, produint-se una unió, estable i més duradora que
                  en un altre tipus de tractament, entre l&apos;implant i
                  l&apos;os.
                  <br />
                  Per aconseguir la reposició d&apos;una dent mitjançant
                  implants dentals, cal col·locar el cargol de titani a
                  l&apos;os. Finalment es col·loca la corona que pot ser de
                  ceràmica o resina segons les situacions.
                </p>
                <p>
                  D&apos;aquesta manera es construeix un nova dent que romandrà
                  de manera permanent a la dentadura del pacient donat la seva
                  adhesió amb el teixit ossi.
                  <br />
                  Compten amb diferents beneficis tant funcionals com estètics.
                  Per a molts pacients, el tractament amb implants dentals
                  suposa una millora notable tant en la seva salut bucodental,
                  com en la seva qualitat de vida i autoestima.
                </p>
                <div className="w-full mt-4 mb-16">
                  <picture>
                    <img
                      src="../especialitats/implants-5.jpg"
                      data-src="../especialitats/implants-5.jpg"
                      alt="Odontologia conservadora"
                      width="400"
                      height="300"
                      className="object-cover object-center w-full h-full"
                      loading="lazy"
                    />
                    <figcaption className="text-xs mt-4">
                      Els implants dentals tenen molts avantatges en comparació
                      amb les solucions tradicionals de corones, ponts i
                      pròtesis removibles
                    </figcaption>
                  </picture>
                </div>
                <p>
                  Els implants dentals tenen molts avantatges en comparació amb
                  les solucions tradicionals de corones, ponts i pròtesis
                  removibles.
                  <br />
                  Els implants dentals semblen, se senten i funcionen com si
                  fossin dents naturals. Les dents contigus no han de ser
                  danyats per servir de suport a la nova pròtesi.
                  <br />
                  La col·locació d&apos;implants en l&apos;os evita la reducció
                  òssia que es produeix després de la pèrdua de les dents. Es
                  considera com un tractament definitiu.
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

export default ImplantsDentals;
