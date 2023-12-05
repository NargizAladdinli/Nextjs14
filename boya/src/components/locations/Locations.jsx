import Link from "next/link";
import style from "./_locations.module.scss";
import Location from "./Location";

const Locations = () => {
  return (
    <section className={style.locations}>
      <div className="container">
        <div className="row g-3">
          <Location/>
        </div>
      </div>
    </section>
  );
};
export default Locations;
