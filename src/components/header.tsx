"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import VerticleNav from "@/components/verticleNav";
export default function Header() {
  const navigationData = [
    {
      "name" : "ACTIVE PROJECTS",
      "url" : "/active-projects",
      "icon-normal" : "/nav-active-project-normal.svg",
      "icon-active" : "/nav-active-project-white.svg"
    },
    {
      "name" : "FUNDED PROJECTS",
      "url" : "/funded-projects",
      "icon-normal" : "/nav-funded-project-normal.svg",
      "icon-active" : "/nav-funded-project-white.svg"
    },
    {
      "name" : "INVESTMENT PORTFOLIO",
      "url" : "/investment-portfolio",
      "icon-normal" : "/nav-investment-portfolio-normal.svg",
      "icon-active" : "/nav-investment-portfolio-white.svg"
    },
    {
      "name" : "CONTRACTS",
      "url" : "/contracts",
      "icon-normal" : "/nav-contracts-normal.svg",
      "icon-active" : "/nav-contracts-white.svg"
    },
    {
      "name" : "WALLET MANAGEMENT",
      "url" : "/wallet-management",
      "icon-normal" : "/nav-wallet-management-normal.svg",
      "icon-active" : "/nav-wallet-management-white.svg"
    },
    {
      "name" : "NEWS & UPDATES",
      "url" : "/news-updates",
      "icon-normal" : "/nav-news-updates-normal.svg",
      "icon-active" : "/nav-news-updates-white.svg"
    },
    {
      "name" : "SUPPORT",
      "url" : "/support",
      "icon-normal" : "/nav-support-normal.svg",
      "icon-active" : "/nav-support-white.svg"
    },
    {
      "name" : "SETTINGS",
      "url" : "/settings",
      "icon-normal" : "/nav-settings-normal.svg",
      "icon-active" : "/nav-settings-white.svg"
    }
  ];
  const toggleMenu = () => {
    document.body.classList.toggle("menuopen");
  };

  const closeMenu = () => {
    document.body.classList.remove("menuopen");
  };
  return (
    <>
    <div className="header">
      <div className="top">
        <div className="logo fl">
        <Image
          src={'/Logo.svg'}
          alt=""
          width={176}
          height={38}
          priority
        />
        </div>
        <img src="/Menu.svg" className="menuopen-bar fr" onClick={toggleMenu} />
        <img src="/Close-menu.svg" className="menuclose-bar fr" onClick={toggleMenu} />
        <div className="clr"></div>
      </div>
      
      <span className="logout">
        <Image
            className='icon'
            src="/logout.svg"
            alt=""
            width={24}
            height={24}
            priority
          />
          Logout
      </span>
      
    </div>
    <VerticleNav data={navigationData} closeMenu={closeMenu} />
    </>
  );
}