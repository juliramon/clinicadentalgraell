import React from "react";
import Head from "next/head";
import NavigationBar from "../../components/navigation/NavigationBar";
import GlobalTexts from "../../utils/globals.json";
import HomeTexts from "../../utils/home.json";
import CommonTexts from "../../utils/commons.json";
import Footer from "../../components/Footer";
import CitaPrevia from "../../components/CitaPrevia";

const EstaticaDental = () => {
  return (
    <>
      <Head>
        <title>Estètica dental - {GlobalTexts.brand}</title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <article>
          <section className="relative overflow-hidden pt-28">
            <div className="flex flex-wrap items-center justify-between bg-primary-100 bg-opacity-20">
              <div className="w-full md:w-5/12 h-96 relative z-20">
                <picture>
                  <source srcset="../branding/equip-clinica-dentall-graell-cover.jpg" />
                  <img
                    src="../branding/equip-clinica-dentall-graell-cover.jpg"
                    data-src="../branding/equip-clinica-dentall-graell-cover.jpg"
                    alt=""
                    width="400"
                    height="300"
                    className="object-cover object-center w-full h-full"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full md:w-2/3 mt-4 mb-8">
                  <ul className="breadcrumb list-none flex items-center">
                    <li>
                      <span>Inici</span>
                    </li>
                    <li>
                      <span>Especialitats</span>
                    </li>
                    <li>
                      <span>Estètica dental</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Estètica dental
                  </h1>
                  <div className="pl-16 relative">
                    <span className="absolute left-6 -top-20 bg-primary-100 h-full p-24 w-full bg-opacity-20 rounded-md"></span>
                    <span className="relative z-20">
                      L’estètica dental és la disciplina de l’Odontologia que
                      s’encarrega de tractar totes aquelles alteracions,
                      dismòrfies i patologies de la morfologia bucodental per
                      aconseguir un cànon de bellesa que s’ajusti a l’ideal
                      social d’avui en dia.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden py-20">
            <div className="container mx-auto">
              <div className="flex flex-wrap w-full md:w-9/12 lg:w-6/12 mx-auto">
                <p>
                  L’estètica dental és la disciplina de l’Odontologia que
                  s’encarrega de tractar totes aquelles alteracions, dismòrfies
                  i patologies de la morfologia bucodental per aconseguir un
                  cànon de bellesa que s’ajusti a l’ideal social d’avui en dia.
                </p>
                <div className="-ml-24 pt-10 pb-8">
                  <blockquote>
                    Pràctiques com el blanquejament dental o les carilles tenen
                    com a objectiu millorar l’estètica dental.
                  </blockquote>
                </div>
                <p>
                  Actualment, tenir un bon somriure és sinònim de salut i
                  benestar social. Cada vegada són més els pacients que es
                  preocupen per tenir no només una boca sana, sinó també un
                  bonic somriure gràcies a tractament de blanquejament dental.
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

export default EstaticaDental;
