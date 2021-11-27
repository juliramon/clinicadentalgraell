import React from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import NavigationBar from "../components/navigation/NavigationBar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Inici - Clínica Dental Graell</title>
      </Head>
      <NavigationBar />
      <main>
        <Fade cascade>
          <section className="relative flex flex-wrap items-center py-10 md:py-24">
            <div className="absolute top-0 left-0 w-full h-full">
              <span className="absolute top-p left-0 w-full h-full bg-primary-500 bg-opacity-50 z-10"></span>
              <picture>
                <source srcset="../branding/clinica-dental-graell-cover-bg.jpg" />
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
                <div className="w-full md:w-6/12 lg:w-7/12 pt-20">
                  <div className="w-full md:w-10/12">
                    <span className="uppercase flex items-center text-sm text-primary-400 font-bold tracking-widest">
                      Creem somriures{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-mood-smile ml-2"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#7092E8"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="10" x2="9.01" y2="10" />
                        <line x1="15" y1="10" x2="15.01" y2="10" />
                        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                      </svg>
                    </span>
                    <h1 className="text-5xl leading-tight text-primary-300 mt-4 mb-8 font-semibold">
                      Clínica Dental
                      <br /> a la Seu d'Urgell
                    </h1>
                    <p className="text-primary-300 leading-8">
                      <strong>Clínica Dental Graell</strong> és una moderna
                      <strong> clínica dental a la Seu d'Urgell</strong> on
                      combinem un servei integral d’odontologia avançada amb les
                      últimes tecnologies i un tracte proper, per a donar una
                      millor solució en cada cas i aconseguir la salut oral i
                      retornar el somriure a cada pacient.
                    </p>
                    <div className="flex items-center mt-8">
                      <a
                        href="/especialitats"
                        title="Especialitats"
                        className="button button-light mr-5"
                      >
                        Especialitats
                      </a>
                      <a
                        href="/contacte"
                        title="Contactar"
                        className="button button-primary"
                      >
                        Contacte
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 absolute inset-y-0 right-0 h-72 lg:h-full pt-28">
              <picture>
                <source srcSet="../branding/clinica-dental-graell-cover-bg.jpg" />
                <img
                  src="../branding/clinica-dental-graell-cover-bg.jpg"
                  data-src="../branding/clinica-dental-graell-cover-bg.jpg"
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
              <h2 className="text-4xl">Especialitats</h2>
              <div className="flex flex-wrap w-full -mx-6">
                <div className="w-full md:w-1/4 px-6"></div>
                <div className="w-full md:w-1/4 px-6"></div>
                <div className="w-full md:w-1/4 px-6"></div>
                <div className="w-full md:w-1/4 px-6"></div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade bottom cascade>
          <section className="relative py-12 md:py-20">
            <div className="container mx-auto">
              <h2 className="text-4xl">Blockquote</h2>
              <div className="flex flex-wrap w-full -mx-6">
                <div className="w-full md:w-1/4 px-6"></div>
                <div className="w-full md:w-1/4 px-6"></div>
                <div className="w-full md:w-1/4 px-6"></div>
                <div className="w-full md:w-1/4 px-6"></div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade bottom cascade>
          <section className="relative py-12 md:py-20">
            <div className="container mx-auto">
              <h2 className="text-4xl">Proposta de valor</h2>
              <div className="flex flex-wrap w-full -mx-6">
                <div className="w-full md:w-1/4 px-6"></div>
                <div className="w-full md:w-1/4 px-6"></div>
                <div className="w-full md:w-1/4 px-6"></div>
                <div className="w-full md:w-1/4 px-6"></div>
              </div>
            </div>
          </section>
        </Fade>
      </main>
    </>
  );
};

export default Home;
