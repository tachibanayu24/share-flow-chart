import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>This is title</title>
        <meta name="description" content="This is content" />
      </Head>

      <main>Main</main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;
