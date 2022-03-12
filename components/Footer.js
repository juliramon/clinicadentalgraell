import React from "react";
import Link from "next/link";

const Footer = ({ GlobalTexts, HomeTexts }) => {
  const horariList = Object.keys(GlobalTexts.horari).map((horari, idx) => (
    <li key={idx}>
      <span className="capitalize font-bold">{horari}:</span>
      <span className="inline-block ml-2">{GlobalTexts.horari[horari]}</span>
    </li>
  ));
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary-100 bg-opacity-20 py-12 md:pt-24">
      <div className="container border-b border-primary-100 pb-12">
        <div className="flex flex-wrap flex-start justify-between -mx-12">
          <div className="w-full md:w-1/4 px-12">
            <picture>
              <source srcSet="../branding/logo-clinica-dental-graell-seu-urgell.svg" />
              <img
                src="../branding/logo-clinica-dental-graell-seu-urgell.svg"
                data-src="../branding/logo-clinica-dental-graell-seu-urgell.svg"
                alt="Clínica Dental Graell"
                width="157"
                height="54"
                className="mb-8"
              />
            </picture>
            <h3 className="mb-2">{GlobalTexts.brand}</h3>
            <p>{HomeTexts.title}</p>
          </div>
          <div className="w-full md:w-1/4 px-12">
            <h3>Horari</h3>
            <ul className="list-none">{horariList}</ul>
          </div>
          <div className="w-full md:w-1/4 px-12">
            <h3>Contacte</h3>
            <ul className="list-none">
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-map-pin mr-3 relative top-1"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#082b3d"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="11" r="3" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                <span>
                  {GlobalTexts.address} {GlobalTexts.zipCode},{" "}
                  {GlobalTexts.city}, {GlobalTexts.province}
                </span>
              </li>
              <li>
                <a
                  href={`telf:${GlobalTexts.phone}`}
                  title={GlobalTexts.phone}
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-call mr-3"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#082b3d"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                  {GlobalTexts.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${GlobalTexts.email}`}
                  title={GlobalTexts.email}
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail mr-3"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#082b3d"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                  {GlobalTexts.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-12">
            <h3>Troba&apos;ns a</h3>
            <ul className="none">
              <li>
                <a
                  href={GlobalTexts.social.facebook}
                  title="Facebook"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={GlobalTexts.social.instagram}
                  title="Instagram"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={GlobalTexts.social.google}
                  title="Google"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  Google
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container pt-12">
        <div className="flex flex-wrap flex-start justify-between">
          <ul className="list-none">
            <li className="text-xs">
              © {GlobalTexts.brand} {currentYear}. Tots els drets reservats.
            </li>
          </ul>
          <ul className="list-none flex items-center">
            <li className="mr-5 text-xs">
              <Link href="/avis-legal" title="Avís legal">
                <a>Avís legal</a>
              </Link>
            </li>
            <li className="mr-5 text-xs">
              <Link href="/politica-privacitat" title="Política de privacitat">
                <a>Política de privacitat</a>
              </Link>
            </li>
            <li className="text-xs">
              <Link href="/politica-de-cookies" title="Política de cookies">
                <a>Política de cookies</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
