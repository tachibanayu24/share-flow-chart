import path from "path";

import { NextApiRequest, NextApiResponse } from "next";

const createOgp = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { el } = req.query;

  const WIDTH = 1200 as const;
  const HEIGHT = 630 as const;
  const DX = 0 as const;
  const DY = 0 as const;
  const canvas = createCanvas(WIDTH, HEIGHT);

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFF";
  ctx.fillRect(DX, DY, WIDTH, HEIGHT);

  registerFont(path.resolve("./src/assets/fonts/ubuntu-v15-latin_cyrillic-300.woff"), {
    family: "ipagp",
  });
  ctx.font = "60px ipagp";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(JSON.stringify(el), 600, 300);

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
};

export default createOgp;
