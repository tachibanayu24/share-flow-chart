import { CSSProperties, VFC } from "react";

type Props = { isDarkMode: boolean; onToggle: () => void };

export const ModeSwitch: VFC<Props> = ({ isDarkMode, onToggle }) => {
  return (
    <button className="flex justify-center items-center w-10 h-10 font-bold bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 rounded-md shadow">
      <p className="z-10 text-3xl">{isDarkMode ? "🌛" : "🌞"}</p>
    </button>
  );
};
