import style from "./_swiper.module.scss";
import Home from "../../../public/images/homeBanner.png";
import Image from "next/image";

const Swipers = () => {
  return (
    <section className={style.slider}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className={style.image}>
              <Image src={Home} width={100} height={100} alt="home banner" />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className={style.content}>
              <h1>
                Unlock your home’s potential: order free color chips online.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swipers;
