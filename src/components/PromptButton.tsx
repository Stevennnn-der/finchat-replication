import React from "react";
import styles from "./styles/Slogan.module.css";

const PromptButton = () => {
  return (
    <div className={styles.grid_btns}>
      <button className="custom-button">
        How many new large deals did ServiceNow sign in the last quarter?
      </button>
      <button className="custom-button">
        Provide a list of companies growing revenue more than 10% per year.
      </button>
      <button className="custom-button">
        How is EQB Inc managing its loan losses as of late?
      </button>
      <button className="custom-button">
        Write me a slide deck outline for ASML.
      </button>
    </div>
  );
};

export default PromptButton;
