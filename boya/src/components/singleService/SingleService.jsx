import SingleServiceTitle from "../singleServiceTitle/SingleServiceTitle";
import style from "./_singleservice.module.scss";

const SingleService = () => {
  return (
    <>
    <SingleServiceTitle/>
    <section className={style.single}>
      <div className="container">
        <div className="row aling-items-center">
          <div className="col-lg-6">
            <div className={style.content}>
              <p>
              Yenilənmiş boya qatı öz evinizə bir daha aşiq olmağın ən asan yoludur!
              </p>
              <p>

Məkanların fasad boyası villaların və fərdi evlərin daxili boyaları qədər vacib olmalıdır. Xarici rəngi seçərkən çox diqqətli olmalısınız, çünki xarici görünüşün rəngləri ilk baxışdan məkan haqqında ilkin təəssüratı yaradacaqdır.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={style.image}>
              <img src="https://s3-alpha-sig.figma.com/img/9e21/c4bd/6d1e362df8a4df099675cf001b49cb08?Expires=1702857600&Signature=XfJbwb3Jgq4qM4pE85vjOB-Sd1-xl-I0eu-PAysMbsF0ik-xNUdgrdzo3VEMHi5aBqYaV9RzgncYZ-b3cBLcnfyVVFeTdKuyJY9PkugDOEN-IvqpIp1tnTfQz7bTTqFStNRFwGpqutA0dpqlibYQWlakSbDoZs6OvfJ5pJMfz0KEEV8q6K7oNtrsrrgytYcao444W~7YEyMj2RisjGoS~sskcoUnCPJwsYR7HlVE7IeQcOsf-TPJOnToCBxO-LGM0sdPL0Z63p~jipIOhhM7JH2Gmco0RvLhUtenA~z9-QleEEMq-C5F4UtcyHvRuQI2DokctbYtffTWrR0e~OXK7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SingleService;
