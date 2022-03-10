import React, { useEffect, useState } from "react";
import Link from "next/link";
const NavigationBar = ({ GlobalTexts, CommonTexts }) => {
  const [menuState, setMenuState] = useState({
    isOpen: false,
  });
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
      <div className="lg:container w-full flex items-center justify-between">
        <div className="">
          <Link href="/">
            <a>
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
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() =>
              setMenuState({ ...menuState, isOpen: !menuState.isOpen })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#004f80"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
        <div
          className={`nav__right relative ${menuState.isOpen ? "active" : ""}`}
        >
          <button
            onClick={() =>
              setMenuState({ ...menuState, isOpen: !menuState.isOpen })
            }
            className="lg:hidden absolute top-5 right-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#004f80"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <ul className="list-none flex flex-wrap items-center">
            <li className="dropdown">
              <span>Especialitats</span>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    href="/especialitats/ortodoncia-conservadora"
                    title="Ortodòncia conservadora"
                  >
                    <a>Ortodòncia conservadora</a>
                  </Link>
                </li>
                <li>
                  <Link href="/especialitats/endodoncia" title="Endodòncia">
                    <a>Endodòncia</a>
                  </Link>
                </li>
                <li>
                  <Link href="/especialitats/periodoncia" title="Periodòncia">
                    <a>Periodòncia</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/especialitats/odontopediatria"
                    title="Odontopediatria"
                  >
                    <a>Odontopediatria</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/especialitats/cirurgia-oral"
                    title="Cirurgia oral"
                  >
                    <a>Cirurgia oral</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/especialitats/protesis-dental"
                    title="Pròtesis dental"
                  >
                    <a>Pròtesis dental</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/especialitats/estetica-dental"
                    title="Estètica dental"
                  >
                    <a>Estètica dental</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/especialitats/implants-dentals"
                    title="Implants dentals"
                  >
                    <a>Implants dentals</a>
                  </Link>
                </li>
                <li>
                  <Link href="/especialitats/ortodoncia" title="Ortodòncia">
                    <a>Ortodòncia</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/especialitats/radiologia-digital"
                    title="Radiologia digital"
                  >
                    <a>Radiologia digital</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/equip" title="Equip">
                <a>Equip</a>
              </Link>
            </li>
            <li>
              <Link href="/clínica" title="Clínica">
                <a>Clínica</a>
              </Link>
            </li>
            <li className="mt-10 lg:mt-0 lg:ml-5 contact">
              <a
                href="telf:+973351860"
                title="Truca'ns"
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
                  <span className="font-bold text-xs uppercase">
                    Truca&apos;ns
                  </span>
                  <span>{GlobalTexts.phone}</span>
                </div>
              </a>
            </li>
            <li>
              <Link href="/contacte" title={CommonTexts.demanaCita}>
                <a className="button button-primary button-small flex justify-center">
                  {CommonTexts.demanaCita}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
