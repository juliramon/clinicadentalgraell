import React, { useEffect, useState } from "react";

const NavigationBar = ({ GlobalTexts, CommonTexts }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(
    () =>
      window.addEventListener("scroll", () => {
        if (window.scrollY > 24) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }),
    []
  );
  const blurredNav = {
    background: "rgba(255, 255, 255, 0.6",
    backdropFilter: "blur(18px)",
    transition: "ease-in-out .3s",
  };
  const solidNav = {
    background: "transparent",
    transition: "ease-in-out .3s",
  };

  return (
    <nav
      className="py-6 px-4 fixed w-full z-50"
      style={scrolled === true ? blurredNav : solidNav}
    >
      <div className="container mx-auto w-full flex items-center justify-between">
        <div className="">
          <a href="/">
            <picture>
              <source srcSet="../branding/logo-clinica-dental-graell-seu-urgell.svg" />
              <img
                src="../branding/logo-clinica-dental-graell-seu-urgell.svg"
                data-src="../branding/logo-clinica-dental-graell-seu-urgell.svg"
                alt="Clínica Dental Graell"
                width="157"
                height="54"
              />
            </picture>
          </a>
        </div>
        <div>
          <ul className="list-none flex flex-wrap items-center">
            <li>
              <a href="/especialitats" title="Especialitats">
                Especialitats
              </a>
            </li>
            <li>
              <a href="/equip" title="Equip">
                Equip
              </a>
            </li>
            <li>
              <a href="/clínica" title="Clínica">
                Clínica
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none flex flex-wrap items-center">
            <li className="ml-5 contact">
              <a
                href="telf:+34972000000"
                title="Trauca'ns"
                className="flex items-center flex-wrap no-detail"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-phone-call mr-3"
                  width="30"
                  height="30"
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
                <div className="flex flex-col">
                  <span className="font-bold text-xs uppercase">Truca'ns</span>
                  <span>{GlobalTexts.phone}</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/contacte"
                title={CommonTexts.demanaCita}
                className="button button-primary button-small"
              >
                {CommonTexts.demanaCita}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
