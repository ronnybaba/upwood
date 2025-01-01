"use client";
import { useEffect, useState } from "react";
import Button from "./button";
interface KeyItem {
  "tag": string;
  "display": string;
}
interface Item {
  heading: string,
  list : KeyItem[]
}
interface ClaimPopupProps {
  config :Item
  close?: () => void;
}
export default function ClaimPopup({config, close} : ClaimPopupProps) {
  const [thankyou, setThankYou] = useState(false);
  const investButtonHit = () => {
    console.log('test')
  }
  const showThankyou = () => {
    setThankYou(true)
  }
  return (
    <div className="popup-overlay">
      {thankyou ? 
      <div className="popup">
        <img src="/Close.svg" className="close" onClick={close} />
        <div className="heading">Congratulations!</div>
        <div className="message"><img src="/Group-1000003068.svg" />You have successfully invested in <span>5 shares</span> of the "Oaktree House" forest plantation.</div>
        <div className="space-30"></div>
        <div className="container">
          <div className="container-in">
            <div className="col-12">
              <Button text ={'GO TO INVESTMENT PORTFOLIO'} link={''} active={true}  />
            </div>
          </div>
        </div>
      </div>
      :
      <div className="popup">
        <img src="/Close.svg" className="close" onClick={close} />
        <div className="heading">{config.heading}</div>
        <div className="cl-area">
          <div className="container">
            <div className="container-in">
            {config.list.map((item, index) => (
              <div className={`col-6 fl ${config.list.length === 1 ? 'auto' : 'fl'} col-m-full`} key={index}>
                <div className="cl-in">
                  <div className="tag">{item.tag}</div>
                  <div className="display">{item.display}</div>
                  <Button text ={'CLAIM'} link={''} active={true} />
                </div>
              </div>
            ))}
            <div className="clr"></div>
            </div>
          </div>
        </div>
      </div>
    }
    </div>
  );
}
