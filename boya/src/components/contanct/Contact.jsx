import Link from "next/link";
import style from "./_contact.module.scss";

const Contact = () => {
  return (
    <section className={style.contact}>
      <div className="container">
        <div className="row g-3">
          <div className="col-md-6 col-lg-6">
            <div className={style.content}>
                <div className={style.title}>
                    <h3>Contact</h3>
                    <h2>Information</h2>
                </div>
                <div className={style.item}>
                    <h4>Company Name</h4>
                    <p>1234 Sample Street Austin Texas 76401</p>
                </div>
                <div className={style.item}>
                    <h4>Company Name</h4>
                </div>
                <div className={style.item}>
                <p>sampleemail@gmail.com</p>
                </div>
                <div className={`${style.link} d-none d-md-block`}>
                    <Link href="#">Contact US</Link>
                </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className={style.maps}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24281.338360140086!2d50.12342445!3d40.47156379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2saz!4v1701360309683!5m2!1sru!2saz"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className={`${style.link} d-block d-md-none`}>
                    <Link href="#">Contact US</Link>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
