import Link from 'next/link'
import style from './_mobile.module.scss'
import Image from 'next/image'
import Logo from '../../../../public/images/logo.png'
import {LiaAngleDownSolid} from "react-icons/lia"

const Mobile = ({active, setactive}) => {
    return(
        <div className={`${active ? style.openMenu : style.closemenu}`}>
            <div className={style.flex}>
                <div className={style.logo}>
                    <Image src={Logo} width={68} height={34}/>
                </div>
                <div className={style.btn} onClick={() => setactive(!active)}>
                    <button className={style.close}></button>
                </div>
            </div>
            <div className={style.menuMobile}>
                <ul className={style.listMobile}>
                    <li>
                        <Link href="#">Məhsullar <LiaAngleDownSolid/></Link>
                        <ul className={style.dropdown}>
                            <li>
                                <Link href="#">Mebellər üçün məhsullar</Link>
                            </li>
                            <li>
                                <Link href="#">Zəmin örtükləri</Link>
                            </li>
                            <li>
                                <Link href="#">Su izolyasiyası məhsulları</Link>
                            </li>
                            <li>
                                <Link href="#">Sənaye sahələri üçün məhsulla</Link>
                            </li>
                            <li>
                                <Link href="#">Həlledicilər</Link>
                            </li>
                            <li>
                                <Link href="#">Cilalayıcılar</Link>
                            </li>
                            <li>
                                <Link href="#">İnşaat materialları</Link>
                            </li>
                            <li>
                                <Link href="#">Sərt köpük sistemləri</Link>
                            </li>
                            <li>
                                <Link href="#">Boya avadanlıqları</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#">Xidmətlər <LiaAngleDownSolid/></Link>
                    </li>
                    <li>
                        <Link href="#">Layihələr</Link>
                    </li>
                    <li>
                        <Link href="#">Xəbərlər</Link>
                    </li>
                    <li>
                        <Link href="#">Haqqımızda</Link>
                    </li>
                    <li>
                        <Link href="#">Əlaqə</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Mobile