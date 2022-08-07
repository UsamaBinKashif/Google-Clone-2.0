import React, { useState } from "react";

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div
        className=" flex items-center gap-1 font-semibold cursor-pointer "
        onClick={changeTheme}
      >
        <h4 className="text-sm">{darkMode ? "Light" : "Dark"}</h4>
        <button className="text-sm">{darkMode ? ' 🌞' : '🌙'}</button>
      </div>
    </>
  );
}
