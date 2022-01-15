import { useState, ComponentProps, CSSProperties, VFC } from "react";
import { default as FlowOrigin, Controls, MiniMap, Background } from "react-flow-renderer";

import { Toggle } from "@/components/Toggle";
import { useFlow } from "@/hooks/useFlow";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type Props = {
  isDarkMode: boolean;
  screenWidth: number;
};

export const Flow: VFC<Props> = ({ screenWidth, isDarkMode }) => {
  const { elements } = useFlow();
  const { storedValue: storedElements, setValue: setElement } = useLocalStorage(
    "elements",
    elements
  );
  const isPc = screenWidth > 640;
  const [isShowMiniMap, setIsShowMiniMap] = useState(isPc);
  const [isShowControls, setIsControls] = useState(isPc);

  // TODO:
  // const OGP_RATIO = 1.91;
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
        <FlowOrigin elements={elements}>
          {/* TODO: inject style */}
          {isShowMiniMap && <MiniMap />}
          {isShowControls && <Controls />}
          <Background color="#aaa" gap={16} />
        </FlowOrigin>
      </div>
    </>
  );
};
