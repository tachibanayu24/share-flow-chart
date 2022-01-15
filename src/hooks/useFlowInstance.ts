import { useState } from "react";
import { OnLoadParams } from "react-flow-renderer";

export const useFlowInstance = () => {
  const [flowInstance, setFlowInstance] = useState<OnLoadParams>();

  if (flowInstance) flowInstance.fitView();

  return { flowInstance, setFlowInstance };
};
