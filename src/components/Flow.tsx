import { ComponentProps, CSSProperties, VFC } from "react";

import { default as FlowOrigin } from "react-flow-renderer";

const OGP_RATIO = 1.91;
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

type Props = { isDarkMode: boolean } & Pick<ComponentProps<typeof FlowOrigin>, "onLoad">;

export const Flow: VFC<Props> = ({ isDarkMode, onLoad }) => {
  return (
    <div style={getStyle(isDarkMode)}>
      <FlowOrigin elements={elements} onLoad={onLoad} />
    </div>
  );
};

const getStyle = (isDarkMode: keyof Pick<Props, "isDarkMode">): CSSProperties => {
  console.log(isDarkMode);
  return {
    height: 500,
    width: 500 * OGP_RATIO,
    background: isDarkMode ? "darkslategray" : "lightslategray",
  };
};
