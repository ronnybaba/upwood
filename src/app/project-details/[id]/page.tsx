"use client";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/breadCrumb";
import BuyShare from "@/components/buyShare";
import Button from "@/components/button";
import MultiImageLayout from "@/components/multiImage";
import SingleImageLayout from "@/components/singleImage";
export default function ProjectDetails() {
  const [buyShare, setBuyShare] = useState(false);
  const openBuyShare = () => {
    setBuyShare(true);
  };
  const closeBuyShare = () => {
    setBuyShare(false);
  };
  const data = {
      id: "1516",
      comingsoon : false,
      image : "/Photo2.jpg",
      image_label : "GROW",
      title : "Latgale forest portfolio",
      short : "Portfolio of 7 forest plantations in Latgale region.",
      large : "Unique investment opportunity located in Gulbene parish, Latvia.This forest plantation offers a sustainable and lucrative investment in land that was uncultivated before and was not in use for past 17 years. The land is suitable for afforestation with spruce that can reach its maturity in 40 years and generate 2810 tons CO2 offset during 20 years. ",
      keyPoints : [
        {
          name : "AREA",
          value : "30.4ha"
        },
        {
          name : "ROI",
          value : "63%"
        },
        {
          name : "CARBON CREDITS",
          value : "3509"
        },
        {
          name : "SHARES AVAILABLE",
          value : "900"
        },
        {
          name : "SHARES RESERVED",
          value : "220"
        }
      ],
      share_price : "108",
      share_available : "900"
    }
    const buyShareCongig = {
      heading : "Buy shares",
      title : data.title,
      share_price : data.share_price,
      share_available : data.share_available
    }
    const breadcrumb = [
      {
        name : "Active projects",
        link : '/active-projects'
      },
      {
        name : "Latgale forest portfolio",
        link : ''
      }
    ]
    const tabs_data = [
      {
        name : "OFFERING DOCUMENTATION",
        active : true
      },
      {
        name : "FINANCIAL PROJECTIONS",
        active : false
      },
      {
        name : "PROPERTY MEDIA",
        active : false
      },
      {
        name : "GEOSPATIAL DATA",
        active : false
      }
    ]
    const [tabs, setTabs] = useState(tabs_data);
    function changeTab(index:any) {
        setTabs((prevTabs) =>
            prevTabs.map((tab, i) => ({
                ...tab,
                active: i === index,
            }))
        );
    }
    const multiimagedata = {
      title : "Property media",
      short : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      large : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      images : ["/Photo2.jpg","/Photo2.jpg","/Photo2.jpg","/Photo2.jpg"]
    }
    const singleimagedata = {
      title : "Title 2",
      short : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      large : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image : "/Photo2.jpg"
    }
  return (
    <>
      
      
      
      <div className="project-detail">
      <div className="fl"><Breadcrumb data={breadcrumb} /></div>
      <div className="username fr"><span>J</span>John Carter</div>
      <div className="clr"></div>
        <div className="space-30"></div>
        <div className="image">
          <img src={data.image} />
          <div className="caption">{data.image_label}</div>
        </div>
        <div className="space-30"></div>
        <div className="container">
          <div className="container-in">
            <div className="col-9 col-m-full col-mr-bottom-20 fl">
              <div className="project-name">{data.comingsoon?'To be announced':data.title}</div>
            </div>
            <div className="col-3 col-m-full fr">
              <Button text ={'INVEST'} link={''} active={true} call={openBuyShare}  />
            </div>
            <div className="clr"></div>
          </div>
        </div>
        <div className="container">
          <div className="container-in">
            <div className="col-12">
              <div className="project-description">
                {data.large}
              </div>
            </div>
          </div>
        </div>
        <div className="space-30"></div>
        <div className="container-in">
          {data.keyPoints.map((item_s, index) => (
            <div className="col-20-percent col-m-padding-right-0 fl" key={index}>
              <span className="colb">{item_s.name}</span>
              <span className="colc">{data.comingsoon?'TBA':item_s.value}</span>
            </div>
          ))}
          <div className="clr"></div>
        </div>
        <div className="space-30"></div>
        <ul className="tabular">
        {tabs.map((item_s, index) => (
          <li key={index} className={`${item_s.active?'active':''}`} onClick={() => changeTab(index)}>{item_s.name}</li>
        ))}
        </ul>
        <div className="clr"></div>
        {tabs.map((item_s, index) => (
          <div key={index}>
            {item_s.active ? 
            <div className="tabular-content">
              <MultiImageLayout data={multiimagedata} />
              <div className="space-30"></div>
              <SingleImageLayout data={singleimagedata} />
            </div>
            : null}
          </div>
        ))}
      </div>
      {buyShare ? <BuyShare config={buyShareCongig} close={closeBuyShare} /> : null}
    </>
  );
}
