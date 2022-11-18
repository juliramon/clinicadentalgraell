import Head from "next/head";
import NavigationBar from "../../components/navigation/NavigationBar";
import GlobalTexts from "../../utils/globals.json";
import HomeTexts from "../../utils/home.json";
import CommonTexts from "../../utils/commons.json";
import Footer from "../../components/Footer";
import CitaPrevia from "../../components/CitaPrevia";
import { useRef, useEffect } from "react";
import Glide from "@glidejs/glide";

const Ortodoncia = () => {
  const sliderConfiguration = {
    autoplay: 4000,
    type: "carousel",
    gap: 0,
  };
  const ref = useRef();
  useEffect(() => {
    const slider = new Glide(ref.current, sliderConfiguration);
    slider.mount();
  }, [ref]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ortodòncia - Clínica Dental Graell</title>
        <meta
          name="description"
          content="A Clínica Dental Graell som experts en ortodòncies. Fes clic per a més informació sobre l'ortodòncia i les nostres especialitats."
        />
        <link
          rel="canonical"
          href="https://clinicadentalgraell.com/especialitats/ortodoncia"
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="Clinica Dental Graell" />
        <link rel="icon" href="../favicon.svg" />
        <link rel="mask-icon" href="../favicon.svg" color="#ffffff" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png"></link>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          property="og:title"
          content="Ortodòncia  - Clínica Dental Graell"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A Clínica Dental Graell som experts en ortodòncies. Fes clic per a més informació sobre l'ortodòncia i les nostres especialitats."
        />
        <meta property="og:image" content="../share.jpg" />
        <meta property="og:url" content="https://clinicadentalgraell.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@clinicadentalgraell" />
        <meta name="twitter:creator" content="@clinicadentalgraell" />
        <meta property="article:publisher" content="Clinica Dental Graell" />
        <meta
          name="twitter:title"
          content="Ortodòncia  - Clínica Dental Graell"
        />
        <meta
          name="twitter:description"
          content="A Clínica Dental Graell som experts en ortodòncies. Fes clic per a més informació sobre l'ortodòncia i les nostres especialitats."
        />
        <meta name="twitter:image" content="../share.jpg" />
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <article>
          <section className="relative overflow-hidden pt-24 lg:pt-28">
            <div className="flex flex-wrap items-center justify-between bg-primary-100 bg-opacity-20">
              <div className="w-full md:w-5/12 h-60 lg:h-96 relative z-20">
                <picture>
                  <source srcSet="../especialitats/ortodoncia-3.jpg" />
                  <img
                    src="../especialitats/ortodoncia-3.jpg"
                    data-src="../especialitats/ortodoncia-3.jpg"
                    alt="Ortodòncia"
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
                      <span>Ortodòncia</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Ortodòncia
                  </h1>
                  <div className="pl-16 relative">
                    <span className="hidden lg:block absolute left-6 -top-20 bg-primary-100 h-full p-28 w-full bg-opacity-20 rounded-md"></span>
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
          <section className="relative overflow-hidden py-10 lg:py-20">
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
                <div ref={ref} className="glide my-4 w-full mx-auto">
                  <div className="glide__track" data-glide-el="track">
                    <div className="glide__slides">
                      <div className="glide__slide">
                        <picture>
                          <img
                            src="../especialitats/ortodoncia-1.jpg"
                            data-src="../especialitats/ortodoncia-1.jpg"
                            alt="Ortodoncia"
                            width="400"
                            height="300"
                            className="object-cover object-center w-full h-full"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div className="glide__slide">
                        <picture>
                          <img
                            src="../especialitats/ortodoncia-2.jpg"
                            data-src="../especialitats/ortodoncia-2.jpg"
                            alt="Ortodoncia"
                            width="400"
                            height="300"
                            className="object-cover object-center w-full h-full"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div className="glide__slide">
                        <picture>
                          <img
                            src="../especialitats/ortodoncia-2.jpg"
                            data-src="../especialitats/ortodoncia-2.jpg"
                            alt="Ortodoncia"
                            width="400"
                            height="300"
                            className="object-cover object-center w-full h-full"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div className="glide__slide">
                        <picture>
                          <img
                            src="../especialitats/ortodoncia-3.jpg"
                            data-src="../especialitats/ortodoncia-3.jpg"
                            alt="Ortodoncia"
                            width="400"
                            height="300"
                            className="object-cover object-center w-full h-full"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div className="glide__slide">
                        <picture>
                          <img
                            src="../especialitats/ortodoncia-4.jpg"
                            data-src="../especialitats/ortodoncia-4.jpg"
                            alt="Ortodoncia"
                            width="400"
                            height="300"
                            className="object-cover object-center w-full h-full"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div className="glide__slide">
                        <picture>
                          <img
                            src="../especialitats/ortodoncia-5.jpg"
                            data-src="../especialitats/ortodoncia-5.jpg"
                            alt="Ortodoncia"
                            width="400"
                            height="300"
                            className="object-cover object-center w-full h-full"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="glide__bullets" data-glide-el="controls[nav]">
                    <button
                      className="glide__bullet"
                      data-glide-dir="=0"
                    ></button>
                    <button
                      className="glide__bullet"
                      data-glide-dir="=1"
                    ></button>
                    <button
                      className="glide__bullet"
                      data-glide-dir="=2"
                    ></button>
                  </div>
                </div>

                <div className="lg:-ml-24 py-8">
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
