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
import ReactHtmlParser from "react-html-parser";

const Equip = () => {
  const subtitle = ReactHtmlParser(EquipTexts.subtitle);
  return (
    <>
      <Head>
        <title>Equip - {GlobalTexts.brand}</title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <section className="relative overflow-hidden pt-28">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-5/12 h-96 relative z-20">
              <picture>
                <source srcSet="../branding/equip-clinica-dentall-graell-cover.jpg" />
                <img
                  src="../branding/equip-clinica-dentall-graell-cover.jpg"
                  data-src="../branding/equip-clinica-dentall-graell-cover.jpg"
                  alt={EquipTexts.title}
                  width="400"
                  height="300"
                  className="object-cover object-center w-full h-full rounded-tr-md rounded-br-md"
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
            <div className="flex flex-wrap w-full relative mt-12 -mx-16">
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
