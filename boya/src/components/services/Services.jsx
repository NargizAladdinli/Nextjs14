import Service from './Service';
import style from './_services.module.scss'

const Services = () => {
    return(
        <section className={style.services}>
            <div className="container">
                <h2>Our Services</h2>
                <div className="row g-3">
                    <Service/>
                </div>
            </div>
        </section>
    )
}
export default Services;