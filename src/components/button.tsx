import Image from "next/image";
import Link from 'next/link';
interface ButtonProps {
  text :string,
  link :string,
  active:boolean,
  style?:string,
  disabled?:boolean,
  icon?:string,
  call?: () => void;
}
export default function Button({ text, link, active, style, disabled, icon, call }:ButtonProps ) {
  return (
    <>
    {link === '' ? 
      <span className={`button ${style} ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`} onClick={call}>{icon && icon!== '' ? 
        <Image
        src={icon}
        alt="Description of the image"
        width={14}
        height={14}
      />
       : null}{text}</span>
    :
      <Link href={link} className={`button ${style} ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`}>{icon && icon!== '' ? 
        <Image
        src={icon}
        alt="Description of the image"
        width={14}
        height={14}
      /> : null} {text}</Link>
    }
    </>
  );
}
