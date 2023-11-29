'use client'
import style from './_header.module.scss'
import Logo from "./../../../public/images/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import {LiaAngleDownSolid} from "react-icons/lia"
import { useState } from 'react'
import Mobile from './mobile/Mobile'

const Header = () => {
    const [active, setactive] = useState(false);
    return(
        <header className={style.header}>
            <div className="container">
                <div className={style.flexbl}>
                    <div className={style.logo}>
                    <Image src={Logo} width={200} height={100} alt='logo'/>
                    </div>
                    <nav className={style.menu}>
                        <ul className={style.menuList}>
                            <li>
                                <Link href="/">Məhsullar <LiaAngleDownSolid/></Link>
                            </li>
                            <li>
                                <Link href="/">Xidmətlər <LiaAngleDownSolid/></Link>
                            </li>
                            <li>
                                <Link href="/">Layihələr</Link>
                            </li>
                            <li>
                                <Link href="/">Xəbərlər</Link>
                            </li>
                            <li>
                                <Link href="/">Haqqımızda</Link>
                            </li>
                            <li>
                                <Link href="/">Əlaqə</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={style.lang}>
                        <Link href='#'>English <LiaAngleDownSolid/></Link>
                    </div>
                    <div className={style.number}>
                        <Link href="#">+994 51 555 55 55</Link>
                    </div>
                    <div className={style.btn} onClick={() => setactive(!active)}>
                    <button className={`${active ? style.close : style.open}`}><span></span></button>
                    </div>
                </div>
            </div>
            <Mobile/> 
        </header>
    )
}
export default Header