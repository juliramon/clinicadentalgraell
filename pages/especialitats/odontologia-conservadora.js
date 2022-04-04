import React from "react";
import Head from "next/head";
import NavigationBar from "../../components/navigation/NavigationBar";
import GlobalTexts from "../../utils/globals.json";
import HomeTexts from "../../utils/home.json";
import CommonTexts from "../../utils/commons.json";
import Footer from "../../components/Footer";
import CitaPrevia from "../../components/CitaPrevia";

const OdontologiaConservadora = () => {
  return (
    <>
      <Head>
        <title>Odontologia conservadora - {GlobalTexts.brand}</title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <article>
          <section className="relative overflow-hidden pt-24 lg:pt-28">
            <div className="flex flex-wrap items-center justify-between bg-primary-100 bg-opacity-20">
              <div className="w-full md:w-5/12 h-60 lg:h-96 relative z-20">
                <picture>
                  <source
                    srcSet="../especialitats/odontologia-conservadora-cover.webp"
                    type="image/webp"
                  />
                  <img
                    src="../especialitats/odontologia-conservadora-cover.jpg"
                    data-src="../especialitats/odontologia-conservadora-cover.jpg"
                    alt="Odontologia conservadora"
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
                      <span>Odontologia conservadora</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Odontologia conservadora
                  </h1>
                  <div className="pl-16 relative">
                    <span className="hidden lg:block absolute left-6 -top-20 bg-primary-100 h-full p-28 w-full bg-opacity-20 rounded-md"></span>
                    <span className="relative z-20">
                      L’odontologia conservadora i restauradora ens permet
                      prevenir, aturar i curar la càries dental en totes les
                      seves fases des de la menor a la major destrucció de
                      teixit dentari.{" "}
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
                  La càries dental pot afectar lleument a l’estructura dentària,
                  destruint únicament l’esmalt o progressar a estadis més greus,
                  envaint teixits més profunds com són la dentina o la polpa
                  dental. El tractament de la càries dental es basa en
                  l’eliminació del teixit infectat i la posterior reconstrucció
                  del teixit perdut per materials biocompatibles, en aquest cas
                  resines compostes. És el que abans popularment coneixíem com
                  els empasts dentals i el que actualment anomenem obturacions
                  dentals.{" "}
                </p>
                <div className="w-full mt-4">
                  <picture>
                    <source
                      srcSet="../especialitats/odontologia-conservadora-img.webp"
                      type="image/webp"
                    />
                    <img
                      src="../especialitats/odontologia-conservadora-img.jpg"
                      data-src="../especialitats/odontologia-conservadora-img.jpg"
                      alt="Odontologia conservadora"
                      width="400"
                      height="300"
                      className="object-cover object-center w-full h-full"
                      loading="lazy"
                    />
                    <figcaption className="text-xs mt-4">
                      L’odontologia conservadora i restauradora ens permet
                      prevenir, aturar i curar la càries dental en totes les
                      seves fases
                    </figcaption>
                  </picture>
                </div>
                <div className="lg:-ml-24 pt-24 pb-8">
                  <blockquote>
                    A dia d’avui, l’odontologia restauradora engloba un arsenal
                    de possibilitats pel que fa a la tècnica i materials de
                    restauració.
                  </blockquote>
                </div>
                <p>
                  S’aconsegueix un resultat exitós mitjançant la realització de
                  tots els procediments adequats amb els millors materials i una
                  excel·lent rehabilitació de l’anatomia de cadascuna de les
                  peces dentàries. A dia d’avui, l’odontologia restauradora
                  engloba un arsenal de possibilitats pel que fa a la tècnica i
                  materials de restauració.{" "}
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

export default OdontologiaConservadora;
