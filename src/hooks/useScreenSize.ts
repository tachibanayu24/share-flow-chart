import { useState, useEffect } from "react";

type ScreenSizeType = {
  width?: number;
  height?: number;
};

export const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState<ScreenSizeType>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};
