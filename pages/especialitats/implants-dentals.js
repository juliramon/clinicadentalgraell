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
        <title>Implants dentals - {GlobalTexts.brand}</title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <article>
          <section className="relative overflow-hidden pt-24 lg:pt-288">
            <div className="flex flex-wrap items-center justify-between bg-primary-100 bg-opacity-20">
              <div className="w-full md:w-5/12 h-60 lg:h-96 relative z-20">
                <picture>
                  <source srcSet="../branding/equip-clinica-dentall-graell-cover.jpg" />
                  <img
                    src="../branding/equip-clinica-dentall-graell-cover.jpg"
                    data-src="../branding/equip-clinica-dentall-graell-cover.jpg"
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
                  L’estètica dental és la disciplina de l’Odontologia que
                  s’encarrega de tractar totes aquelles alteracions, dismòrfies
                  i patologies de la morfologia bucodental per aconseguir un
                  cànon de bellesa que s’ajusti a l’ideal social d’avui en dia.
                </p>
                <p>
                  Generalment, aquelles persones que hagin perdut algun o totes
                  les seves dents són candidats per posar-se implants, però és
                  important que el pacient estigui sa ja que hi ha una sèrie de
                  condicionants i malalties que poden afectar a l’implant. Per
                  exemple, la fusió de l’implant amb l’os podria veure afectada
                  en pacients amb diabetis no controlada, fumadors, alcohòlics o
                  amb malaltia periodontal no controlada.
                </p>
                <div className="lg:-ml-24 pt-10 pb-8">
                  <blockquote>
                    Els implants dentals són un cargol de titani que és acceptat
                    per l’organisme com una cosa pròpia, adaptant-se a la base
                    òssia de forma natural.
                  </blockquote>
                </div>
                <p>
                  D’aquesta manera, l’os creix ràpidament al voltant d’ell,
                  produint-se una unió, estable i més duradora que en un altre
                  tipus de tractament, entre l’implant i l’os.
                  <br />
                  Per aconseguir la reposició d’una dent mitjançant implants
                  dentals, cal col·locar el cargol de titani a l’os. Finalment
                  es col·loca la corona que pot ser de ceràmica o resina segons
                  les situacions.
                </p>
                <p>
                  D’aquesta manera es construeix un nova dent que romandrà de
                  manera permanent a la dentadura del pacient donat la seva
                  adhesió amb el teixit ossi.
                  <br />
                  Compten amb diferents beneficis tant funcionals com estètics.
                  Per a molts pacients, el tractament amb implants dentals
                  suposa una millora notable tant en la seva salut bucodental,
                  com en la seva qualitat de vida i autoestima.
                </p>
                <p>
                  Els implants dentals tenen molts avantatges en comparació amb
                  les solucions tradicionals de corones, ponts i pròtesis
                  removibles.
                  <br />
                  Els implants dentals semblen, se senten i funcionen com si
                  fossin dents naturals. Les dents contigus no han de ser
                  danyats per servir de suport a la nova pròtesi.
                  <br />
                  La col·locació d’implants en l’os evita la reducció òssia que
                  es produeix després de la pèrdua de les dents. Es considera
                  com un tractament definitiu.
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
