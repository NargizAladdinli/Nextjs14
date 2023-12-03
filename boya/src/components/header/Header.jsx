"use client";
import style from "./_header.module.scss";
import Logo from "./../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { LiaAngleDownSolid } from "react-icons/lia";
import { useState } from "react";
import Mobile from "./mobile/Mobile";

const Header = () => {
  const [active, setactive] = useState(false);
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.flexbl}>
          <div className={style.logo}>
           <Link href="/"> <Image src={Logo} width={200} height={100} alt="logo" /></Link>
          </div>
          <nav className={style.menu}>
            <ul className={style.menuList}>
              <li onClick={() => {setactive(!active)}}>
                <Link href="/categories">
                  Məhsullar <LiaAngleDownSolid />
                </Link>
                <ul className={`${active ? style.dropdown : 'd-none'}`}>
                  <li className={style.dropli}>
                    <Link href="#">Mebellər üçün məhsullar</Link>
                  </li>
                  <li className={style.dropli}>
                    <Link href="#">Zəmin örtükləri</Link>
                  </li>
                  <li className={style.dropli}>
                    <Link href="#">Su izolyasiyası məhsulları</Link>
                  </li>
                  <li className={style.dropli}>
                    <Link href="#">Sənaye sahələri üçün məhsullar</Link>
                  </li>
                  <li className={style.dropli}>
                    <Link href="#">Həlledicilər</Link>
                  </li>
                  <li className={style.dropli}>
                    <Link href="#">Cilalayıcılar</Link>
                  </li>
                  <li className={style.dropli}>
                    <Link href="#">İnşaat materialları</Link>
                  </li>
                  <li className={style.dropli}>
                    <Link href="#">Sərt köpük sistemləri</Link>
                  </li>
                  <li className={style.dropli}>
                    <Link href="#">Boya avadanlıqları</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/services">
                  Xidmətlər <LiaAngleDownSolid />
                </Link>
              </li>
              <li>
                <Link href="/">Layihələr</Link>
              </li>
              <li>
                <Link href="/blogs">Xəbərlər</Link>
              </li>
              <li>
                <Link href="/about">Haqqımızda</Link>
              </li>
              <li>
                <Link href="/contacts">Əlaqə</Link>
              </li>
            </ul>
          </nav>
          <div className={style.lang}>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M10.6873 18.3334C15.2897 18.3334 19.0207 14.6024 19.0207 10C19.0207 5.39765 15.2897 1.66669 10.6873 1.66669C6.08496 1.66669 2.354 5.39765 2.354 10C2.354 14.6024 6.08496 18.3334 10.6873 18.3334Z"
                  stroke="#2B2A29"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.35417 2.5H8.1875C6.5625 7.36667 6.5625 12.6333 8.1875 17.5H7.35417"
                  stroke="#2B2A29"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1875 2.5C14.8125 7.36667 14.8125 12.6333 13.1875 17.5"
                  stroke="#2B2A29"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.1875 13.3333V12.5C8.05417 14.125 13.3208 14.125 18.1875 12.5V13.3333"
                  stroke="#2B2A29"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.1875 7.5C8.05417 5.875 13.3208 5.875 18.1875 7.5"
                  stroke="#2B2A29"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              English
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M12.634 6.2533H8.48066H4.74067C4.10067 6.2533 3.78067 7.02663 4.234 7.47996L7.68733 10.9333C8.24067 11.4866 9.14067 11.4866 9.694 10.9333L11.0073 9.61996L13.1473 7.47996C13.594 7.02663 13.274 6.2533 12.634 6.2533Z"
                  fill="#2B2A29"
                />
              </svg>
            </Link>
          </div>
          <div className={style.number}>
            <Link href="#">+994 51 555 55 55</Link>
          </div>
          <div className={style.btn} onClick={() => setactive(!active)}>
            <button className={style.open}>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <Mobile active={active} setactive={setactive} />
    </header>
  );
};
export default Header;
