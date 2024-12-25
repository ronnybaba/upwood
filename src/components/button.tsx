import Image from "next/image";
import Link from 'next/link';
interface ButtonProps {
  text :string,
  link :string,
  active:Boolean,
  call?: () => void;
}
export default function Button({ text, link, active, call }:ButtonProps ) {
  return (
    <>
    {link === '' ? 
      <span className={`button ${active ? 'active' : ''}`} onClick={call}>{text}</span>
    :
      <Link href={link} className={`button ${active ? 'active' : ''}`}>{text}</Link>
    }
    </>
  );
}
