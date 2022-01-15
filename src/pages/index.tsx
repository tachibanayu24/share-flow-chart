import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Flow } from "@/components/Flow";
import { ModeSwitch } from "@/components/ModeSwitch";
import { useClipboard } from "@/hooks/useClipboard";

const Home: NextPage = () => {
  const { handleCopy, hasCopied } = useClipboard();
  return (
    <div className="dark">
      <div className="flex flex-col min-h-screen antialiased hover:subpixel-antialiased text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800">
        <Head>
          <title>📈 Share Flow Chart</title>
          <link
            href="http://fonts.googleapis.com/css?family=Ubuntu&subset=cyrillic,latin"
            rel="stylesheet"
            type="text/css"
          />

          <meta name="description" content="This is content" />
        </Head>

        <header>
          <div className="flex relative justify-center items-center p-4 h-20">
            <h1 className="m-0 text-4xl font-bold text-center">📈 Share Flow Chart</h1>
            <div className="absolute right-8">
              <ModeSwitch isDarkMode onToggle={console.log} />
            </div>
          </div>
        </header>

        <main className="grow">
          <div className="flex flex-col items-center pt-8">
            <Flow isDarkMode />

            <div className="mt-10">
              <button
                className="py-1 px-2 font-bold bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 rounded-md shadow"
                onClick={() => handleCopy(location.href)}
              >
                🔗 Copy & Share
              </button>
              {hasCopied && (
                <p className="p-1 text-sm text-center text-green-400 animate-fade">Copied!</p>
              )}
            </div>
          </div>
        </main>

        <footer>
          <p className="p-4 font-light text-center">Footer</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
