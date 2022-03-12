import React from "react";
import Head from "next/head";
import NavigationBar from "../../components/navigation/NavigationBar";
import GlobalTexts from "../../utils/globals.json";
import HomeTexts from "../../utils/home.json";
import CommonTexts from "../../utils/commons.json";
import Footer from "../../components/Footer";
import CitaPrevia from "../../components/CitaPrevia";

const Ortodoncia = () => {
  return (
    <>
      <Head>
        <title>Ortodòncia - {GlobalTexts.brand}</title>
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
                    alt="Ortodòncia"
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
                      <span>Ortodòncia</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Ortodòncia
                  </h1>
                  <div className="pl-16 relative">
                    <span className="absolute left-6 -top-20 bg-primary-100 h-full p-28 w-full bg-opacity-20 rounded-md"></span>
                    <span className="relative z-20">
                      L’ortodòncia és la disciplina de l’odontologia que estudia
                      el moviment dental. El tractament ortodòntic corregeix la
                      malposició dental. L’ortodòncia s’encarrega de construir
                      uns somriures bonics portant les dents, llavis, ossos
                      maxil·lars a una situació harmònica.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden py-20">
            <div className="container">
              <div className="flex flex-wrap w-full md:w-9/12 lg:w-6/12 mx-auto">
                <p>
                  Cada vegada són més les persones que es consciencien sobre la
                  importància de tenir unes dents en perfecte estat. Que les
                  dents estiguin alineades correctament no només repercutirà des
                  d’un punt de vista estètic, sinó que tindrà també importància
                  en els aspectes funcionals i articulars.
                </p>
                <p>
                  En edats de creixement és molt fàcil interactuar sobre
                  l’alineació tant de dents com de la mandíbula o el maxil·lar.
                  Tot i així, i gràcies a noves tècniques i materials existents,
                  l’ortodoncista pot corregir grans defectes també a l’edat
                  adulta.
                </p>
                <div className="-ml-24 pt-10 pb-8">
                  <blockquote>
                    Les dents alineades produeixen una millor funció, són més
                    fàcils de netejar i, en conseqüència, més fàcils de mantenir
                    a llarg termini.
                  </blockquote>
                </div>
                <p>
                  Els nens, adolescents, joves, adults de mitjana edat, homes i
                  dones, i adults d’avançada edat: tots es beneficien de la
                  simplicitat que caracteritza l’ortodòncia d’avui dia. Hi ha
                  múltiples solucions i mètodes ortodòntics per a cada estil de
                  vida i pressupost. Els costos i la durada d’un tractament
                  d’ortodòncia varien segons la complexitat del cas i la tècnica
                  emprada.
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

export default Ortodoncia;
