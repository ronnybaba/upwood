"use client"
import ProjectCard2 from '@/components/projectCard2';
import PortfolioValueChart from '@/components/chart';
import AuthGuard from "@/components/AuthGuard";
import Username from '@/components/Username';
function InvestmentPortfolio() {
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
  const topvalues = {
    locked_token_value : "99 000 €",
    portfolio_value : "13 000 €",
    yearly_portfolio_growth_value : "+1000€",
    return_investment_value : "8.4%",
    carbon_tons_value : "5t"
  }
  return (
    <>
      <div className="clr"></div>
      <div className="investmentportfolio">
        <div className="container">
          <div className="container-in">
            <div className="col-12">
              <h1>Investment Portfolio
                <Username />
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
                <div className="value">{topvalues.locked_token_value}</div>
              </div>
              <div className='col-20-percent fl investmentms col-m-full col-mr-bottom-30'>
                <div className="tag">Portfolio value</div>
                <div className="value">{topvalues.portfolio_value}</div>
              </div>
              <div className='col-20-percent fl investmentms col-m-full col-mr-bottom-30'>
                <div className="tag">Yearly portfolio growth</div>
                <div className="value">{topvalues.yearly_portfolio_growth_value}</div>
              </div>
              <div className='col-20-percent fl investmentms col-m-full col-mr-bottom-30'>
                <div className="tag">Return on investment</div>
                <div className="value">{topvalues.return_investment_value}</div>
              </div>
              <div className='col-20-percent fl investmentms col-m-full'>
                <div className="tag">Carbon tons offset</div>
                <div className="value">{topvalues.carbon_tons_value}</div>
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
export default function InvestmentPortfolioPage() {
  return (
    <AuthGuard>
      <InvestmentPortfolio />
    </AuthGuard>
  );
}