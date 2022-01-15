import html2canvas from "html2canvas";
import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import { useEffect } from "react";

import { OnLoadParams } from "react-flow-renderer";
import { Flow } from "@/components/Flow";
import { ModeSwitch } from "@/components/ModeSwitch";
import { useClipboard } from "@/hooks/useClipboard";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { usePreCacheCanvas } from "@/hooks/usePreCacheCanvas";
import { useScreenSize } from "@/hooks/useScreenSize";

const Home: NextPage = () => {
  const size = useScreenSize();
  const { handleCopy, hasCopied } = useClipboard();
  const { canvas: defaultCanvas, handleReSaveCanvas } = usePreCacheCanvas();
  const { storedValue: isDarkMode, setValue: setIsDarkMode } = useLocalStorage("isDarkMode", true);
  const { storedValue: canvas, setValue: setCanvas } = useLocalStorage("canvas", defaultCanvas);

  // useEffect(() => {}, []);

  const handleDownload = () => {
    handleReSaveCanvas();

    const targetImgUri = canvas.toDataURL("img/png");
    const downloadLink = document.createElement("a");

    downloadLink.href = targetImgUri;
    downloadLink.download = "flow-chart.png";
    document.body.appendChild(downloadLink); // for firefox
    downloadLink.click();
    document.body.removeChild(downloadLink); // for firefox
  };

  const handleClickSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : undefined}>
      <Head>
        <title>
          Flowchart & Dialog Editor Online - create share link and export as image online
        </title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>📈</text></svg>"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Ubuntu&subset=cyrillic,latin"
          rel="stylesheet"
          type="text/css"
        />

        <meta
          name="description"
          content="Flowchart & Dialog Editor Online is a web-based tool to edit, generate image, share with link and OG image.
"
        />
      </Head>

      <div className="flex flex-col min-h-screen antialiased hover:subpixel-antialiased text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800">
        <header className="w-full border-b-2 border-slate-300 dark:border-slate-600 border-dashed">
          <div className="flex relative justify-start items-center p-4 h-20 lg:justify-center">
            <h1 className="m-0 text-base font-bold lg:text-4xl">
              📈 Flowchart & Dialog Editor Online
            </h1>
            <div className="absolute right-8">
              <ModeSwitch isDarkMode={isDarkMode} onToggle={handleClickSwitch} />
            </div>
          </div>
        </header>

        <main className="grow">
          <div className="flex flex-col items-center pt-24">
            {size.width && <Flow isDarkMode={isDarkMode} screenWidth={size.width} />}

            <div className="flex gap-5 items-start mt-10">
              <div>
                <button
                  className="py-1 px-3 font-bold bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 rounded-md shadow-lg"
                  onClick={() => handleCopy(location.href)}
                >
                  🔗 Copy share link
                </button>
                {hasCopied && (
                  <p className="p-1 text-sm text-center text-green-400 animate-fade">Copied!</p>
                )}
              </div>

              <button
                className="py-1 px-3 font-bold bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 rounded-md shadow-lg"
                onClick={() => handleDownload()}
              >
                📤 Export as image
              </button>
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
