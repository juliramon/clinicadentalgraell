import Head from "next/head";
import NavigationBar from "../components/navigation/NavigationBar";
import GlobalTexts from "../utils/globals.json";
import HomeTexts from "../utils/home.json";
import CommonTexts from "../utils/commons.json";
import ContacteTexts from "../utils/contacte.json";
import Footer from "../components/Footer";
import LegalTexts from "../utils/legal.json";

const PoliticaCookies = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Política de Cookies - Clínica Dental Graell</title>
        <meta
          name="description"
          content="Política de Cookies de la Clínica Dental Graell"
        />
        <link
          rel="canonical"
          href="https://clinicadentalgraell.com/politica-de-cookies"
        />
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
          content="Política de Cookies  - Clínica Dental Graell"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Política de Cookies de la Clínica Dental Graell"
        />
        <meta property="og:image" content="../share.jpg" />
        <meta property="og:url" content="https://clinicadentalgraell.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@clinicadentalgraell" />
        <meta name="twitter:creator" content="@clinicadentalgraell" />
        <meta property="article:publisher" content="Clinica Dental Graell" />
        <meta
          name="twitter:title"
          content="Política de Cookies  - Clínica Dental Graell"
        />
        <meta
          name="twitter:description"
          content="Política de Cookies de la Clínica Dental Graell"
        />
        <meta name="twitter:image" content="../share.jpg" />
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main className="legal">
        <section className="relative overflow-hidden pt-16 lg:pt-36">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2">
              <div className="px-6 w-full md:w-2/3 mt-10 lg:mt-4 mb-8">
                <ul className="breadcrumb list-none flex items-center">
                  <li>
                    <span>Inici</span>
                  </li>
                  <li>
                    <span>Política de Cookies</span>
                  </li>
                </ul>
                <h1 className="text-4xl mt-4 mb-7 leading-snug relative z-20">
                  Política de Cookies
                </h1>
                <div className="pl-16 relative">
                  <span className="absolute left-6 -top-28 bg-primary-100 h-full p-24 w-full bg-opacity-20"></span>
                  <span className="relative z-20">
                    Darrera actualització: 10 de gener, 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 md:pt-14 md:pb-20 relative">
          <div className="container relative z-10">
            <div className="w-full md:w-1/2 mt-4 mb-8 mx-auto">
              <p>
                Les cookies i altres tecnologies similars com ara local shared
                objects, flash cookies o píxels, són eines emprades pels
                servidors Web per emmagatzemar i recuperar informació sobre els
                seus visitants, així com per oferir un correcte funcionament del
                lloc.
              </p>
              <p>
                Mitjançant l&apos;ús d&apos;aquests dispositius es permet al
                servidor Web recordar algunes dades referents a l&apos;usuari,
                com les seves preferències per a la visualització de les pàgines
                d&apos;aquest servidor, nom i contrasenya, productes que més li
                interessen, etc.
              </p>
              <h2>COOKIES AFECTADES PER LA NORMATIVA I COOKIES EXCEPTUADES</h2>
              <p>
                D&apos;acord amb la Llei 34/2002, de 11 de juliol, de serveis de
                la societat de la informació i de comerç electrònic (LSSI), en
                relació amb el Reglament (UE) 2016/679 de el Parlament Europeu i
                de Consell, de 27 de abril de 2016, General de Protecció de
                Dades (GDPR) i la Llei Orgànica 3/2018, de 5 de desembre, de
                Protecció de Dades i Garantia dels Drets Digitals (LOPDGDD), és
                obligat obtenir el consentiment exprés de l&apos;usuari de totes
                les pàgines web que fan servir cookies prescindibles, abans que
                aquest navegui per elles.
              </p>
              <p>
                Segons la directiva de la UE, les cookies que requereixen el
                consentiment informat per part de l&apos;usuari són les cookies
                analítiques i les de publicitat i afiliació, i queden
                exceptuades les de caràcter tècnic i les necessàries per al
                funcionament del lloc web o la prestació de serveis expressament
                sol·licitats per l&apos;usuari.
              </p>
              <h2>TIPUS DE COOKIES</h2>
              <h3>SEGONS LA FINALITAT </h3>
              <ul>
                <li>
                  <b>Cookies tècniques i funcionals:</b> són les que permeten a
                  l&apos;usuari navegar a través d&apos;una pàgina web,
                  plataforma o aplicació i utilitzar les diferents opcions o
                  serveis que hi hagi.{" "}
                </li>
                <li>
                  <b>Cookies d&apos;anàlisi:</b> són les que permeten al
                  responsable d&apos;aquestes monitoritzar i analitzar el
                  comportament dels usuaris dels llocs web als quals estan
                  vinculats. La informació recollida mitjançant aquest tipus de
                  cookies s&apos;utilitza en el mesurament de l&apos;activitat
                  dels llocs web, aplicació o plataforma i per elaborar perfils
                  de navegació dels usuaris d&apos;aquests llocs, aplicacions i
                  plataformes, per tal d&apos;introduir millores en funció de
                  l&apos;anàlisi de les dades d&apos;ús que fan els usuaris del
                  servei.
                </li>
              </ul>
              <h3>SEGONS LA PROPIETAT </h3>
              <ul>
                <li>
                  <b>Cookies pròpies:</b> són les que s&apos;envien a
                  l&apos;equip terminal de l&apos;usuari des d&apos;un equip o
                  domini gestionat pel propi editor i des del qual es
                  proporciona el servei sol·licitat per l&apos;usuari.
                </li>
                <li>
                  <b>Cookies de tercers:</b> són les que s&apos;envien a
                  l&apos;equip terminal de l&apos;usuari des d&apos;un equip o
                  domini que no és gestionat per l&apos;editor, sinó per una
                  altra entitat que tracta les dades obtingudes mitjançant les
                  cookies.
                </li>
              </ul>
              <h3>SEGONS EL TERMINI DE CONSERVACIÓ</h3>
              <ul>
                <li>
                  <b>Cookies de sessió:</b> són un tipus de cookies dissenyades
                  per obtenir i emmagatzemar dades mentre l&apos;usuari accedeix
                  a una pàgina web.{" "}
                </li>
                <li>
                  <b>Cookies persistents:</b> són un tipus de cookies en què les
                  dades segueixen emmagatzemades en el terminal i poden ser
                  accedides i tractades durant un període definit pel
                  responsable de la cookie, i que durar des d&apos;uns minuts a
                  diversos anys.
                </li>
              </ul>
              <h2>TRACTAMENT DE DADES PERSONALS</h2>
              <p>
                Maria Teresa Graell Bigatà és el responsable del tractament de
                les dades personals de l&apos;Interessat i l&apos;informa que
                aquestes dades es tractaran de conformitat amb el que estableix
                el Reglament (UE) 2016/679, de 27 d&apos;abril de 2016 (GDPR),
                per la qual cosa se li facilita la següent informació del
                tractament:
              </p>
              <p>
                <b>Finalitats del tractament:</b> segons s&apos;especifica en
                l&apos;apartat de cookies que s&apos;utilitzen en aquest lloc
                web.
              </p>
              <p>
                <b>Legitimació del tractament:</b> per consentiment de
                l&apos;interessat (art. 6.1 GDPR).
              </p>
              <p>
                <b>Criteris de conservació de les dades:</b> segons
                s&apos;especifica en l&apos;apartat de cookies utilitzades al
                web.
              </p>
              <p>
                <b>Comunicació de les dades:</b> no es comunicaran les dades a
                tercers, excepte en cookies propietat de tercers o per obligació
                legal.
              </p>
              <p>
                <b>Drets que té l&apos;Interessat:</b>
              </p>
              <ul>
                <li>Dret a retirar el consentiment en qualsevol moment.</li>
                <li>
                  Dret d&apos;accés, rectificació, portabilitat i supressió de
                  les seves dades i a la limitació o oposició al seu tractament.
                </li>
                <li>
                  Dret a presentar una reclamació davant l&apos;Autoritat de
                  control (www.aepd.es) si considera que el tractament no
                  s&apos;ajusta a la normativa vigent.
                </li>
              </ul>
              <p>
                <b>Dades de contacte per exercir els seus drets:</b>
              </p>
              <p>
                Maria Teresa Graell Bigatà. C/ Bisbe Iglesias Navarri nº 15,
                baixos.
                <br /> 25700 La Seu d&apos;Urgell (Lleida)
                <br /> E-mail: contacte@clinicadentalgraell.com
              </p>
              <h2>COOKIES UTILITZADES EN AQUEST LLOC WEB</h2>
              <div className="w-full border border-b-0 py-2 px-4 mt-5">
                <p className="uppercase text-lg font-bold my-0">
                  Panell de configuració
                </p>
              </div>
              <div className="w-full border border-b-0 py-2 px-4">
                <p className="uppercase text-base font-bold my-0">
                  Cookies analítiques
                </p>
                <span className="text-sm">
                  Canviar la selecció segons si es desitja acceptar o rebutjar
                  la instal·lació d&apos;aquestes cookies
                </span>
              </div>
              <div className="cookies-table overflow-x-scroll">
                <div className="table w-full">
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-xs font-bold uppercase text-left border border-b-0 border-r-0 py-2 px-4">
                        Nom
                      </div>
                      <div className="table-cell text-xs font-bold uppercase text-left border border-b-0 border-r-0 py-2 px-4">
                        Tipus
                      </div>
                      <div className="table-cell text-xs font-bold uppercase text-left border border-b-0 border-r-0 py-2 px-4">
                        Propietat
                      </div>
                      <div className="table-cell text-xs font-bold uppercase text-left border border-b-0 border-r-0 py-2 px-4">
                        Finalitat
                      </div>
                      <div className="table-cell text-xs font-bold uppercase text-left border border-b-0 border-r-0 py-2 px-4">
                        Termini
                      </div>
                      <div className="table-cell text-xs font-bold uppercase text-left border border-b-0 py-2 px-4">
                        Observacions
                      </div>
                    </div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        _utma
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Analítica
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Google Analytics
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Registra la data de la primera i última vegada que
                        l&apos;usuari va visitar el lloc web
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        2 anys
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 py-2 px-4">
                        Persistent
                      </div>
                    </div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        _utma
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Analítica
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Google Analytics
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Registra l&apos;hora d&apos;arribada a la pàgina web
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        30 minuts
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 py-2 px-4">
                        Sessió
                      </div>
                    </div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        _utma
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Analítica
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Google Analytics
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        S&apos;utilitza per a la interoperabilitat amb el codi
                        de seguiment urchin.js
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        1 any
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 py-2 px-4">
                        Sessió
                      </div>
                    </div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        _utma
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Analítica
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Google Analytics
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Processa el tipus de sol·licitud demanada per
                        l&apos;usuari
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        En finalitzar la sessió
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 py-2 px-4">
                        Sessió
                      </div>
                    </div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        _utma
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Analítica
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Google Analytics
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        Segmenta dades demogràfiques
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 border-r-0 py-2 px-4">
                        En finalitzar la sessió
                      </div>
                      <div className="table-cell text-sm text-left border border-b-0 py-2 px-4">
                        Sessió
                      </div>
                    </div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-sm text-left border border-r-0 py-2 px-4">
                        _utma
                      </div>
                      <div className="table-cell text-sm text-left border border-r-0 py-2 px-4">
                        Analítica
                      </div>
                      <div className="table-cell text-sm text-left border border-r-0 py-2 px-4">
                        Google Analytics
                      </div>
                      <div className="table-cell text-sm text-left border border-r-0 py-2 px-4">
                        Emmagatzema la font de trànsit o una campanya per
                        explicar com l&apos;usuari va arribar al lloc web
                      </div>
                      <div className="table-cell text-sm text-left border border-r-0 py-2 px-4">
                        6 mesos
                      </div>
                      <div className="table-cell text-sm text-left border  py-2 px-4">
                        Persistent
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-5">
                Obtenir més informació per desactivar les cookies de Google
                Analytics:
              </p>
              <ul>
                <li>
                  <a
                    href="https://policies.google.com/technologies/cookies#managing-cookies"
                    title="Política de privacitat de Google"
                    rel="nofollow noreferrer"
                    target="_blank"
                    className="font-bold underline"
                  >
                    Política de privacitat de Google
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/analytics/answer/181881?hl=es"
                    title="Exclusió de Google Analytics"
                    rel="nofollow noreferrer"
                    target="_blank"
                    className="font-bold underline"
                  >
                    Exclusió de Google Analytics
                  </a>
                </li>
              </ul>
              <div className="w-full border border-b-0 py-2 px-4 mt-5">
                <p className="uppercase text-lg font-bold my-0">
                  Com eliminar les cookies dels navegadors més comuns
                </p>
              </div>
              <div className="browser-cookies-table">
                <div className="table w-full">
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-xs font-bold uppercase text-left border border-b-0 border-r-0 py-2 px-4">
                        Chrome
                      </div>
                      <div className="table-cell text-xs text-left underline border border-b-0 py-2 px-4">
                        <a
                          href="http://support.google.com/chrome/answer/95647?hl=es"
                          title="http://support.google.com/chrome/answer/95647?hl=es"
                          rel="nofollow noreferrer"
                          target="_blank"
                        >
                          http://support.google.com/chrome/answer/95647?hl=es
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-xs font-bold uppercase text-left border border-b-0 border-r-0 py-2 px-4">
                        Edge
                      </div>
                      <div className="table-cell text-xs text-left underline border border-b-0 py-2 px-4">
                        <a
                          href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                          title="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                          rel="nofollow noreferrer"
                          target="_blank"
                        >
                          https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-xs font-bold uppercase text-left border border-b-0 border-r-0 py-2 px-4">
                        explorer
                      </div>
                      <div className="table-cell text-xs text-left underline border border-b-0 py-2 px-4">
                        <a
                          href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer"
                          title="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer"
                          rel="nofollow noreferrer"
                          target="_blank"
                        >
                          https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-xs font-bold uppercase text-left border border-b-0 border-r-0 py-2 px-4">
                        Firefox
                      </div>
                      <div className="table-cell text-xs text-left underline border border-b-0 py-2 px-4">
                        <a
                          href="https://www.mozilla.org/es-ES/privacy/websites/#cookies"
                          title="https://www.mozilla.org/es-ES/privacy/websites/#cookies"
                          rel="nofollow noreferrer"
                          target="_blank"
                        >
                          https://www.mozilla.org/es-ES/privacy/websites/#cookies
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-xs font-bold uppercase text-left border border-b-0 border-r-0 py-2 px-4">
                        Safari
                      </div>
                      <div className="table-cell text-xs text-left underline border border-b-0 py-2 px-4">
                        <a
                          href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                          title="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                          rel="nofollow noreferrer"
                          target="_blank"
                        >
                          https://support.apple.com/es-es/guide/safari/sfri11471/mac
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-row">
                      <div className="table-cell text-xs font-bold uppercase text-left border border-r-0 py-2 px-4">
                        Opera
                      </div>
                      <div className="table-cell text-xs text-left underline border py-2 px-4">
                        <a
                          href="https://help.opera.com/en/latest/security-and-privacy/#clearBrowsingData"
                          title="https://help.opera.com/en/latest/security-and-privacy/#clearBrowsingData"
                          rel="nofollow noreferrer"
                          target="_blank"
                        >
                          https://help.opera.com/en/latest/security-and-privacy/#clearBrowsingData
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default PoliticaCookies;
