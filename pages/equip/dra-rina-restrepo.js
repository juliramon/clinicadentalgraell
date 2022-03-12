import Head from "next/head";
import NavigationBar from "../../components/navigation/NavigationBar";
import GlobalTexts from "../../utils/globals.json";
import HomeTexts from "../../utils/home.json";
import CommonTexts from "../../utils/commons.json";
import Footer from "../../components/Footer";
import EquipTexts from "../../utils/equip.json";
import Link from "next/link";
import CitaPrevia from "../../components/CitaPrevia";

const TeamSheet3 = () => {
  const colRef =
    EquipTexts.persones[2].numCol !== null ? (
      <p className="text-lg font-semibold">
        Num. Col. {EquipTexts.persones[0].numCol}
      </p>
    ) : null;
  return (
    <>
      <Head>
        <title>
          {EquipTexts.persones[2].salutation} {EquipTexts.persones[2].name} -{" "}
          {GlobalTexts.brand}
        </title>
      </Head>
      <NavigationBar GlobalTexts={GlobalTexts} CommonTexts={CommonTexts} />
      <main className="teamsheet">
        <section className="py-10 md:pt-44 md:pb-20 relative">
          <div className="container relative z-10">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4 mt-4 mb-8">
                <div className="aspect-w-12 aspect-h-16 relative">
                  <span className="absolute left-5 -top-4 bg-primary-100 h-full p-24 w-full bg-opacity-20 rounded-md"></span>
                  <picture>
                    <img
                      src={EquipTexts.persones[2].image}
                      datasrc={EquipTexts.persones[2].image}
                      alt={EquipTexts.persones[2].name}
                      className="object-cover w-full h-full rounded-md"
                      width="400"
                      height="300"
                      loading="eager"
                    />
                  </picture>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-4 mb-8 pl-32">
                <ul className="breadcrumb list-none flex items-center">
                  <li>
                    <span>Inici</span>
                  </li>
                  <li>
                    <span>Equip</span>
                  </li>
                  <li>
                    <span>
                      {EquipTexts.persones[2].salutation}{" "}
                      {EquipTexts.persones[2].name}
                    </span>
                  </li>
                </ul>
                <h1 className="text-4xl mt-4 mb-5 leading-snug relative z-20">
                  {EquipTexts.persones[2].salutation}{" "}
                  {EquipTexts.persones[2].name}
                </h1>
                {colRef}
                <ul className="mt-10">
                  {EquipTexts.persones[2].description.map((el, idx) => (
                    <li key={idx}>{el}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CitaPrevia />
      <Footer GlobalTexts={GlobalTexts} HomeTexts={HomeTexts} />
    </>
  );
};

export default TeamSheet3;
