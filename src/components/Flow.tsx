import { ComponentProps, CSSProperties, VFC } from "react";
import { default as FlowOrigin } from "react-flow-renderer";

const elements = [
  {
    id: "1",
    type: "input", // input node
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output", // output node
    data: { label: "Output Node" },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3" },
];

type Props = { isDarkMode: boolean; screenWidth: number } & Pick<
  ComponentProps<typeof FlowOrigin>,
  "onLoad"
>;

export const Flow: VFC<Props> = ({ screenWidth, isDarkMode, onLoad }) => {
  const OGP_RATIO = 1.91;
  // TODO:
  const size = [`h-[320px]`, `w-[95%]`, `h-[500px]`, `w-[955px]`];

  let style;
  if (screenWidth < 640) {
    style = size.slice(0, 2).join(" ");
  } else {
    style = size.slice(2, 4).join(" ");
  }

  return (
    <div
      className={`${style} ${isDarkMode ? "bg-slate-600" : "bg-slate-200"} rounded-md shadow-lg`}
    >
      <FlowOrigin elements={elements} onLoad={onLoad} />
    </div>
  );
};
