import { useState } from "react";
import Toggle from "./Toggle";

export default function ToggleGroup() {
  const [firstToggleOn, setFirstToggleOn] = useState(true);
  const [secondToggleOn, setSecondToggleOn] = useState(false);

  const handleFirstToggle = () => {
    if (!firstToggleOn) {
      setFirstToggleOn(true);
      setSecondToggleOn(false);
    } else {
      setFirstToggleOn(false);
      setSecondToggleOn(true);
    }
  };

  const handleSecondToggle = () => {
    if (firstToggleOn) {
      setFirstToggleOn(false);
      setSecondToggleOn(true);
    } else {
      setFirstToggleOn(true);
      setSecondToggleOn(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 ">
      <Toggle isOn={firstToggleOn} onToggle={handleFirstToggle} />
      <Toggle isOn={secondToggleOn} onToggle={handleSecondToggle} />
    </div>
  );
}
