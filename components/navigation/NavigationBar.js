import React from "react";

const NavigationBar = () => {
  return (
    <nav className="py-6 px-4">
      <div className="container mx-auto w-full flex items-center justify-between">
        <div className="">
          <a href="/">
            <picture>
              <source srcset="../branding/logo-clinica-dental-graell-seu-urgell.svg" />
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
            <li className="ml-5">
              <a
                href="telf:+34972000000"
                title="Trauca'ns"
                className="flex flex-wrap flex-col"
              >
                <span className="font-bold text-xs uppercase">Truca'ns</span>
                972000000
              </a>
            </li>
            <li className="ml-5">
              <a
                href="/contacte"
                title="Contacte"
                className="button button-primary"
              >
                Contacte
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
