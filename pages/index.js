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
    </>
  );
};

export default Home;
