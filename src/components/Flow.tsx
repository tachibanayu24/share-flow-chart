import { useState, ComponentProps, CSSProperties, VFC } from "react";
import { default as FlowOrigin, Controls, MiniMap, Background } from "react-flow-renderer";

import { Toggle } from "@/components/Toggle";

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

type Props = {
  isDarkMode: boolean;

  screenWidth: number;
} & Pick<ComponentProps<typeof FlowOrigin>, "onLoad">;

export const Flow: VFC<Props> = ({ screenWidth, isDarkMode, onLoad }) => {
  const isPc = screenWidth > 640;
  const [isShowMiniMap, setIsShowMiniMap] = useState(true);
  const [isShowControls, setIsControls] = useState(true);

  console.log(isShowControls, isShowMiniMap);

  const OGP_RATIO = 1.91;
  // TODO:
  const size = [`h-[500px]`, `w-[955px]`, `h-[320px]`, `w-[95%]`];

  let style;
  if (isPc) {
    style = size.slice(0, 2).join(" ");
  } else {
    style = size.slice(2, 4).join(" ");
  }

  return (
    <>
      <div className="flex gap-8 mb-8">
        <Toggle
          label="Control Buttons"
          onToggle={() => setIsControls((prev) => !prev)}
          isChecked={isShowControls}
        />
        <Toggle
          label="MiniMap"
          onToggle={() => setIsShowMiniMap((prev) => !prev)}
          isChecked={isShowMiniMap}
        />
      </div>

      <div
        className={`${style} ${isDarkMode ? "bg-slate-600" : "bg-slate-200"} rounded-md shadow-lg`}
      >
        <FlowOrigin elements={elements} onLoad={onLoad}>
          {isShowMiniMap && <MiniMap />}
          {isShowControls && <Controls />}
          <Background color="#aaa" gap={16} />
        </FlowOrigin>
      </div>
    </>
  );
};
