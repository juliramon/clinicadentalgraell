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
        <title>Odontopediatria - {GlobalTexts.brand}</title>
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
                      <span>Especialitats</span>
                    </li>
                    <li>
                      <span>Odontopediatria</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Odontopediatria
                  </h1>
                  <div className="pl-16 relative">
                    <span className="absolute left-6 -top-20 bg-primary-100 h-full p-28 w-full bg-opacity-20"></span>
                    <span className="relative z-20">
                      L’odontopediatria és la branca de l’odontologia
                      encarregada de tractar les dents dels nens, des del
                      naixement fins als 6 anys cuidant les seves dents
                      temporals, i fins als 12 anys quan finalitza la dentició
                      mixta i s’inicia la definitiva.
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
                  Els odontopediatres s’encarreguen de detectar precoçment les
                  anomalies de la posició dels maxil·lars per a remetre el
                  pacient a l’ortodoncista i cirurgià maxil·lofacial i així,
                  poder modificar o frenar el creixement d’aquests ossos. Així
                  mateix, detecta els mals hàbits per tal de reeducar, realitzar
                  un tractament restaurador en cas de càries dental o segellador
                  per prevenir la futura patologia. Informa també sobre
                  procediments d’higiene oral per aconseguir un creixement sa de
                  la cavitat bucal.
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

export default Odontopediatria;