import style from './_services.module.scss';
import Block from '../../../public/images/Block.png'
import Image from 'next/image';
import Link from 'next/link';

const Service = () => {
    return(
        <>
        <div className="col-md-6 col-lg-6">
            <div className={style.image}>
                <Image src={Block} width={100} height={100} alt='Block'/>
            </div>
        </div>
        <div className="col-md-6 col-lg-6">
            <div className={style.content}>
                <div className={style.item}>
                    <h3>Fasad işləri</h3>
                    <p>Boyaların tərkibi və piqmentlərin davamlılığı nəzərə alınaraq su əsaslı boya ilə rəngləmə işləri həyata keçirilir.</p>
                </div>
                <div className={style.viev}>
                    <Link href="#">View collection</Link>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-6">
        <div className={style.content}>
                <div className={style.item}>
                    <h3>Zəmin sistemi</h3>
                    <p>Ən kiçikdən böyüyə qədər əksər istehsal sahələri mexaniki və kimyəvi müqavimətdən üstün olan epoksi sistemlərə üstünlük verir.</p>
                </div>
                <div className={style.viev}>
                    <Link href="#">View collection</Link>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-6">
            <div className={style.image}>
                <Image src={Block} width={100} height={100} alt='Block'/>
            </div>
        </div>
        </>
    )
}
export default Service;
