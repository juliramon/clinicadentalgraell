import React from "react";
import Fade from "react-reveal/Fade";
import GlobalTexts from "../utils/globals.json";
import CommonTexts from "../utils/commons.json";

const CitaPrevia = () => {
  return (
    <Fade bottom cascade>
      <section className="relative py-12 md:py-20 bg-primary-300">
        <div className="container mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2">
            <span className="text-secondary-100 uppercase font-semibold">
              {GlobalTexts.brand}
            </span>
            <h2 className="text-secondary-100 mt-5">
              {CommonTexts.citaprevia}
            </h2>
            <div className="mt-8">
              <a
                href="/contacte"
                title={CommonTexts.contacte}
                className="button button-light"
              >
                {CommonTexts.contacte}
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 relative h-72 -mb-20">
            <div className="absolute bottom-0 left-0 ">
              <picture>
                <source srcSet="../branding/dentist-dental-smile-girl-face-person-female-woman-transparent-png-163653.png" />
                <img
                  src="../branding/dentist-dental-smile-girl-face-person-female-woman-transparent-png-163653.png"
                  datasrc="../branding/dentist-dental-smile-girl-face-person-female-woman-transparent-png-163653.png"
                  alt={CommonTexts.citaprevia}
                  className="object-cover w-full h-96"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default CitaPrevia;
