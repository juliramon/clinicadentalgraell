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
        <title>Política de Cookies - {GlobalTexts.brand}</title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main className="legal">
        <section className="relative pt-36">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2">
              <div className="w-full md:w-2/3 mt-4 mb-8">
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
          <div className="container mx-auto relative z-10">
            <div className="w-full md:w-1/2 mt-4 mb-8 mx-auto">
              <p>
                Les cookies i altres tecnologies similars com ara local shared
                objects, flash cookies o píxels, són eines emprades pels
                servidors Web per emmagatzemar i recuperar informació sobre els
                seus visitants, així com per oferir un correcte funcionament del
                lloc.
              </p>
              <p>
                Mitjançant l’ús d’aquests dispositius es permet al servidor Web
                recordar algunes dades referents a l’usuari, com les seves
                preferències per a la visualització de les pàgines d’aquest
                servidor, nom i contrasenya, productes que més li interessen,
                etc.
              </p>
              <h2>COOKIES AFECTADES PER LA NORMATIVA I COOKIES EXCEPTUADES</h2>
              <p>
                D’acord amb la Llei 34/2002, de 11 de juliol, de serveis de la
                societat de la informació i de comerç electrònic (LSSI), en
                relació amb el Reglament (UE) 2016/679 de el Parlament Europeu i
                de Consell, de 27 de abril de 2016, General de Protecció de
                Dades (GDPR) i la Llei Orgànica 3/2018, de 5 de desembre, de
                Protecció de Dades i Garantia dels Drets Digitals (LOPDGDD), és
                obligat obtenir el consentiment exprés de l’usuari de totes les
                pàgines web que fan servir cookies prescindibles, abans que
                aquest navegui per elles.
              </p>
              <p>
                Segons la directiva de la UE, les cookies que requereixen el
                consentiment informat per part de l’usuari són les cookies
                analítiques i les de publicitat i afiliació, i queden
                exceptuades les de caràcter tècnic i les necessàries per al
                funcionament del lloc web o la prestació de serveis expressament
                sol·licitats per l’usuari.
              </p>
              <h2>TIPUS DE COOKIES</h2>
              <h3>SEGONS LA FINALITAT </h3>
              <ul>
                <li>
                  <b>Cookies tècniques i funcionals:</b> són les que permeten a
                  l’usuari navegar a través d’una pàgina web, plataforma o
                  aplicació i utilitzar les diferents opcions o serveis que hi
                  hagi.{" "}
                </li>
                <li>
                  <b>Cookies d’anàlisi:</b> són les que permeten al responsable
                  d’aquestes monitoritzar i analitzar el comportament dels
                  usuaris dels llocs web als quals estan vinculats. La
                  informació recollida mitjançant aquest tipus de cookies
                  s’utilitza en el mesurament de l’activitat dels llocs web,
                  aplicació o plataforma i per elaborar perfils de navegació
                  dels usuaris d’aquests llocs, aplicacions i plataformes, per
                  tal d’introduir millores en funció de l’anàlisi de les dades
                  d’ús que fan els usuaris del servei.
                </li>
              </ul>
              <h3>SEGONS LA PROPIETAT </h3>
              <ul>
                <li>
                  <b>Cookies pròpies:</b> són les que s’envien a l’equip
                  terminal de l’usuari des d’un equip o domini gestionat pel
                  propi editor i des del qual es proporciona el servei
                  sol·licitat per l’usuari.
                </li>
                <li>
                  <b>Cookies de tercers:</b> són les que s’envien a l’equip
                  terminal de l’usuari des d’un equip o domini que no és
                  gestionat per l’editor, sinó per una altra entitat que tracta
                  les dades obtingudes mitjançant les cookies.
                </li>
              </ul>
              <h3>SEGONS EL TERMINI DE CONSERVACIÓ</h3>
              <ul>
                <li>
                  <b>Cookies de sessió:</b> són un tipus de cookies dissenyades
                  per obtenir i emmagatzemar dades mentre l’usuari accedeix a
                  una pàgina web.{" "}
                </li>
                <li>
                  <b>Cookies persistents:</b> són un tipus de cookies en què les
                  dades segueixen emmagatzemades en el terminal i poden ser
                  accedides i tractades durant un període definit pel
                  responsable de la cookie, i que durar des d’uns minuts a
                  diversos anys.
                </li>
              </ul>
              <h2>TRACTAMENT DE DADES PERSONALS</h2>
              <p>
                Maria Teresa Graell Bigatà és el responsable del tractament de
                les dades personals de l’Interessat i l’informa que aquestes
                dades es tractaran de conformitat amb el que estableix el
                Reglament (UE) 2016/679, de 27 d’abril de 2016 (GDPR), per la
                qual cosa se li facilita la següent informació del tractament:
              </p>
              <p>
                <b>Finalitats del tractament:</b> segons s’especifica en
                l’apartat de cookies que s’utilitzen en aquest lloc web.
              </p>
              <p>
                <b>Legitimació del tractament:</b> per consentiment de
                l’interessat (art. 6.1 GDPR).
              </p>
              <p>
                <b>Criteris de conservació de les dades:</b> segons s’especifica
                en l’apartat de cookies utilitzades al web.
              </p>
              <p>
                <b>Comunicació de les dades:</b> no es comunicaran les dades a
                tercers, excepte en cookies propietat de tercers o per obligació
                legal.
              </p>
              <p>
                <b>Drets que té l’Interessat:</b>
              </p>
              <ul>
                <li>Dret a retirar el consentiment en qualsevol moment.</li>
                <li>
                  Dret d’accés, rectificació, portabilitat i supressió de les
                  seves dades i a la limitació o oposició al seu tractament.
                </li>
                <li>
                  Dret a presentar una reclamació davant l’Autoritat de control
                  (www.aepd.es) si considera que el tractament no s’ajusta a la
                  normativa vigent.
                </li>
              </ul>
              <p>
                <b>Dades de contacte per exercir els seus drets:</b>
              </p>
              <p>
                Maria Teresa Graell Bigatà. C/ Bisbe Iglesias Navarri nº 15,
                baixos.
                <br /> 25700 La Seu d'Urgell (Lleida)
                <br /> E-mail: contacte@clinicadentalgraell.com
              </p>
              <h2>COOKIES UTILITZADES EN AQUEST LLOC WEB</h2>
            </div>
          </div>
        </section>
      </main>
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default PoliticaCookies;
