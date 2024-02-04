import React from "react";
import Head from "next/head";
import NavigationBar from "../components/navigation/NavigationBar";
import GlobalTexts from "../utils/globals.json";
import HomeTexts from "../utils/home.json";
import CommonTexts from "../utils/commons.json";
import Footer from "../components/Footer";
import EquipTexts from "../utils/equip.json";
import TeamMember from "../components/TeamMember";
import CitaPrevia from "../components/CitaPrevia";
import parse from "html-react-parser";

const Equip = () => {
  const subtitle = parse(EquipTexts.subtitle);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Equip - Clínica Dental Graell</title>
        <meta
          name="description"
          content="Et presentem l'equip de professionals de la Clínica Dental Graell."
        />
        <link rel="canonical" href="https://clinicadentalgraell.com/equip" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="Clinica Dental Graell" />
        <link rel="icon" href="../favicon.svg" />
        <link rel="mask-icon" href="../favicon.svg" color="#ffffff" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png"></link>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta property="og:title" content="Equip  - Clínica Dental Graell" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Et presentem l'equip de professionals de la Clínica Dental Graell."
        />
        <meta property="og:image" content="../share.jpg" />
        <meta property="og:url" content="https://clinicadentalgraell.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@clinicadentalgraell" />
        <meta name="twitter:creator" content="@clinicadentalgraell" />
        <meta property="article:publisher" content="Clinica Dental Graell" />
        <meta name="twitter:title" content="Equip  - Clínica Dental Graell" />
        <meta
          name="twitter:description"
          content="Et presentem l'equip de professionals de la Clínica Dental Graell."
        />
        <meta name="twitter:image" content="../share.jpg" />
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <section className="relative overflow-hidden pt-24 lg:pt-28">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-5/12 h-60 lg:h-96 relative z-20">
              <picture>
                <source srcSet="../equip/equip-clinica-dental-graell.jpg" />
                <img
                  src="../equip/equip-clinica-dental-graellver.jpg"
                  data-src="../equip/equip-clinica-dental-graellver.jpg"
                  alt={EquipTexts.title}
                  width="400"
                  height="300"
                  className="object-contain object-center w-full h-full lg:rounded-tr-md lg:rounded-br-md"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="px-6 w-full lg:w-2/3 mt-10 lg:mt-4 mb-8">
                <ul className="breadcrumb list-none flex items-center">
                  <li>
                    <span>Inici</span>
                  </li>
                  <li>
                    <span>Equip</span>
                  </li>
                </ul>
                <h1 className="text-3xl mt-4 mb-7 leading-snug relative z-20">
                  {EquipTexts.title}
                </h1>
                <div className="pl-16 relative">
                  <span className="absolute left-6 -top-20 bg-primary-100 h-full p-24 w-full bg-opacity-20 rounded-md"></span>
                  <span className="relative z-20">{subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 md:py-24">
          <div className="container">
            <h2 className="text-xl flex items-center span-cover m-0">
              {EquipTexts.compon}
            </h2>
            <div className="flex flex-wrap w-full relative mt-12 lg:-mx-16">
              {EquipTexts.persones.map((persona, idx) => (
                <TeamMember
                  key={idx}
                  image={persona.image}
                  salutation={persona.salutation}
                  name={persona.name}
                  numCol={persona.numCol}
                  description={persona.description}
                  slug={persona.slug}
                />
              ))}
            </div>
          </div>
        </section>
        <CitaPrevia />
      </main>
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default Equip;
