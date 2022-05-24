import Head from "next/head";
import NavigationBar from "../components/navigation/NavigationBar";
import GlobalTexts from "../utils/globals.json";
import HomeTexts from "../utils/home.json";
import CommonTexts from "../utils/commons.json";
import ContacteTexts from "../utils/contacte.json";
import Footer from "../components/Footer";
import LegalTexts from "../utils/legal.json";
import { useState } from "react";
import axios from "axios";
import ToastNotification from "../components/ToastNotification";

const Contacte = () => {
  const initalState = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    comment: "",
    serverMessage: "",
  };
  const [state, setState] = useState(initalState);

  const [toastState, setToastState] = useState({
    isVisible: false,
    duration: 0,
  });

  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const validateForm = (e) => {
    e.preventDefault();
    const { name, phone, email, subject, comment } = state;
    if (
      name !== "" &&
      phone !== "" &&
      email !== "" &&
      subject !== "" &&
      comment !== ""
    ) {
      handleSubmit(name, phone, email, subject, comment);
    }
  };

  const handleSubmit = (name, phone, email, subject, comment) => {
    axios
      .post("/api/send-email", {
        name: name,
        phone: phone,
        email: email,
        subject: subject,
        comment: comment,
      })
      .then((res) => {
        if (res.data.status === 200) {
          setState({
            name: "",
            phone: "",
            email: "",
            subject: "",
            comment: "",
            serverMessage: `El teu missatge ha sigut enviat correctament.
              Ens posarem en contacte amb tu el més aviat possible.`,
          });
          setToastState({ ...state, isVisible: true, duration: 5000 });
        }
      })
      .catch((error) => console.log(error));
  };

  const notification = toastState.isVisible ? (
    <ToastNotification message={state.serverMessage} />
  ) : null;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contacte - Clínica Dental Graell</title>
        <meta
          name="description"
          content="Tens dubtes? Necessites assessorament? Contacta'ns!"
        />
        <link rel="canonical" href="https://clinicadentalgraell.com/contacte" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="Clinica Dental Graell" />
        <link rel="icon" href="../favicon.svg" />
        <link rel="mask-icon" href="../favicon.svg" color="#ffffff" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png"></link>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta property="og:title" content="Contacte  - Clínica Dental Graell" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Tens dubtes? Necessites assessorament? Contacta'ns!"
        />
        <meta property="og:image" content="../share.jpg" />
        <meta property="og:url" content="https://clinicadentalgraell.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@clinicadentalgraell" />
        <meta name="twitter:creator" content="@clinicadentalgraell" />
        <meta property="article:publisher" content="Clinica Dental Graell" />
        <meta
          name="twitter:title"
          content="Contacte  - Clínica Dental Graell"
        />
        <meta
          name="twitter:description"
          content="Tens dubtes? Necessites assessorament? Contacta'ns!"
        />
        <meta name="twitter:image" content="../share.jpg" />
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <section className="relative overflow-hidden pt-24 lg:pt-28">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-5/12 hg-60 lg:h-96 relative z-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.474810316639!2d1.4564471158000443!3d42.35371934349393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a5edda35cfa2b5%3A0xeb09ef02be2de0d1!2sCl%C3%ADnica%20Dental%20Graell!5e0!3m2!1sen!2ses!4v1647086789015!5m2!1sen!2ses"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                className="w-full h-full rounded-tr-md rounded-br-md"
                loading="lazy"
              ></iframe>
            </div>
            <div className="w-full md:w-1/2">
              <div className="px-6 w-full md:w-2/3 mt-10 lg:mt-4 mb-8">
                <ul className="breadcrumb list-none flex items-center">
                  <li>
                    <span>Inici</span>
                  </li>
                  <li>
                    <span>Contacte</span>
                  </li>
                </ul>
                <h1 className="text-4xl mt-4 mb-7 leading-snug relative z-20">
                  {ContacteTexts.title}
                </h1>
                <div className="pl-16 relative">
                  <span className="absolute left-6 -top-20 bg-primary-100 h-full p-24 w-full bg-opacity-20 rounded-md"></span>
                  <span className="relative z-20">
                    {ContacteTexts.subtitle}
                  </span>
                  <div className="flex flex-wrap lg:flex-nowrap items-start justify-between">
                    <ul className="relative z-20 mt-5 w-full md:w-1/2 pr-10 mr-10 lg:border-r border-primary-100">
                      <span className="block mb-2">
                        {ContacteTexts.contactans}
                      </span>
                      <li className="ml-6">
                        <span className="font-bold mr-2">Telèfon:</span>{" "}
                        <a
                          href={GlobalTexts.phone}
                          title={`tel:${GlobalTexts.phone}`}
                        >
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
          <div className="container relative z-10">
            <div className="w-full md:w-2/4 mx-auto bg-secondary-100 py-8 px-10 rounded-md">
              <h2 className="text-xl flex items-center span-cover m-0 mb-5">
                {CommonTexts.demanaCita}
              </h2>
              <form method="POST">
                <fieldset className="form-group">
                  <label htmlFor="name">Nom</label>
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
                  <label htmlFor="phone">Telèfon</label>
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
                  <label htmlFor="email">Correu electrònic</label>
                  <input
                    type="email"
                    placeholder="Correu electrònic"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={state.email}
                    required
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="subject">Assumpte</label>
                  <input
                    type="text"
                    placeholder="Assumpte"
                    name="subject"
                    id="subject"
                    onChange={handleChange}
                    value={state.subject}
                    required
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="comment">Comentaris</label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows="5"
                    onChange={handleChange}
                    value={state.comment}
                    required
                  >
                    Comentaris
                  </textarea>
                </fieldset>
                <button
                  type="submit"
                  className="button button-primary button-small"
                  onClick={validateForm}
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
      {notification}
    </>
  );
};

export default Contacte;
