"use client"
import Link from 'next/link';
import { usePathname } from "next/navigation";
import Image from "next/image";
interface NavigationItem {
  "name": string;
  "url": string;
  "icon-normal": string;
  "icon-active": string;
}
interface VerticleNavProps {
  data :NavigationItem[],
  closeMenu?: () => void;
}
export default function VerticleNav({ data, closeMenu } : VerticleNavProps ) {
  const pathname = usePathname();
  return (
    <div className='verticle-navigation'>
      <ul>
          {data.map((item, index) => (
            <li key={index} className={pathname === item.url ? 'active' : ''} onClick={closeMenu}>
              <Image
                className='navigation-icon'
                src={pathname === item.url ? item['icon-active'] : item['icon-normal']}
                alt=""
                width={24}
                height={24}
                priority
              />
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
