import Service from './Service';
import style from './_services.module.scss'

const Services = () => {
    return(
        <section className={style.services}>
            <div className="container">
                <div className="row g-4">
                    <Service/>
                </div>
            </div>
        </section>
    )
}
export default Services;