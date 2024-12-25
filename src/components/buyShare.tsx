"use client";
import { useEffect, useState } from "react";
import Button from "./button";
interface Item {
  heading: string,
  title : string,
  share_price : string,
  share_available : string
}
interface BuyProps {
  config :Item
  close?: () => void;
}
export default function BuyShare({config, close} : BuyProps) {
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
        <div className="title">{config.title}</div>
        <div className="container">
          <div className="container-in">
            <div className="vis col-6 fl">
              <span className="colc">Price per share</span>
              <span className="colb">{config.share_price}€</span>
            </div>
            <div className="vis col-6 fl">
              <span className="colc">Share available</span>
              <span className="colb">{config.share_available}</span>
            </div>
            <div className="clr"></div>
          </div>
        </div>
        <div className="space-30"></div>
        <div className="field">
          <label><span>Investment amount <span className="fr">Balance - 581 EUROe</span></span></label>
          <input className="textField error" />
          <p className="text-align-center error">Your wallet balance is not sufficient to buy shares. Please add funds to your wallet.</p>
        </div>
        <div className="resu">
          <div className="col-m-full col-mr-bottom-20 fl">
          Get shares : <span>6 Share</span>
          </div>
          <div className="col-m-full fr">
          Total payment : <span>648 EUROe</span>
          </div>
          <div className="clr"></div>
        </div>
        <div className="space-30"></div>
        <div className="field">
          <div className="checkbox">
            <input type="checkbox" id='terms' />
            <label htmlFor="terms" className="center no-center-mobile"><span>Accept <a href="">BOND TERMS AND CONDITIONS</a> and <a href="">SUBSCRIPTION AGREEMENT</a></span></label>
          </div>
        </div>
        <div className="space-30"></div>
        <div className="container">
          <div className="container-in">
            <div className="col-5 col-m-full col-mr-bottom-20 fl">
              <Button text ={'CLOSE'} link={''} active={false} call={close}  />
            </div>
            <div className="col-5 col-m-full fr">
              <Button text ={'INVEST'} link={''} active={true} call={investButtonHit}  />
            </div>
            <div className="clr"></div>
          </div>
        </div>
      </div>
    }
    </div>
  );
}
