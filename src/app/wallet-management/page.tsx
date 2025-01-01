"use client"
import { useState } from 'react';
import Link from 'next/link';
import Button from "@/components/button";
import ProjectCard2 from '@/components/projectCard2';
import ClaimPopup from '@/components/ClaimPopup';
export default function Wallet() {
  const [carbon_credits, setCarbonCredits] = useState({
    emissions : "15 Co2 TONS",
    value : "750"
  });
  const [dividends_details, setDividendsDetails] = useState("150 EUROe")
  const [etree_details, setEtreeDetails] = useState("1500")
  const [carbon_credits_popup, setCarbonCreditsPopup] = useState(false);
  const [dividends_details_popup, setDividendsPopup] = useState(false);
  const [etrees_popup, setEtreesPopup] = useState(false);
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
  const __carbon_credits_details = {
    heading : "Claim carbon credits",
    list : [
      {
        tag : "Offset your emissions",
        display : carbon_credits.emissions
      },
      {
        tag : "Carbon credit dividends",
        display : carbon_credits.value+' EUROe'
      }
    ]
  }
  const __dividends_details = {
    heading : "Dividends",
    list : [
      {
        tag : "Claim all dividends",
        display : dividends_details
      }
    ]
  }
  const __etrees_details = {
    heading : "E-trees",
    list : [
      {
        tag : "Claim E-trees",
        display : etree_details
      }
    ]
  }
  const table_data = [
    {
      token_symbol : "UPW1",
      asset_name : "Oak tree house forest plantation",
      smart_contact : "tdgsbha37326dnsajkjd8",
      share_amount : "5",
      share_value : "500€",
      carbon_credits : "3",
      dividends_earned : "150 €"
    },
    {
      token_symbol : "UPW1",
      asset_name : "Oak tree house forest plantation",
      smart_contact : "tdgsbha37326dnsajkjd8",
      share_amount : "5",
      share_value : "500€",
      carbon_credits : "3",
      dividends_earned : "150 €"
    },
    {
      token_symbol : "UPW1",
      asset_name : "Oak tree house forest plantation",
      smart_contact : "tdgsbha37326dnsajkjd8",
      share_amount : "5",
      share_value : "500€",
      carbon_credits : "3",
      dividends_earned : "150 €"
    },
    {
      token_symbol : "UPW1",
      asset_name : "Oak tree house forest plantation",
      smart_contact : "tdgsbha37326dnsajkjd8",
      share_amount : "5",
      share_value : "500€",
      carbon_credits : "3",
      dividends_earned : "150 €"
    },
    {
      token_symbol : "UPW1",
      asset_name : "Oak tree house forest plantation",
      smart_contact : "tdgsbha37326dnsajkjd8",
      share_amount : "5",
      share_value : "500€",
      carbon_credits : "3",
      dividends_earned : "150 €"
    },
    {
      token_symbol : "UPW1",
      asset_name : "Oak tree house forest plantation",
      smart_contact : "tdgsbha37326dnsajkjd8",
      share_amount : "5",
      share_value : "500€",
      carbon_credits : "3",
      dividends_earned : "150 €"
    },
    {
      token_symbol : "UPW1",
      asset_name : "Oak tree house forest plantation",
      smart_contact : "tdgsbha37326dnsajkjd8",
      share_amount : "5",
      share_value : "500€",
      carbon_credits : "3",
      dividends_earned : "150 €"
    },
    {
      token_symbol : "UPW1",
      asset_name : "Oak tree house forest plantation",
      smart_contact : "tdgsbha37326dnsajkjd8",
      share_amount : "5",
      share_value : "500€",
      carbon_credits : "3",
      dividends_earned : "150 €"
    },
    {
      token_symbol : "UPW1",
      asset_name : "Oak tree house forest plantation",
      smart_contact : "tdgsbha37326dnsajkjd8",
      share_amount : "5",
      share_value : "500€",
      carbon_credits : "3",
      dividends_earned : "150 €"
    },
    {
      token_symbol : "UPW1",
      asset_name : "Oak tree house forest plantation",
      smart_contact : "tdgsbha37326dnsajkjd8",
      share_amount : "5",
      share_value : "500€",
      carbon_credits : "3",
      dividends_earned : "150 €"
    }
  ]
  return (
    <>
      <div className="clr"></div>
      <div className="walletmanagement">
        <div className="container">
          <div className="container-in">
            <div className="col-12">
              <h1>Wallet management
                <div className="username fr"><span>J</span>John Carter</div>
              </h1>
            </div>
          </div>
        </div>
        <div className="space-30"></div>
        <div className="outerboxshadow">
          <div className="container">
            <div className="container-in">
              <div className="col-8 col-m-full fl">
                <div className="heading">Balance</div>
              </div>
              <div className="col-4 text-align-right fr hideonmobile">
                <span 
                  className="guides"
                  style={{ cursor: "pointer" }}
                >
                  WALLET MANAGEMENT GUIDES
                </span>
              </div>
              
              <div className="clr"></div>
            </div>
            <div className="space-20"></div>
            <div className="container-in">
              <div className='col-20-percent fl walletclms col-m-full col-mr-bottom-30'>
                <div className="tag">Wallet</div>
                <div className="value">wdbshb473y43uhf23fdsd</div>
                <span>Change</span>
              </div>
              <div className='col-20-percent fl walletclms col-m-full col-mr-bottom-30'>
                <div className="tag">Entity</div>
                <div className="value">SIA UPWOOD</div>
              </div>
              <div className='col-20-percent fl walletclms col-m-full col-mr-bottom-30'>
                <div className="tag">Carbon credits</div>
                <div className="value">{carbon_credits.emissions} = {carbon_credits.value}€</div>
                <span onClick={() => setCarbonCreditsPopup(true)}>Claim</span>
              </div>
              <div className='col-20-percent fl walletclms col-m-full col-mr-bottom-30'>
                <div className="tag">Dividends</div>
                <div className="value">{dividends_details}</div>
                <span onClick={() => setDividendsPopup(true)}>Claim</span>
              </div>
              <div className='col-20-percent fl walletclms col-m-full'>
                <div className="tag">E-trees</div>
                <div className="value">{etree_details}</div>
                <span onClick={() => setEtreesPopup(true)}>Claim</span>
              </div>
              <div className="clr"></div>
            </div>
            <div className="space-30"></div>
            <div className='col-12 showonmobile text-align-center'>
                <span 
                  className="guides" 
                  style={{ cursor: "pointer" }}
                >
                  WALLET MANAGEMENT GUIDES
                </span>
              </div>
              <div className="space-20 showonmobile"></div>
          </div>
        </div>
        <div className="space-30"></div>
        <div className="outerboxshadow">
          <div className="container">
            <div className="container-in">
              <div className="col-6 col-m-full fl">
                <div className="heading">Token list</div>
              </div>
              <div className="col-6 text-align-right fr hideonmobile">
                <span className="guides" style={{ cursor: "pointer" }}>
                  Export transaction history
                </span>
                <span className="guides margin" style={{ cursor: "pointer" }}>
                  Export token list
                </span>
              </div>
              <div className="clr"></div>
            </div>
          </div>
          <div className="container">
            <div className="container-in">
              <div className="col-12">
                <div className='table'>
                <table cellSpacing={0}>
                  <thead>
                    <tr>
                      <th>Token symbol</th>
                      <th>Asset name</th>
                      <th>Smart contract address</th>
                      <th>Share amount</th>
                      <th>Share value</th>
                      <th>Carbon credits</th>
                      <th>Dividends earned</th>
                    </tr>
                  </thead>
                  <tbody>
                  {table_data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.token_symbol}</td>
                      <td>{item.asset_name}</td>
                      <td>{item.smart_contact}</td>
                      <td>{item.share_amount}</td>
                      <td>{item.share_value}</td>
                      <td>{item.carbon_credits}</td>
                      <td>{item.dividends_earned}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
                </div>
                <div className='pagignation'>
                  <ul>
                    <li className='disabled'>{'<'}</li>
                    <li className='active'>{'1'}</li>
                    <li>{'2'}</li>
                    <li>{'3'}</li>
                    <li>{'4'}</li>
                    <li>{'5'}</li>
                    <li>{'>'}</li>
                  </ul>
                </div>
                <div className="space-30"></div>
              </div>
              <div className='col-12 showonmobile text-align-center'>
                <span className="guides" style={{ cursor: "pointer" }}>
                  Export transaction history
                </span>
                <span className="guides margin" style={{ cursor: "pointer" }}>
                  Export token list
                </span>
              </div>
              <div className="space-20 showonmobile"></div>
            </div>
          </div>
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
      {carbon_credits_popup ? <ClaimPopup config={__carbon_credits_details} close={() => setCarbonCreditsPopup(false)} /> : null}
      {dividends_details_popup ? <ClaimPopup config={__dividends_details} close={() => setDividendsPopup(false)} /> : null}
      {etrees_popup ? <ClaimPopup config={__etrees_details} close={() => setEtreesPopup(false)} /> : null}
    </>
  );
}
