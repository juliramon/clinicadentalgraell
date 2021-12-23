import Head from "next/head";
import NavigationBar from "../components/navigation/NavigationBar";
import GlobalTexts from "../utils/globals.json";
import HomeTexts from "../utils/home.json";
import CommonTexts from "../utils/commons.json";
import ContacteTexts from "../utils/contacte.json";
import Footer from "../components/Footer";
import CitaPrevia from "../components/CitaPrevia";

const Contacte = () => {
  return (
    <>
      <Head>
        <title>Contacte - {GlobalTexts.brand}</title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <section className="relative overflow-hidden pt-28">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-5/12 h-96 relative z-20">
              <picture>
                <source srcset="../branding/equip-clinica-dentall-graell-cover.jpg" />
                <img
                  src="../branding/equip-clinica-dentall-graell-cover.jpg"
                  data-src="../branding/equip-clinica-dentall-graell-cover.jpg"
                  alt=""
                  width="400"
                  height="300"
                  className="object-cover object-center w-full h-full"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full md:w-2/3 mt-4 mb-8">
                <h1 className="text-4xl mt-4 mb-7 leading-snug relative z-20">
                  {ContacteTexts.title}
                </h1>
                <div className="pl-16 relative">
                  <span className="absolute left-6 -top-20 bg-primary-100 h-full p-24 w-full bg-opacity-20"></span>
                  <span className="relative z-20">
                    {ContacteTexts.subtitle}
                  </span>
                  <div className="flex items-start justify-between">
                    <ul className="relative z-20 mt-5 w-full md:w-1/2 pr-10 mr-10 border-r border-primary-100">
                      <span className="block mb-2">
                        {ContacteTexts.contactans}
                      </span>
                      <li>
                        <span className="font-bold mr-2">Telèfon:</span>{" "}
                        <a href={GlobalTexts.phone} title="">
                          {GlobalTexts.phone}
                        </a>
                      </li>
                      <li>
                        <span className="font-bold mr-2">Whatsapp:</span>{" "}
                        <a
                          href={`https://wa.me/+34${GlobalTexts.whatsapp}`}
                          title={GlobalTexts.whatsapp}
                        >
                          {GlobalTexts.whatsapp}
                        </a>
                      </li>
                    </ul>
                    <ul className="relative z-20 mt-5 w-full md:w-1/2">
                      <span className="block mb-2">
                        {ContacteTexts.visitans}
                      </span>
                      <li>
                        {GlobalTexts.address}, {GlobalTexts.zipCode},{" "}
                        {GlobalTexts.city}, {GlobalTexts.province}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 md:py-24">
          <div className="container mx-auto"></div>
        </section>
        <CitaPrevia />
      </main>
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default Contacte;
