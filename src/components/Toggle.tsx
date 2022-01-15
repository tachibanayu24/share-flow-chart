import { VFC } from "react";

type Props = {
  label: string;
  onToggle: () => void;
  isChecked: boolean;
};

export const Toggle: VFC<Props> = ({ label, onToggle, isChecked }) => (
  <div className="flex justify-center items-center">
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" className="sr-only" checked={isChecked} onChange={onToggle} />

        <div className="block w-12 h-6 bg-gray-600 rounded-full"></div>

        <div className="absolute top-1 left-1 w-4 h-4 bg-white checked:bg-green-800 rounded-full transition checked:translate-x-full dot"></div>
      </div>

      <div className="ml-3 font-medium">{label}</div>
    </label>
  </div>
);
