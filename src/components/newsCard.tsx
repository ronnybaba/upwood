"use client";
import Link from 'next/link';
interface ItemProps {
  item : {
    id:string,
    image : string,
    image_label:string,
    title : string,
    short : string
  }
}
export default function NewsCard({item} : ItemProps) {
  return (
    <>
    <div className="news-card">
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
          <div className="news-name">{item.title}</div>
          <div className="news-description">{item.short}</div>
        </div>
      </div>
      <div className="container-in text-align-right">
        <div className="col-12">
          <Link href={`/news-details/${item.id}`} className="read">READ FULL ARTICLE</Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
