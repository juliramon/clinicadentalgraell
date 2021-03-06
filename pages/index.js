import Head from "next/head";
import NavigationBar from "../components/navigation/NavigationBar";
import specialities from "../utils/specialities.json";
import SpecialityBox from "../components/SpecialityBox";
import HomeTexts from "../utils/home.json";
import GlobalTexts from "../utils/globals.json";
import CommonTexts from "../utils/commons.json";
import Footer from "../components/Footer";
import CitaPrevia from "../components/CitaPrevia";
import Link from "next/link";
import Reviews from "../utils/reviews.json";
import ReviewBox from "../components/ReviewBox";
import Glide from "@glidejs/glide";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const reviewsSlider = document.querySelector(".js-reviews-slider");
    if (reviewsSlider) {
      new Glide(".js-reviews-slider", {
        type: "carousel",
        startAt: 0,
        perView: 3,
        gap: 20,
        autoplay: 4000,
        animationDuration: 3000,
        breakpoints: {
          600: {
            perView: 1,
          },
          800: {
            perView: 2,
          },
          1200: {
            perView: 3,
          },
        },
      }).mount();
    }
  }, []);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Clínica Dental a la Seu d&apos;Urgell - {GlobalTexts.brand}
        </title>
        <meta
          name="description"
          content="Clinica Dental Graell, la teva clínica dental a la Seu d'Urgell. Una moderna clínica dental a la Seu d'Urgell on combinem un servei integral d'odontologia avançada amb les últimes tecnologies"
        />
        <link rel="canonical" href="https://clinicadentalgraell.com" />
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
          content="Clínica Dental a la Seu d'Urgell  - {GlobalTexts.brand}"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Clinica Dental Graell, la teva clínica dental a la Seu d'Urgell. Una moderna clínica dental a la Seu d'Urgell on combinem un servei integral d'odontologia avançada amb les últimes tecnologies"
        />
        <meta property="og:image" content="../share.jpg" />
        <meta property="og:url" content="https://clinicadentalgraell.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@clinicadentalgraell" />
        <meta name="twitter:creator" content="@clinicadentalgraell" />
        <meta property="article:publisher" content="Clinica Dental Graell" />
        <meta
          name="twitter:title"
          content="Clínica Dental a la Seu d'Urgell  - {GlobalTexts.brand}"
        />
        <meta
          name="twitter:description"
          content="Clinica Dental Graell, la teva clínica dental a la Seu d'Urgell. Una moderna clínica dental a la Seu d'Urgell on combinem un servei integral d'odontologia avançada amb les últimes tecnologies"
        />
        <meta name="twitter:image" content="../share.jpg" />
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <section className="relative flex flex-wrap items-center pt-10 md:py-36 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <span className="absolute top-p left-0 w-full h-full bg-primary-100 bg-opacity-40 z-10"></span>
            <picture>
              <source srcet="../home-cover.jpg" />
              <img
                src="../home-cover.jpg"
                data-src="../home-cover.jpg"
                alt="Clínica Dental a la Seu d'Urgell"
                className="object-cover w-full h-full opacity-10"
                width="400"
                height="300"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="container lg:pr-9 relative z-20">
            <div className="flex flex-wrap justify-start">
              <div className="w-full lg:w-7/12 pt-2 lg:pt-24">
                <div className="w-full lg:w-10/12">
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
                  <h1 className="mt-4 mb-8 w-full 2xl:w-9/12">
                    {HomeTexts.title}
                  </h1>
                  <p className="leading-8">{HomeTexts.subtitle}</p>
                  <div className="flex flex-start items-center mt-8">
                    <Link href="/equip">
                      <a
                        title={"Equip"}
                        className="button button-light mr-5 w-full lg:w-auto text-center flex justify-center"
                      >
                        {"Equip"}
                      </a>
                    </Link>
                    <Link href="/contacte">
                      <a
                        title={CommonTexts.demanaCita}
                        className="button button-primary w-full lg:w-auto text-center flex justify-center"
                      >
                        {CommonTexts.demanaCita}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 lg:absolute inset-y-0 right-0 lg:h-full pt-12 lg:pt-32 relative z-20">
            <div className="aspect-w-1 aspect-h-1">
              <picture>
                <source srcSet="../home-cover.jpg" />
                <img
                  src="../home-cover.jpg"
                  datasrc="../home-cover.jpg"
                  alt="Clínica Dental a la Seu d'Urgell - Clínica Dental Graell"
                  className="object-cover w-full h-full rounded-tl-md"
                  width="400"
                  height="300"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="relative py-12 md:py-20">
          <div className="container">
            <div className="border-b border-primary-100 pb-12">
              <h2 className="uppercase flex items-center text-sm text-primary-200 font-bold tracking-widest span-cover">
                Especialitats
              </h2>
              <div className="flex flex-wrap w-full -mx-4 lg:-mx-8 mt-8">
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

        <section className="relative pb-12 md:pb-20 md:pt-8">
          <div className="container flex flex-wrap justify-between">
            <div className="w-full lg:w-1/2 md:py-8">
              <div className="w-full lg:w-9/12">
                <h2 className="mb-5">{HomeTexts.equip_title}</h2>
              </div>
              <div className="w-full lg:w-9/12">
                <p className="mt-8">{HomeTexts.equip_text}</p>
                <div className="mt-12">
                  <Link href="/equip">
                    <a
                      title={CommonTexts.llegirmes}
                      className="button button-primary w-full lg:w-auto flex justify-center lg:inline-flex"
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
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
              <div className="aspect-w-12 aspect-h-9 relative">
                <span className="absolute left-6 -top-6 bg-primary-100 h-full p-24 w-full bg-opacity-20 rounded-md"></span>
                <picture>
                  <img
                    src="../home-intro.jpg"
                    datasrc="../home-intro.jpg"
                    alt={HomeTexts.equip_title}
                    className="object-cover w-full h-full rounded-md"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 md:pb-20">
          <div className="container">
            <div className="w-full">
              <h2 className="mb-12 text-center">
                Què diuen els nostres clients
              </h2>
            </div>
            <div className="glide js-reviews-slider">
              <div className="glide__track" data-glide-el="track">
                <div className="glide__slides">
                  {Reviews.map((review, idx) => {
                    return (
                      <ReviewBox
                        key={idx}
                        name={review.name}
                        photo={review.photo}
                        description={review.description}
                        rating={review.rating}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 md:pb-20">
          <div className="container">
            <div className="bg-primary-100 bg-opacity-20 py-6 lg:py-16 px-6 lg:p-32 flex flex-wrap items-center justify-between rounded-md">
              <div className="w-full lg:w-1/3">
                <div className="aspect-w-1 aspect-h-1">
                  <picture>
                    <source srcSet="../branding/clinica-dental-graell-cover-bg.jpg" />
                    <img
                      src="../branding/clinica-dental-graell-cover-bg.jpg"
                      datasrc="../branding/clinica-dental-graell-cover-bg.jpg"
                      alt={GlobalTexts.brand}
                      className="object-cover w-full h-full rounded-md"
                      width="400"
                      height="300"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <blockquote>{HomeTexts.blockquote_text}</blockquote>
                <div className="w-full flex flex-col mt-5">
                  <span className="font-bold">Dra. M. Teresa Graell</span>
                  <span>N. Col. 5967</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CitaPrevia />
      </main>
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default Home;
