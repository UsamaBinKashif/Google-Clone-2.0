import React from "react";
import Toggle from "./Toggle";
import Logo from "../assets/chrome.png";


export default function Header() {
  return (
    <div className="font-semibold m-0 p-5 flex items-center justify-around transition-all ">
      <div>
      <img  src={Logo} className="w-10" alt="logo"/>
      </div>
      <div className="toggle">
        <Toggle />
      </div>
    </div>
  );
}
