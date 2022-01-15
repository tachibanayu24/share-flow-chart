import html2canvas from "html2canvas";
import { useState, useEffect } from "react";

export const usePreCacheCanvas = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();

  const handleReSaveCanvas = () => {
    html2canvas(document.querySelector(".react-flow")!).then((el) => {
      setCanvas(el);
    });
  };

  useEffect(() => {
    handleReSaveCanvas();
    console.log(canvas);
  }, []);
  return { canvas, handleReSaveCanvas };
};
