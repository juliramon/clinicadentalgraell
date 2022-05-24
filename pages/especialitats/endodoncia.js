import React from "react";
import Head from "next/head";
import NavigationBar from "../../components/navigation/NavigationBar";
import GlobalTexts from "../../utils/globals.json";
import HomeTexts from "../../utils/home.json";
import CommonTexts from "../../utils/commons.json";
import Footer from "../../components/Footer";
import CitaPrevia from "../../components/CitaPrevia";

const Endodoncia = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Endodòncia - Clínica Dental Graell</title>
        <meta
          name="description"
          content="A Clínica Dental Graell som experts en endodòncies. Fes clic per a més informació sobre endodòncies i les nostres especialitats."
        />
        <link
          rel="canonical"
          href="https://clinicadentalgraell.com/especialitats/endodoncia"
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
          content="Endodòncia  - Clínica Dental Graell"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A Clínica Dental Graell som experts en endodòncies. Fes clic per a més informació sobre endodòncies i les nostres especialitats."
        />
        <meta property="og:image" content="../share.jpg" />
        <meta property="og:url" content="https://clinicadentalgraell.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@clinicadentalgraell" />
        <meta name="twitter:creator" content="@clinicadentalgraell" />
        <meta property="article:publisher" content="Clinica Dental Graell" />
        <meta
          name="twitter:title"
          content="Endodòncia - Clínica Dental Graell"
        />
        <meta
          name="twitter:description"
          content="A Clínica Dental Graell som experts en endodòncies. Fes clic per a més informació sobre endodòncies i les nostres especialitats."
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
                  <source srcSet="../especialitats/endodoncia-2.jpg" />
                  <img
                    src="../especialitats/endodoncia-2.jpg"
                    data-src="../especialitats/endodoncia-2.jpg"
                    alt="Endodòncia"
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
                      <span>Endodòncia</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Endodòncia
                  </h1>
                  <div className="pl-16 relative">
                    <span className="hidden lg:block absolute left-6 -top-20 bg-primary-100 h-full p-28 w-full bg-opacity-20 rounded-md"></span>
                    <span className="relative z-20">
                      L&apos;endodoncista és l&apos;especialista de
                      l&apos;odontologia que estudia tot el relacionat amb el
                      diagnòstic i el tractament dels conductes radiculars
                      (endodòncia).
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
                  L&apos;endodòncia és la branca de l&apos;odontologia
                  especialitzada en tractar els conductes radiculars de la dent,
                  però popularment es coneix amb el nom de “matar el nervi”. La
                  seva funció principal és extreure parcial o totalment la polpa
                  dental que ha estat danyada o infectada per després omplir
                  l&apos;espai i així tornar la funcionalitat a la dent i acabar
                  amb el dolor provocat per la pulpitis.
                </p>
                <div className="w-full mt-4">
                  <picture>
                    <img
                      src="../especialitats/endodoncia-3.jpg"
                      data-src="../especialitats/endodoncia-3.jpg"
                      alt="Odontologia conservadora"
                      width="400"
                      height="300"
                      className="object-cover object-center w-full h-full"
                      loading="lazy"
                    />
                    <figcaption className="text-xs mt-4">
                      L&apos;endodòncia és la branca de l&apos;odontologia
                      especialitzada en tractar els conductes radiculars de la
                      dent, però popularment es coneix amb el nom de “matar el
                      nervi”
                    </figcaption>
                  </picture>
                </div>
                <div className="lg:-ml-24 pt-24 pb-8">
                  <blockquote>
                    Gràcies al tractament endodòntic les afectacions dels
                    conductes radiculars que abans provocaven l&apos;exodòncia
                    de la dent, es poden tractar ara de manera menys invasiva,
                    preservant la funcionalitat de la dent.
                  </blockquote>
                </div>
                <p>
                  El tractament endodòntic està indicat quan, per un motiu o un
                  altre, els conductes de la dent es veuen danyats pels
                  bacteris, que arriben a afectar el nervi, l&apos;arrel o fins
                  i tot l&apos;os maxil·lar on s&apos;alberga la dent. Aquesta
                  situació es dóna per culpa de la necrosi pulpar o mort del
                  nervi, que pot estar causada principalment per situacions com:
                </p>
                <ul className="mb-4 pl-6 lg:pl-0">
                  <li>
                    <span className="font-bold">Càries profunda</span>: la
                    infecció ha arribat a la dentina i ha afectat els conductes
                    radiculars.
                  </li>
                  <li>
                    <span className="font-bold">Dents fracturades</span>: la
                    fractura de la dent permet l&apos;entrada dels bacteris als
                    conductes radiculars, la qual cosa provoca necrosi pulpar.
                  </li>
                  <li>
                    <span className="font-bold">Traumatismes severs</span>: un
                    cop a l&apos;arrel de la dent provoca la infecció dels
                    conductes radiculars.
                  </li>
                  <li>
                    <span className="font-bold">
                      Lesions periodontals greus
                    </span>
                    : lesions periodontals combinades.
                  </li>
                  <li>
                    <span className="font-bold">Motius protètics</span>: per la
                    col·locació posterior de corones o ponts.
                  </li>
                  <li>
                    <span className="font-bold">
                      Anomalies morfològiques dentals
                    </span>
                    : dens in dente.
                  </li>
                  <li>
                    <span className="font-bold">Atricció</span>
                  </li>
                  <li>
                    <span className="font-bold">Abrasió</span>
                  </li>
                  <li>
                    <span className="font-bold">Idiopàtiques</span>
                  </li>
                </ul>
                <p>
                  En la clínica dental Graell apliquem un tractament
                  personalitzat a cada pacient per realitzar l&apos;extracció
                  del teixit infectat o inflamat necessari i posteriorment
                  reconstruir la dent de la manera més efectiva.
                  L&apos;especialista decideix el procediment endodòntic a
                  seguir, que sol constar de tres fases:
                </p>
                <p>
                  L&apos;endodoncista neteja tot el teixit destruït, eliminant
                  la polpa danyada i la infecció. Posteriorment, omple el buit
                  de la dent amb un material biocompatible. Finalment, es
                  segella la dent per evitar que els bacteris tornin a arribar
                  al seu interior.
                </p>
                <div className="w-full mt-4 mb-16">
                  <picture>
                    <img
                      src="../especialitats/endodoncia-4.jpg"
                      data-src="../especialitats/endodoncia-4.jpg"
                      alt="Odontologia conservadora"
                      width="400"
                      height="300"
                      className="object-cover object-center w-full h-full"
                      loading="lazy"
                    />
                    <figcaption className="text-xs mt-4">
                      En la clínica dental Graell apliquem un tractament
                      personalitzat a cada pacient per realitzar
                      l&apos;extracció del teixit infectat o inflamat necessari
                      i posteriorment reconstruir la dent de la manera més
                      efectiva
                    </figcaption>
                  </picture>
                </div>
                <p>
                  En els casos en què la destrucció de la dent és major serà
                  necessari aplicar una reconstrucció més important per tornar
                  la funcionalitat a la dent. Aquestes situacions es poden
                  solucionar amb la col·locació d&apos;un poste que augmenti la
                  subjecció de la restauració i amb un recobriment de cúspides
                  complet que permeti mastegar sense problemes. En altres casos,
                  és necessari la realització d&apos;una incrustació o corona.
                </p>
                <p>
                  No sempre som a temps de recórrer a l&apos;endodòncia.
                  <br />
                  En alguns casos que la infecció ha afectat a l&apos;arrel i
                  fins i tot a l&apos;os, l&apos;única solució serà realitzar
                  l&apos;extracció de la dent, perquè aquests danys no vagin a
                  més. Per evitar aquestes situacions és necessari acudir a les
                  revisions dentals un cop a l&apos;any a manera de prevenció.
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

export default Endodoncia;
