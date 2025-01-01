"use client";
import Button from "@/components/button";
interface KeyItem {
  "name": string;
  "value": string;
}
interface ItemProps {
  item : {
    id:string,
    image : string,
    image_label:string,
    title : string,
    short : string,
    keyPoints : KeyItem[],
    share_price : string,
    share_available : string
  }
}
export default function ProjectCard2({item} : ItemProps) {
  return (
    <>
    <div className="project-card">
      <div className="container">
        <div className="container-in">
          <div className="col-12">
            <div className="image">
              <img src={item.image} />
              <div className="caption">{item.image_label}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container`}>
        <div className="container-in">
        <div className="col-12">
          <div className="project-name">{item.title}</div>
          <div className="project-description">{item.short}</div>
        </div>
      </div>
      <div className="container-in">
        {item.keyPoints.map((item_s, index) => (
          <div className="col-4 col-m-padding-right-0 fl" key={index}>
            <span className="colb">{item_s.name}</span>
            <span className="colc">{item_s.value}</span>
          </div>
        ))}
        <div className="clr"></div>
      </div>
      <div className="container-in">
        <div className="col-5 col-m-full col-mr-bottom-20 fl">
          <Button text={'SELL SHARES'} link={''} active={false}   />
        </div>
        <div className="col-5 col-m-full fr">
          <Button text ={'INVEST MORE'} link={''} active={true}   />
        </div>
        <div className="clr"></div>
      </div>
      </div>
    </div>
    </>
  );
}
