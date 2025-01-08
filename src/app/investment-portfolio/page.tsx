"use client"
import { useState } from 'react';
import Link from 'next/link';
import Button from "@/components/button";
import ProjectCard2 from '@/components/projectCard2';
import PortfolioValueChart from '@/components/chart';
export default function InvestmentPortfolio() {
  const data = [
    {
      id: "1516",
      image : "/Photo2.jpg",
      image_label : "GROW",
      title : "Latgale forest portfolio",
      short : "Portfolio of 7 forest plantations in Latgale region.",
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
        }
      ],
      share_price : "108",
      share_available : "900"
    },
    {
      id: "1920",
      image : "/Photo2.jpg",
      image_label : "GROW",
      title : "Latgale forest portfolio",
      short : "Portfolio of 7 forest plantations in Latgale region.",
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
        }
      ],
      share_price : "98",
      share_available : "400"
    }
  ];
  return (
    <>
      <div className="clr"></div>
      <div className="investmentportfolio">
        <div className="container">
          <div className="container-in">
            <div className="col-12">
              <h1>Investment Portfolio
                <div className="username fr"><span>J</span>John Carter</div>
              </h1>
            </div>
          </div>
        </div>
        <div className="space-30"></div>
        <div className="outerboxshadow">
          <div className="container">
            <div className="container-in">
              <div className='col-20-percent fl investmentms col-m-full col-mr-bottom-30'>
                <div className="tag">Locked token value</div>
                <div className="value">99 000 €</div>
              </div>
              <div className='col-20-percent fl investmentms col-m-full col-mr-bottom-30'>
                <div className="tag">Portfolio value</div>
                <div className="value">13 000 €</div>
              </div>
              <div className='col-20-percent fl investmentms col-m-full col-mr-bottom-30'>
                <div className="tag">Yearly portfolio growth</div>
                <div className="value">+1000€</div>
              </div>
              <div className='col-20-percent fl investmentms col-m-full col-mr-bottom-30'>
                <div className="tag">Return on investment</div>
                <div className="value">8.4%</div>
              </div>
              <div className='col-20-percent fl investmentms col-m-full'>
                <div className="tag">Carbon tons offset</div>
                <div className="value">5t</div>
              </div>
              <div className="clr"></div>
            </div>
            <div className="space-30"></div>
          </div>
        </div>
        <div className="space-30"></div>
        <div className="outerboxshadow">
          <div className="container">
            <div className="container-in">
              <div className="col-8 col-m-full fl">
                <div className="heading">Portfolio value</div>
              </div>
              <div className="col-4 fr">

              </div>
              <div className="clr"></div>
            </div>
          </div>
          <div className="space-20"></div>
          <div className="container">
            <div className="container-in">
              <div className="col-12">
                <div className="chart">
                  <div className="chart-in">
                    <PortfolioValueChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-30"></div>
        </div>
        <div className="space-30"></div>
      </div>
      <div className="projects">
      <div className="container">
        <div className="container-in">
          {data.map((item, index) => (
            <div className="col-6 col-m-full fl" key={index}>
              <ProjectCard2 item={item} />
            </div>
          ))}
          <div className="clr"></div>
        </div>
      </div>
      </div>
    </>
  );
}
