import ProjectCard from "@/components/projectCard";
import Image from "next/image";

export default function ActiveProjects() {
  const data = [
    {
      id: "1516",
      comingsoon : false,
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
      comingsoon : true,
      image : "/Photo2.jpg",
      image_label : "",
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
      <div className="projects">
        <div className="container">
          <div className="container-in">
            <div className="col-12">
              <h1>Active projects
                <div className="username fr"><span>J</span>John Carter</div>
              </h1>
              
            </div>
          </div>
        </div>
        <div className="space-30"></div>
        <div className="container">
          <div className="container-in">
            {data.map((item, index) => (
              <div className="col-6 col-m-full fl" key={index}>
                <ProjectCard item={item} />
              </div>
            ))}
            <div className="clr"></div>
          </div>
        </div>
      </div>
    </>
  );
}
