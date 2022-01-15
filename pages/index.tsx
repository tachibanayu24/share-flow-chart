import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Share Flow Chart</title>
        <meta name="description" content="This is content" />
      </Head>

      <main>
        <h1 className="text-red font-bold">Share Flow Chart</h1>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;
