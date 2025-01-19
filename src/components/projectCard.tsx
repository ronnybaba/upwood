"use client";
import { useState } from "react";
import Button from "@/components/button";
import BuyShare from "@/components/buyShare";
interface KeyItem {
  "name": string;
  "value": string;
}
interface ItemProps {
  item : {
    id:string,
    comingsoon : boolean,
    image : string,
    image_label:string,
    title : string,
    short : string,
    keyPoints : KeyItem[],
    share_price : string,
    share_available : string
  }
}
import Image from 'next/image';
export default function ProjectCard({item} : ItemProps) {
  const [buyShare, setBuyShare] = useState(false);
  const openBuyShare = () => {
    setBuyShare(true);
  };
  const closeBuyShare = () => {
    setBuyShare(false);
  };
  const buyShareCongig = {
    heading : "Buy shares",
    title : item.title,
    share_price : item.share_price,
    share_available : item.share_available,
    balance : '1500',
    share : '100',
    total_payment : '3000'
  }
  return (
    <>
    <div className="project-card">
      <div className="container">
        <div className="container-in">
          <div className="col-12">
            <div className="image">
            <Image
                  src={item.image}
                  alt="Description of the image"
                  layout="responsive"
                  width={100}
                  height={100}
              />
              <div className="caption">{item.comingsoon?'coming soon':item.image_label}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${item.comingsoon?'disable-overlay':''}`}>
        <div className="container-in">
        <div className="col-12">
          <div className="project-name">{item.comingsoon?'To be announced':item.title}</div>
          <div className="project-description">{item.comingsoon?'Description coming soon, please wait':item.short}</div>
        </div>
      </div>
      <div className="container-in">
        {item.keyPoints.map((item_s, index) => (
          <div className="col-4 col-m-padding-right-0 fl" key={index}>
            <span className="colb">{item_s.name}</span>
            <span className="colc">{item.comingsoon?'TBA':item_s.value}</span>
          </div>
        ))}
        <div className="clr"></div>
      </div>
      <div className="container-in">
        <div className="col-8 col-m-full col-mr-bottom-20 fl">
          <Button text={'VIEW DETAILS'} link={`/active-project-details/#${item.id}`} active={false}   />
        </div>
        <div className="col-4 col-m-full fl">
          <Button text ={'INVEST'} link={''} active={true} call={openBuyShare}  />
        </div>
        <div className="clr"></div>
      </div>
      </div>
    </div>
    {buyShare ? <BuyShare config={buyShareCongig} close={closeBuyShare} /> : null}
    </>
  );
}
