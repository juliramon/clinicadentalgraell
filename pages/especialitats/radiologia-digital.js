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
        <title>Radiologia digital - {GlobalTexts.brand}</title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <article>
          <section className="relative overflow-hidden pt-28">
            <div className="flex flex-wrap items-center justify-between bg-primary-100 bg-opacity-20">
              <div className="w-full md:w-5/12 h-96 relative z-20">
                <picture>
                  <source srcSet="../branding/equip-clinica-dentall-graell-cover.jpg" />
                  <img
                    src="../branding/equip-clinica-dentall-graell-cover.jpg"
                    data-src="../branding/equip-clinica-dentall-graell-cover.jpg"
                    alt="Radiologia digital"
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
                      <span>Radiologia digital</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Radiologia digital
                  </h1>
                  <div className="pl-16 relative">
                    <span className="absolute left-6 -top-20 bg-primary-100 h-full p-24 w-full bg-opacity-20 rounded-md"></span>
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
          <section className="relative overflow-hidden py-20">
            <div className="container mx-auto">
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
