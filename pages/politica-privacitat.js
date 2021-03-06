import Head from "next/head";
import NavigationBar from "../components/navigation/NavigationBar";
import GlobalTexts from "../utils/globals.json";
import HomeTexts from "../utils/home.json";
import CommonTexts from "../utils/commons.json";
import ContacteTexts from "../utils/contacte.json";
import Footer from "../components/Footer";
import LegalTexts from "../utils/legal.json";

const PoliticaPrivacitat = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Política de Privacitat - Clínica Dental Graell</title>
        <meta
          name="description"
          content="Política de Privacitat de la Clínica Dental Graell"
        />
        <link
          rel="canonical"
          href="https://clinicadentalgraell.com/politica-privacitat"
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
          content="Política de Privacitat  - Clínica Dental Graell"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Política de Privacitat de la Clínica Dental Graell"
        />
        <meta property="og:image" content="../share.jpg" />
        <meta property="og:url" content="https://clinicadentalgraell.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@clinicadentalgraell" />
        <meta name="twitter:creator" content="@clinicadentalgraell" />
        <meta property="article:publisher" content="Clinica Dental Graell" />
        <meta
          name="twitter:title"
          content="Política de Privacitat  - Clínica Dental Graell"
        />
        <meta
          name="twitter:description"
          content="Política de Privacitat de la Clínica Dental Graell"
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
                    <span>Política de Privacitat</span>
                  </li>
                </ul>
                <h1 className="text-4xl mt-4 mb-7 leading-snug relative z-20">
                  Política de Privacitat
                </h1>
                <div className="pl-16 relative">
                  <span className="absolute left-6 -top-28 bg-primary-100 h-full p-24 w-full bg-opacity-20"></span>
                  <span className="relative z-20">
                    Darrera actualització: 13 de gener, 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 md:pt-14 md:pb-20 relative">
          <div className="container relative z-10">
            <div className="w-full md:w-1/2 mt-4 mb-8 mx-auto">
              <h2>1. INFORMACIÓ PER A L&apos;USUARI</h2>
              <p className="font-bold">
                Qui és el responsable del tractament de les teves dades
                personals?
              </p>
              <p>
                Maria Teresa Graell Bigatà és el RESPONSABLE del tractament de
                les dades personals de l&apos;USUARI i l&apos;informa que
                aquestes dades es tractaran de conformitat amb el que disposa el
                Reglament (UE) 2016/679, de 27 d&apos;abril (GDPR), i la Llei
                Orgànica 3/2018, de 5 de desembre (LOPDGDD).
              </p>
              <p className="font-bold">
                Perquè tractem les teves dades personals?
              </p>
              <p>
                Per mantenir una relació comercial amb l&apos;usuari. Les
                operacions previstes per fer el tractament són:
              </p>
              <ul>
                <li>
                  Prestar assistència sanitària i la gestió adequada de la
                  mateixa (inclou el serveis sanitària i administratius per la
                  mateixa (manteniment d&apos;història clínica, planificació de
                  visites, revisions, emissió de justificants
                  d&apos;assistència, atendre comunicacions del client,
                  facturació i emissió de pressupostos)
                </li>
                <li>Efectuar estudis de mercat i anàlisis estadístiques. </li>
                <li>
                  Tramitar encàrrecs de peticions, donar resposta a les
                  consultes o qualsevol tipus de petició que faci l&apos;USUARI
                  a través de qualsevol de les formes de contacte que es posen a
                  la seva disposició a la pàgina web del RESPONSABLE.
                </li>
                <li>
                  Enviar el butlletí informatiu online, sobre novetats, ofertes
                  i promocions en la nostra activitat.
                </li>
              </ul>
              <p className="font-bold">
                Per quin motiu podem tractar les teves dades personals?
              </p>
              <p>
                Perquè el tractament està legitimat per l&apos;article 6 i 9 del
                GDPR de la següent manera:
              </p>
              <ul>
                <li>
                  Amb el consentiment de l&apos;USUARI: enviament de
                  comunicacions comercials i del butlletí informatiu.{" "}
                </li>
                <li>
                  Per interès legítim del RESPONSABLE: efectuar estudis de
                  mercat, anàlisis estadístiques, etc. i tramitar encàrrecs,
                  factures i altres sol·licituds, etc. a petició de
                  l&apos;USUARI. (art 6.f RGPD)
                </li>
                <li>
                  Per a la realització de tractaments mèdics executades per a
                  professionals de la medicina col·legiats i adscrits a deure de
                  secret (Art 9.h RGPD)
                </li>
              </ul>
              <p className="font-bold">
                Durant quant de temps guardarem les teves dades personals?
              </p>
              <p>
                Es conservaran durant no més temps del necessari per mantenir la
                finalitat del tractament o mentre hi hagi prescripcions legals
                que en dictaminin la custòdia i quan ja no sigui necessari per a
                això, se suprimiran amb mesures de seguretat adequades per
                garantir l&apos;anonimització de les dades o la seva destrucció
                total.
              </p>
              <p className="font-bold">
                A qui facilitem les teves dades personals?
              </p>
              <p>
                No està prevista cap comunicació de dades personals a tercers
                excepte, si fos necessari per al desenvolupament i execució de
                les finalitats del tractament, als nostres proveïdors de serveis
                relacionats amb comunicacions, amb els quals el RESPONSABLE ha
                formalitzat els contractes de confidencialitat i
                d&apos;encarregat de tractament exigits per la normativa vigent
                de privacitat.
              </p>
              <p className="font-bold">Quins són els teus drets?</p>
              <p>Els drets que té l&apos;USUARI són:</p>
              <ul>
                <li>Dret a retirar el consentiment en qualsevol moment.</li>
                <li>
                  Dret d&apos;accés, rectificació, portabilitat i supressió de
                  les seves dades i de limitació o oposició al seu tractament.
                </li>
                <li>
                  Dret a presentar una reclamació davant l&apos;autoritat de
                  control (www.aepd.es) si considera que el tractament no
                  s&apos;ajusta a la normativa vigent.
                </li>
              </ul>
              <p className="font-bold">
                Dades de contacte per exercir els seus drets:
              </p>
              <p>
                Maria Teresa Graell Bigatà. C/ Bisbe Iglesias Navarri nº 15,
                baixos.
                <br />
                25700 La Seu d&apos;Urgell (Lleida)
                <br />
                E-mail: contacte@clinicadentalgraell.com
              </p>
              <h2>
                2. CARÀCTER OBLIGATORI O FACULTATIU DE LA INFORMACIÓ FACILITADA
                PER L&apos;USUARI
              </h2>
              <p>
                Els USUARIS, per mitjà de les caselles corresponents i la
                introducció de dades en els camps, marcats amb l&apos;asterisc
                (*) en el formulari de contacte o presentats en formularis de
                descàrrega, accepten expressament i de manera lliure i
                inequívoca, que les seves dades són necessàries per a
                l&apos;atenció de la seva petició, per part del prestador, i que
                per tant la inclusió de les dades en els camps restants és
                voluntària. L&apos;USUARI garanteix que les dades personals
                facilitades al RESPONSABLE són verídiques i es fa responsable de
                comunicar-ne qualsevol modificació. El RESPONSABLE informa que
                totes les dades sol·licitades a través del lloc web són
                obligatòries, ja que són necessàries per a la prestació
                d&apos;un servei òptim a l&apos;USUARI. En cas que no es
                facilitin totes les dades, no es garanteix que la informació i
                serveis facilitats s&apos;ajustin completament a les seves
                necessitats.
              </p>
              <h2>3. MESURES DE SEGURETAT</h2>
              <p>
                Que, de conformitat amb el que estableixen les normatives
                vigents en protecció de dades personals, el RESPONSABLE està
                complint amb totes les disposicions de les normatives GDPR i
                LOPDGDD per al tractament de les dades personals de la seva
                responsabilitat, i manifestament amb els principis descrits a
                l&apos;article 5 del GDPR, pels quals es tracten de manera
                lícita, lleial i transparent en relació amb l&apos;interessat i
                adequades, pertinents i limitades al que és necessari en relació
                amb les finalitats per a les quals es tracten.
              </p>
              <p>
                El RESPONSABLE garanteix que ha implementat polítiques tècniques
                i organitzatives apropiades per aplicar les mesures de seguretat
                que estableixen el GDPR i la LOPDGDD per tal de protegir els
                drets i llibertats dels USUARIS i els ha comunicat la informació
                adequada perquè puguin exercir-los.
              </p>
              <p>
                Per a més informació sobre les garanties de privacitat, pots
                dirigir-te al RESPONSABLE a través de:
                <br />
                Maria Teresa Graell Bigatà. C/ Bisbe Iglesias Navarri nº 15,
                baixos.
                <br />
                25700 La Seu d&apos;Urgell (Lleida)
                <br />
                E-mail: contacte@clinicadentalgraell.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default PoliticaPrivacitat;
