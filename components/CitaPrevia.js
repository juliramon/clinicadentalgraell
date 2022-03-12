import GlobalTexts from "../utils/globals.json";
import CommonTexts from "../utils/commons.json";
import Link from "next/link";

const CitaPrevia = () => {
  return (
    <section className="relative pt-12 md:py-20 bg-primary-400 overflow-hidden">
      <div className="container flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2">
          <span className="text-secondary-100 uppercase font-semibold">
            {GlobalTexts.brand}
          </span>
          <h2 className="text-secondary-100 mt-5">{CommonTexts.citaprevia}</h2>
          <div className="mt-8">
            <Link href="/contacte">
              <a
                title={CommonTexts.demanaCita}
                className="button button-light w-full lg:w-auto flex justify-center"
              >
                {CommonTexts.demanaCita}
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 relative mt-10 lg:h-72 lg:-mb-20">
          <div className="lg:absolute lg:bottom-0 lg:left-0 -mx-8 ">
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
  );
};

export default CitaPrevia;
