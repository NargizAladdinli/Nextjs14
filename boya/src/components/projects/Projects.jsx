import Image from "next/image";
import style from "./_projects.module.scss";
import pors from "@/../../public/images/image1.png";
import bulding from "@/../../public/images/image 17.png";
import rectangle from "@/../../public/images/Rectangle 14.png";
import Link from "next/link";

const Projects = () => {
  return (
    <section className={style.projects}>
      <div className="container">
        <h2>Our Projects</h2>
        <div className="row g-3">
          <div className="col-md-6 col-lg-6">
            <div className={style.image}>
              <Image src={pors} />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 d-none d-md-block">
            <div className={style.image}>
              <Image src={pors} />
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className={style.image}>
              <Image src={rectangle} />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 d-none d-lg-block">
            <div className={style.image}>
              <Image src={bulding} />
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className={style.image}>
              <Image src={rectangle} />
            </div>
          </div>
        </div>
        <div className={style.projectLinks}>
          <Link href="#">
            All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="9"
              viewBox="0 0 18 9"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.64502 4.87476C0.64502 4.59861 0.868877 4.37476 1.14502 4.37476L17.145 4.37476C17.4212 4.37476 17.645 4.59861 17.645 4.87476C17.645 5.1509 17.4212 5.37476 17.145 5.37476L1.14502 5.37476C0.868877 5.37476 0.64502 5.1509 0.64502 4.87476Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.2915 1.0212C13.4867 0.82594 13.8033 0.82594 13.9986 1.0212L17.8521 4.87476L13.9986 8.72831C13.8033 8.92357 13.4867 8.92357 13.2915 8.72831C13.0962 8.53305 13.0962 8.21647 13.2915 8.0212L16.4379 4.87476L13.2915 1.72831C13.0962 1.53305 13.0962 1.21646 13.2915 1.0212Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Projects;
