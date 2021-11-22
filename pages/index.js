import React from "react";
import Head from "next/head";
import NavigationBar from "../components/navigation/NavigationBar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Inici - Clínica Dental Graell</title>
      </Head>
      <NavigationBar />
      <main>
        <section className="relative mt-6 flex flex-wrap items-center">
          <div className="w-full md:w-5/12 absolute inset-y-0 left-0 h-72 lg:h-full">
            <picture>
              <source srcSet="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                data-src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                alt="Clínica Dental a la Seu d'Urgell - Clínica Dental Graell"
                className="object-cover w-full h-full"
                width="400"
                height="300"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="container mx-auto px-9">
            <div className="flex flex-wrap justify-end">
              <div className="w-full md:w-6/12 py-24">
                <div className="w-full md:w-10/12">
                  <h1 className="text-4xl font-bold text-primary-300 mt-0 mb-5">
                    Clínica Dental a la Seu d'Urgell
                  </h1>
                  <p className="text-primary-300 leading-7">
                    Clínica Dental Graell és una moderna clínica dental a la Seu
                    d'Urgell on combinem un servei integral d’odontologia
                    avançada amb les últimes tecnologies i un tracte proper, per
                    a donar una millor solució en cada cas i aconseguir la salut
                    oral i retornar el somriure a cada pacient.
                  </p>
                  <div className="flex items-center mt-8">
                    <a
                      href="/especialitats"
                      title="Especialitats"
                      className="button button-light mr-5"
                    >
                      Especialitats
                    </a>
                    <a
                      href="/contacte"
                      title="Contactar"
                      className="button button-primary"
                    >
                      Contacte
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
