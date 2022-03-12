import React from "react";
import Head from "next/head";
import NavigationBar from "../../components/navigation/NavigationBar";
import GlobalTexts from "../../utils/globals.json";
import HomeTexts from "../../utils/home.json";
import CommonTexts from "../../utils/commons.json";
import Footer from "../../components/Footer";
import CitaPrevia from "../../components/CitaPrevia";

const Periodoncia = () => {
  return (
    <>
      <Head>
        <title>Periodòncia - {GlobalTexts.brand}</title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <article>
          <section className="relative overflow-hidden pt-28">
            <div className="flex flex-wrap items-center justify-between bg-primary-100 bg-opacity-20">
              <div className="w-full md:w-5/12 h-96 relative z-20">
                <picture>
                  <source srcSet="../branding/equip-clinica-dentall-graell-cover.jpg" />
                  <img
                    src="../branding/equip-clinica-dentall-graell-cover.jpg"
                    data-src="../branding/equip-clinica-dentall-graell-cover.jpg"
                    alt="Periodòncia"
                    width="400"
                    height="300"
                    className="object-cover object-center w-full h-full"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full md:w-2/3 mt-4 mb-8">
                  <ul className="breadcrumb list-none flex items-center">
                    <li>
                      <span>Inici</span>
                    </li>
                    <li>
                      <span>Especialitats</span>
                    </li>
                    <li>
                      <span>Periodòncia</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Periodòncia
                  </h1>
                  <div className="pl-16 relative">
                    <span className="absolute left-6 -top-20 bg-primary-100 h-full p-28 w-full bg-opacity-20 rounded-md"></span>
                    <span className="relative z-20">
                      La periodòncia és l’especialitat de l’Odontologia que
                      estudia la prevenció, el diagnòstic i el tractament de les
                      malalties o anomalies que afecten els teixits que suporten
                      les dents. Les principals malalties periodontals són la
                      Gingivitis i la Periodontitis.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden py-20">
            <div className="container">
              <div className="flex flex-wrap w-full md:w-9/12 lg:w-6/12 mx-auto">
                <p>
                  L’endodòncia és la branca de l’odontologia especialitzada en
                  tractar els conductes radiculars de la dent, però popularment
                  es coneix amb el nom de “matar el nervi”. La seva funció
                  principal és extreure parcial o totalment la polpa dental que
                  ha estat danyada o infectada per després omplir l’espai i així
                  tornar la funcionalitat a la dent i acabar amb el dolor
                  provocat per la pulpitis.
                </p>
                <p>
                  És una malaltia que afecta a les genives i a la resta
                  d’estructures que suporten les dents, la pateix el 90% de la
                  població major de 35 anys i és la primera causa de pèrdua de
                  dents en la població mundial.
                </p>
                <p>
                  La malaltia periodontal es manifesta com una gingivitis
                  (inflamació i sagnat de la geniva sense afectar l’os) o
                  periodontitis, on hi ha la destrucció de l’os que suporta la
                  dent. Si no és tractada a temps pot ocasionar la pèrdua de les
                  dents. Un tractament periodontal consisteix des de la
                  correcció de la tècnica d’higiene per controlar la placa
                  bacteriana, fins l’eliminació dels factors desencadenants de
                  la mateixa (càlculs dentaris o tosca i bosses periodontals).
                </p>
                <p>
                  En ocasions la malaltia periodontal pot progressar sense cap
                  símptoma ni dolor. Durant una revisió dental regular,
                  l’odontòleg busca senyals de la malaltia periodontal, de
                  manera que la malaltia encara no detectada pot ser tractada
                  abans de que avanci. La periodòncia és una infecció crònica
                  que afecta a les genives i l’os que suporta les dents.
                  Diferents tipus de bacteris i el mateix sistema immunitari
                  trenquen l’os i el teixit connectiu que serveixen de suport
                  per la dent comportant complicacions com mobilitat de la dent
                  o fins i tot la seva pèrdua.
                </p>
                <p>
                  La gingivitis és una inflamació de la geniva que normalment no
                  comporta problemes majors. Però pot anar en augment cap a
                  altres parts del periodonci (os i teixits tous que envolten la
                  dent responsables de mantenir-la fixa) i causar problemes més
                  greus. Quan passa això parlem de malaltia periodontal o
                  periodontitis. Amb el temps, la debilitació del periodonci
                  provoca un menor ancoratge de la dent i es pot arribar a
                  perdre la peça.
                </p>
                <div className="-ml-24 pt-10 pb-8">
                  <blockquote>
                    Per prevenir la gingivitis és necessària una bona higiene
                    bucodental i així evitar possibles complicacions posteriors
                    com la periodontitis.
                  </blockquote>
                </div>
                <p>
                  Molt lligat a la periodòncia, el sagnat de la geniva, la
                  inflamació o la vermellor són els signes principals de la
                  gingivitis. Normalment, el sagnat es produeix durant el
                  raspallat dental però pot produir-se en altres moments també.{" "}
                </p>
                <p>
                  Una geniva sana té un color rosat mentre que les genives
                  inflamades tenen un color vermellós més fosc. La gingivitis
                  normalment no produeix dolor i els símptomes no es detecten en
                  alguns casos durant molt de temps.
                </p>
                <p>
                  En canvi, els símptomes que engloben la periodontitis són
                  enrogiment i sagnat de les genives, sensibilitat dental, dolor
                  i mal alè però normalment no apareixen fins que la
                  periodontitis ja és avançada.
                </p>
                <p>
                  Quan s’inflamen les genives, entre la dent i la geniva, es
                  formen bosses periodontal on s’estableixen els bacteris que
                  poden causar càries en l’arrel de la dent. En fases més
                  avançades de la periodontitis, les genives es poden retreure
                  deixant espais més grans entre les dents. Si la bossa
                  periodontal és molt gran, part de l’arrel pot quedar exposada,
                  ja que els bacteris estaran destruint part del periodonci i
                  teixit ossi.
                </p>
                <p>
                  Dins d’un tractament de periodòncia també ens centrem en la
                  inflamació de les genives. La causa més comuna de la
                  inflamació de les genives és la placa dental. La placa és una
                  fina capa composta principalment per bacteris. Aquests
                  bacteris causen la inflamació de les genives i aquesta
                  desencadenar a un sagnat. Hi ha diferents factors que poden
                  augmentar el risc de patir gingivitis i periodontitis. Una
                  higiene oral pobra o el tabac augmenten la probabilitat de
                  tenir les genives inflamades.
                </p>
                <p>
                  Però hi ha altres factors també que poden influir-hi, com l’ús
                  d’alguns fàrmacs que suprimeixen el sistema immunitari,
                  infeccions víriques, canvis hormonals durant un embaràs o
                  malalties com la diabetis.{" "}
                </p>
                <p>
                  Una de les maneres de detectar la gingivitis és acudint a la
                  clínica dental on es revisarà dent per dent l’existència de
                  bosses periodontals.
                </p>
                <p>
                  També es comprovarà si hi ha presència de sagnat o retrocés
                  gingival així com la mobilitat dental.{" "}
                </p>
                <p>
                  En funció dels resultats de l’exploració realitzada, es
                  requeriran altres tècniques com ara radiografies per veure si
                  hi ha pèrdua òssia o no.
                </p>
              </div>
            </div>
          </section>
        </article>

        <CitaPrevia />
      </main>
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default Periodoncia;
