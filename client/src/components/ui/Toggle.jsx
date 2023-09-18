import React from "react";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const Toggle = () => {
  const [enabled, setEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setEnabled(!enabled);
    document.body.classList.toggle("dark");
  };
  return (
    <Switch
      checked={enabled}
      onChange={toggleDarkMode}
      className={`${
        enabled ? "bg-gray-50" : "bg-gray-800"
      } relative inline-flex h-6 w-11 items-center rounded-full shadow-lg`}
    >
      <span className="sr-only">Enable Notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition dark:bg-gray-800 `}
      ></span>
    </Switch>
  );
};

export default Toggle;
