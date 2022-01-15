import html2canvas from "html2canvas";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { OnLoadParams } from "react-flow-renderer";
import { Flow } from "@/components/Flow";
import { ModeSwitch } from "@/components/ModeSwitch";
import { useClipboard } from "@/hooks/useClipboard";
import { useFlowInstance } from "@/hooks/useFlowInstance";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useScreenSize } from "@/hooks/useScreenSize";

const Home: NextPage = () => {
  const size = useScreenSize();
  const { handleCopy, hasCopied } = useClipboard();
  const { flowInstance, setFlowInstance } = useFlowInstance();
  const { storedValue: isDarkMode, setValue: setIsDarkMode } = useLocalStorage("isDarkMode", true);
  const { storedValue: flowCanvas, setValue: setFlowCanvas } = useLocalStorage("flowCanvas");

  console.log("isDarkMode", isDarkMode);
  console.log("flowCanvas", flowCanvas);

  // useEffect(() => {
  //   if (flowInstance) {
  //     flowInstance.fitView();

  //     html2canvas(document.querySelector(".react-flow")!).then((canvas) => {
  //       setFlowCanvas(canvas);
  //     });
  //   }
  // }, [flowInstance, setFlowCanvas]);

  const handleLoad = (flowInstance: OnLoadParams) => {
    console.log("flow loaded:", flowInstance);
    setFlowInstance(flowInstance);

    if (flowInstance) flowInstance.fitView();
  };

  const handleDownload = () => {
    const targetImgUri = flowCanvas.toDataURL("img/png");
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
            <h1 className="m-0 text-xl font-bold text-center lg:text-4xl">📈 Share Flow Chart</h1>
            <div className="absolute right-8">
              <ModeSwitch isDarkMode={isDarkMode} onToggle={handleClickSwitch} />
            </div>
          </div>
        </header>

        <main className="grow">
          <div className="flex flex-col items-center pt-8">
            {size.width && (
              <Flow isDarkMode={isDarkMode} onLoad={handleLoad} screenWidth={size.width} />
            )}

            <div className="flex gap-10 items-start mt-10">
              <div>
                <button
                  className="py-1 px-3 font-bold bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 rounded-md shadow-lg"
                  onClick={() => handleCopy(location.href)}
                >
                  🔗 Copy & Share
                </button>
                {hasCopied && (
                  <p className="p-1 text-sm text-center text-green-400 animate-fade">Copied!</p>
                )}
              </div>

              <button
                className="py-1 px-3 font-bold bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 rounded-md shadow-lg"
                onClick={() => handleDownload()}
              >
                📤 Fit view & Export
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
