import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Flow } from "@/components/Flow";

const Home: NextPage = () => {
  return (
    <div className="dark">
      <div className="flex flex-col min-h-screen antialiased hover:subpixel-antialiased dark:text-gray-50 bg-gray-100 dark:bg-gray-800">
        <Head>
          <title>📈 Share Flow Chart</title>
          <link
            href="http://fonts.googleapis.com/css?family=Ubuntu&subset=cyrillic,latin"
            rel="stylesheet"
            type="text/css"
          />

          <meta name="description" content="This is content" />
        </Head>

        <main className="grow">
          <body>
            <div className=" p-4">
              <h1 className="text-4xl font-bold text-center">📈 Share Flow Chart</h1>
            </div>
            {/* <div className="flex justify-center pt-8"> */}
            <Flow isDarkMode />
            {/* </div> */}
          </body>
        </main>

        <footer>
          <p className="p-4 font-light text-center">Footer</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
