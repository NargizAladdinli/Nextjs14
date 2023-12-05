import Image from 'next/image';
import style from './_about.module.scss'
import Untitled from '@/../../public/images/Untitled.jpg'

const AboutUs = () => {
    return(
        <section className={style.aboutus}>
            <div className="container">
                <div className="row g-3 align-items-center">
                    <div className="col-md-6 col-lg-7 d-none d-md-block">
                        <div className={style.image}>
                            <Image src={Untitled}/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <div className={style.title}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs;