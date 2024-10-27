import React from "react";
import PromptButton from "../components/PromptButton";
import styles from "./styles/Slogan.module.css";
import RightArrowIcon from "../Icon/RightArrowIcon";

const Slogan = () => {
  return (
    <div className="flex flex-col gap-20 w-[70%] items-center">
      <header className="text-center mt-16 space-y-4 flex flex-col gap-10 items-center">
        <div className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm gap-1 cursor-pointer">
          <span>FinChat v4 is now live!</span>
          <span className="ml-1">🎉</span>
          <RightArrowIcon />
        </div>
        <h1 className={styles.slogan}>
          The future of investment research, powered by AI.
        </h1>
      </header>
      <div className="w-[80%] flex">
        <PromptButton />
      </div>
    </div>
  );
};

export default Slogan;
