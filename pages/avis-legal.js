import Head from "next/head";
import NavigationBar from "../components/navigation/NavigationBar";
import GlobalTexts from "../utils/globals.json";
import HomeTexts from "../utils/home.json";
import CommonTexts from "../utils/commons.json";
import ContacteTexts from "../utils/contacte.json";
import Footer from "../components/Footer";
import LegalTexts from "../utils/legal.json";

const AvisLegal = () => {
  return (
    <>
      <Head>
        <title>Avís legal - {GlobalTexts.brand}</title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main className="legal">
        <section className="relative overflow-hidden pt-24 lg:pt-36">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2">
              <div className="px-6 w-full md:w-2/3 mt-10 lg:mt-4 mb-8">
                <h1 className="text-4xl mt-4 mb-7 leading-snug relative z-20">
                  Avís legal
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
              <p>
                Maria Teresa Graell Bigatà, responsable del lloc web, d&apos;ara
                endavant el RESPONSABLE, posa a disposició dels usuaris aquest
                document, amb el qual pretén fer complir les obligacions que
                estableix la Llei 34/2002, de 11 de juliol, de Serveis de la
                Societat de la Informació i de Comerç Electrònic (LSSICE), BOE
                N.º 166, així com informar tots els usuaris del lloc web sobre
                quines són les condicions d&apos;ús.
              </p>
              <p>
                Qualsevol persona que accedeixi a aquest lloc web assumeix el
                paper d&apos;usuari i es compromet a l&apos;observança i
                compliment rigorós de les disposicions que s&apos;hi
                estableixen, així com a qualsevol altra disposició legal
                s&apos;hi apliqui.{" "}
              </p>
              <p>
                Maria Teresa Graell Bigatà es reserva el dret de modificar
                qualsevol tipus d&apos;informació que pugui aparèixer al lloc
                web, sense l&apos;obligació de preavisar o assabentar els
                usuaris d&apos;aquestes obligacions, atès que es considera
                suficient la publicació al lloc web de Maria Teresa Graell
                Bigatà.
              </p>
              <h2>1. DADES IDENTIFICADORES</h2>
              <p>
                Nom del domini: www.clinicadentalgraell.com
                <br />
                Nom comercial: Clínica Dental Graell
                <br />
                Denominació social: Maria Teresa Graell Bigatà
                <br />
                NIF: 52309048X
                <br />
                Domicili social: C/ Bisbe Iglesias Navarri nº 15, baixos, local
                4
                <br />
                Telèfon: 973351860
                <br />
                E-mail: contacte@clinicadentalgraell.com
              </p>
              <p className="font-bold">Activitat reglada</p>
              <p>
                Col·legi Professional: Col·legi Oficial d&apos;Odontòlegs i
                Estomatòlegs de Catalunya (COEC)
                <br />
                Núm. Col·legiat: 5967
                <br />
                Títol acadèmic oficial: Títol universitari oficial de
                Llicenciada d&apos;Odontologia
                <br />
                Estat UE d&apos;expedició: Espanya
              </p>
              <h2>2. DRETS DE PROPIETAT INTEL·LECTUAL I INDUSTRIAL</h2>
              <p>
                El lloc web, incloent a títol enunciatiu però no limitatiu la
                seva programació, edició, compilació i altres elements
                necessaris per al seu funcionament, els dissenys, logotips, text
                i/o gràfics, són propietat del RESPONSABLE o, si és el cas,
                disposa de llicència o autorització expressa per part dels
                autors. Tots els continguts del lloc web es troben degudament
                protegits per la normativa de propietat intel·lectual i
                industrial, així com inscrits en els registres públics
                corresponents.{" "}
              </p>
              <p>
                Independentment de la finalitat per a la qual fossin destinats,
                la reproducció total o parcial, ús, explotació, distribució i
                comercialització, requereix en tot cas l&apos;autorització
                escrita prèvia per part del RESPONSABLE. Qualsevol ús no
                autoritzat prèviament es considera un incompliment greu dels
                drets de propietat intel·lectual o industrial de l&apos;autor.{" "}
              </p>
              <p>
                Els dissenys, logotips, text i/o gràfics aliens al RESPONSABLE i
                que puguin aparèixer al lloc web, pertanyen als seus respectius
                propietaris, els quals són responsables de qualsevol possible
                controvèrsia que se&apos;n pugui desprendre. El RESPONSABLE
                autoritza expressament que tercers puguin redirigir directament
                als continguts concrets del lloc web, i en tot cas redirigir al
                lloc web principal de{" "}
                <a
                  href="https://clinicadentalgraell.com"
                  title="clinicadentalgraell.com"
                >
                  clinicadentalgraell.com
                </a>
                .{" "}
              </p>
              <p>
                El RESPONSABLE reconeix a favor dels seus titulars els
                corresponents drets de propietat intel·lectual i industrial,
                sense implicar el seu sol esment o aparició al lloc web
                l&apos;existència de drets o responsabilitat sobre aquests, ni
                el suport, patrocini o recomanació per part del RESPONSABLE.
              </p>
              <p>
                Per a efectuar qualsevol tipus d&apos;observació pel que fa a
                possibles incompliments dels drets de propietat intel·lectual o
                industrial, així com sobre qualsevol dels continguts del lloc
                web, podeu fer-ho a través del correu electrònic
                contacte@clinicadentalgraell.com.
              </p>
              <h2>3. EXEMPCIÓ DE RESPONSABILITATS</h2>
              <p>
                El RESPONSABLE s&apos;eximeix de qualsevol tipus de
                responsabilitat derivada de la informació publicada al seu lloc
                web en cas que aquesta informació hagi estat manipulada o
                introduïda per un tercer aliè al RESPONSABLE.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default AvisLegal;
