import React from "react";
import Head from "next/head";
import NavigationBar from "../../components/navigation/NavigationBar";
import GlobalTexts from "../../utils/globals.json";
import HomeTexts from "../../utils/home.json";
import CommonTexts from "../../utils/commons.json";
import Footer from "../../components/Footer";
import CitaPrevia from "../../components/CitaPrevia";

const Endodoncia = () => {
  return (
    <>
      <Head>
        <title>Endodòncia - {GlobalTexts.brand}</title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main>
        <article>
          <section className="relative overflow-hidden pt-28">
            <div className="flex flex-wrap items-center justify-between bg-primary-100 bg-opacity-20">
              <div className="w-full md:w-5/12 h-96 relative z-20">
                <picture>
                  <source srcset="../branding/equip-clinica-dentall-graell-cover.jpg" />
                  <img
                    src="../branding/equip-clinica-dentall-graell-cover.jpg"
                    data-src="../branding/equip-clinica-dentall-graell-cover.jpg"
                    alt=""
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
                      <span>Especialitats</span>
                    </li>
                    <li>
                      <span>Endodòncia</span>
                    </li>
                  </ul>
                  <h1 className="text-3xl mt-10 mb-7 leading-snug relative z-20">
                    Endodòncia
                  </h1>
                  <div className="pl-16 relative">
                    <span className="absolute left-6 -top-20 bg-primary-100 h-full p-24 w-full bg-opacity-20"></span>
                    <span className="relative z-20">
                      L’endodoncista és l’especialista de l’odontologia que
                      estudia tot el relacionat amb el diagnòstic i el
                      tractament dels conductes radiculars (endodòncia).
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden py-20">
            <div className="container mx-auto">
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
                <div className="-ml-24 pt-10 pb-8">
                  <blockquote>
                    Gràcies al tractament endodòntic les afectacions dels
                    conductes radiculars que abans provocaven l’exodòncia de la
                    dent, es poden tractar ara de manera menys invasiva,
                    preservant la funcionalitat de la dent.
                  </blockquote>
                </div>
                <p>
                  El tractament endodòntic està indicat quan, per un motiu o un
                  altre, els conductes de la dent es veuen danyats pels
                  bacteris, que arriben a afectar el nervi, l’arrel o fins i tot
                  l’os maxil·lar on s’alberga la dent. Aquesta situació es dóna
                  per culpa de la necrosi pulpar o mort del nervi, que pot estar
                  causada principalment per situacions com:
                </p>
                <ul className="mb-4">
                  <li>
                    <span class="font-bold">Càries profunda</span>: la infecció
                    ha arribat a la dentina i ha afectat els conductes
                    radiculars.
                  </li>
                  <li>
                    <span class="font-bold">Dents fracturades</span>: la
                    fractura de la dent permet l’entrada dels bacteris als
                    conductes radiculars, la qual cosa provoca necrosi pulpar.
                  </li>
                  <li>
                    <span class="font-bold">Traumatismes severs</span>: un cop a
                    l’arrel de la dent provoca la infecció dels conductes
                    radiculars.
                  </li>
                  <li>
                    <span class="font-bold">Lesions periodontals greus</span>:
                    lesions periodontals combinades.
                  </li>
                  <li>
                    <span class="font-bold">Motius protètics</span>: per la
                    col·locació posterior de corones o ponts.
                  </li>
                  <li>
                    <span class="font-bold">
                      Anomalies morfològiques dentals
                    </span>
                    : dens in dente.
                  </li>
                  <li>
                    <span class="font-bold">Atricció</span>
                  </li>
                  <li>
                    <span class="font-bold">Abrasió</span>
                  </li>
                  <li>
                    <span class="font-bold">Idiopàtiques</span>
                  </li>
                </ul>
                <p>
                  En la clínica dental Graell apliquem un tractament
                  personalitzat a cada pacient per realitzar l’extracció del
                  teixit infectat o inflamat necessari i posteriorment
                  reconstruir la dent de la manera més efectiva. L’especialista
                  decideix el procediment endodòntic a seguir, que sol constar
                  de tres fases:
                </p>
                <p>
                  L’endodoncista neteja tot el teixit destruït, eliminant la
                  polpa danyada i la infecció. Posteriorment, omple el buit de
                  la dent amb un material biocompatible. Finalment, es segella
                  la dent per evitar que els bacteris tornin a arribar al seu
                  interior.
                </p>
                <p>
                  En els casos en què la destrucció de la dent és major serà
                  necessari aplicar una reconstrucció més important per tornar
                  la funcionalitat a la dent. Aquestes situacions es poden
                  solucionar amb la col·locació d’un poste que augmenti la
                  subjecció de la restauració i amb un recobriment de cúspides
                  complet que permeti mastegar sense problemes. En altres casos,
                  és necessari la realització d’una incrustació o corona.
                </p>
                <p>
                  No sempre som a temps de recórrer a l’endodòncia.
                  <br />
                  En alguns casos que la infecció ha afectat a l’arrel i fins i
                  tot a l’os, l’única solució serà realitzar l’extracció de la
                  dent, perquè aquests danys no vagin a més. Per evitar aquestes
                  situacions és necessari acudir a les revisions dentals un cop
                  a l’any a manera de prevenció.
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

export default Endodoncia;