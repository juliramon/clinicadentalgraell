import React from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import NavigationBar from "../components/navigation/NavigationBar";
import specialities from "../utils/specialities.json";
import SpecialityBox from "../components/SpecialityBox";
import HomeTexts from "../utils/home.json";
import GlobalTexts from "../utils/globals.json";
import CommonTexts from "../utils/commons.json";
import Footer from "../components/Footer";
import CitaPrevia from "../components/CitaPrevia";

const Home = () => {
  return (
    <>
      <Head>
        <title>Inici - {GlobalTexts.brand}</title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} />
      <main>
        <Fade cascade>
          <section className="relative flex flex-wrap items-center py-10 md:py-36">
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
            <div className="container mx-auto pr-9">
              <div className="flex flex-wrap justify-start">
                <div className="w-full md:w-6/12 lg:w-7/12 pt-24">
                  <div className="w-full md:w-10/12">
                    <span className="uppercase flex items-center text-sm text-primary-300 font-bold tracking-widest span-cover">
                      {HomeTexts.tagline}{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-mood-smile ml-2"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#076899"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="10" x2="9.01" y2="10" />
                        <line x1="15" y1="10" x2="15.01" y2="10" />
                        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                      </svg>
                    </span>
                    <h1 className="mt-4 mb-8 w-full md:w-9/12">
                      {HomeTexts.title}
                    </h1>
                    <p className="leading-8">{HomeTexts.subtitle}</p>
                    <div className="flex items-center mt-8">
                      <a
                        href="/especialitats"
                        title={CommonTexts.especialitats}
                        className="button button-light mr-5"
                      >
                        {CommonTexts.especialitats}
                      </a>
                      <a
                        href="/contacte"
                        title={CommonTexts.contacte}
                        className="button button-primary"
                      >
                        {CommonTexts.contacte}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 absolute inset-y-0 right-0 h-72 lg:h-full pt-32">
              <picture>
                <source srcSet="../branding/clinica-dental-graell-cover-bg.jpg" />
                <img
                  src="../branding/clinica-dental-graell-cover-bg.jpg"
                  datasrc="../branding/clinica-dental-graell-cover-bg.jpg"
                  alt="Clínica Dental a la Seu d'Urgell - Clínica Dental Graell"
                  className="object-cover w-full h-full rounded-tl-350"
                  width="400"
                  height="300"
                  loading="lazy"
                />
              </picture>
            </div>
          </section>
        </Fade>
        <Fade bottom cascade>
          <section className="relative py-12 md:py-20">
            <div className="container mx-auto">
              <div className="border-b border-primary-100 pb-12">
                <h2 className="uppercase flex items-center text-sm text-primary-200 font-bold tracking-widest span-cover">
                  Especialitats
                </h2>
                <div className="flex flex-wrap w-full -mx-8 mt-8">
                  {specialities.map((el, idx) => (
                    <SpecialityBox
                      key={idx}
                      title={el.title}
                      description={el.description}
                      icon={el.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade bottom cascade>
          <section className="relative pb-12 md:pb-20 md:pt-8">
            <div className="container mx-auto flex flex-wrap justify-between">
              <div className="w-full md:w-1/2 md:py-8">
                <div className="w-full md:w-9/12">
                  <h2 className="mb-5">{HomeTexts.equip_title}</h2>
                </div>
                <div className="w-full md:w-9/12">
                  <p className="mt-8">{HomeTexts.equip_text}</p>
                  <div className="mt-12">
                    <a
                      href="/equip"
                      title={CommonTexts.llegirmes}
                      className="button button-primary"
                    >
                      {CommonTexts.sabermes}{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-narrow-right"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <picture>
                  <img
                    src="../branding/clinica-dental-graell-cover-bg.jpg"
                    datasrc="../branding/clinica-dental-graell-cover-bg.jpg"
                    alt={HomeTexts.equip_title}
                    className="object-cover w-full h-full"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </section>
        </Fade>
        <Fade bottom cascade>
          <section className="relative py-12 md:py-20">
            <div className="container mx-auto">
              <div className="bg-primary-100 bg-opacity-20 p-32 flex flex-wrap items-center justify-between">
                <div className="w-full md:w-1/3 h-96">
                  <picture>
                    <source srcSet="../branding/clinica-dental-graell-cover-bg.jpg" />
                    <img
                      src="../branding/clinica-dental-graell-cover-bg.jpg"
                      datasrc="../branding/clinica-dental-graell-cover-bg.jpg"
                      alt={GlobalTexts.brand}
                      className="object-cover w-full h-full"
                      width="400"
                      height="300"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="w-full md:w-1/2">
                  <blockquote>{HomeTexts.blockquote_text}</blockquote>
                  <div className="w-full flex flex-col mt-5">
                    <span className="font-bold">Dra. M. Teresa Graell</span>
                    <span>N. Col. 5967</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <CitaPrevia />
      </main>
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default Home;
