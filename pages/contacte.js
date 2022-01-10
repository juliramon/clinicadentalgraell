import Head from "next/head";
import NavigationBar from "../components/navigation/NavigationBar";
import GlobalTexts from "../utils/globals.json";
import HomeTexts from "../utils/home.json";
import CommonTexts from "../utils/commons.json";
import ContacteTexts from "../utils/contacte.json";
import Footer from "../components/Footer";
import LegalTexts from "../utils/legal.json";
import { useState } from "react";

const Contacte = () => {
  const initalState = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };
  const [state, setState] = useState(initalState);
  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });
  const handleSubmit = () => {};
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5896.713122269372!2d1.452031228105912!3d42.3562398450501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a5edc5966ee27b%3A0xdaffd93e0fd19eed!2s25700%20La%20Seu%20d&#39;Urgell%2C%20L%C3%A9rida!5e0!3m2!1ses!2ses!4v1641844428211!5m2!1ses!2ses"
                style={{ border: "0" }}
                allowfullscreen=""
                className="w-full h-full"
                loading="lazy"
              ></iframe>
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
                      <li className="ml-6">
                        <span className="font-bold mr-2">Telèfon:</span>{" "}
                        <a href={GlobalTexts.phone} title="">
                          {GlobalTexts.phone}
                        </a>
                      </li>
                      <li className="ml-6">
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
                      <li className="ml-6">
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
        <section className="py-10 md:py-20 mt-8 relative">
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
          <div className="container mx-auto relative z-10">
            <div className="w-full md:w-2/4 mx-auto bg-secondary-100 py-8 px-10">
              <h2 className="text-xl flex items-center span-cover m-0 mb-5">
                {CommonTexts.demanaCita}
              </h2>
              <form onSubmit={() => handleSubmit}>
                <fieldset className="form-group">
                  <label for="name">Nom</label>
                  <input
                    type="text"
                    placeholder="Nom"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={state.name}
                    required
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label for="phone">Telèfon</label>
                  <input
                    type="phone"
                    placeholder="Telèfon"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    value={state.phone}
                    required
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label for="email">E-mail</label>
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={state.email}
                    required
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label for="message">Comentaris</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    onChange={handleChange}
                    value={state.message}
                    required
                  >
                    Comentaris
                  </textarea>
                </fieldset>
                <button
                  type="submit"
                  className="button button-primary button-small"
                >
                  Enviar
                </button>
                <fieldset className="mt-6">
                  <span className="text-xs block leading-4 text-secondary-700">
                    {LegalTexts.legalForm}
                  </span>
                </fieldset>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default Contacte;
