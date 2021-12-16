import React from "react";
import Head from "next/head";
import NavigationBar from "../components/navigation/NavigationBar";
import GlobalTexts from "../utils/globals.json";
import HomeTexts from "../utils/home.json";
import Footer from "../components/Footer";
import EquipTexts from "../utils/equip.json";
import TeamMember from "../components/TeamMember";
import CitaPrevia from "../components/CitaPrevia";
import TeamMemberAvatar from "../components/TeamMember";

const Equip = () => {
  return (
    <>
      <Head>
        <title>Equip - {GlobalTexts.brand}</title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} />
      <main>
        <section className="py-10 md:pt-40 md:pb-12 relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <span className="absolute top-p left-0 w-full h-full bg-primary-100 bg-opacity-40 z-10"></span>
            <picture>
              <source srcet="../branding/clinica-dental-graell-cover-bg.jpg" />
              <img
                src="../branding/clinica-dental-graell-cover-bg.jpg"
                data-src="../branding/clinica-dental-graell-cover-bg.jpg"
                alt="Clínica Dental a la Seu d'Urgell"
                className="object-cover w-full h-full opacity-10"
                width="400"
                height="300"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="container mx-auto relative z-20">
            <h1 className="text-4xl mt-4 mb-8 w-full md:w-6/12 leading-normal">
              {EquipTexts.title}
            </h1>
          </div>
        </section>
        <section className="py-10 md:py-24">
          <div className="container mx-auto">
            <div className="flex flex-wrap w-full relative">
              {EquipTexts.persones.map((persona, idx) => (
                <TeamMember
                  key={idx}
                  image={persona.image}
                  salutation={persona.salutation}
                  name={persona.name}
                  numCol={persona.numCol}
                  description={persona.description}
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
