import style from './_questions.module.scss'

const Questions = () => {
    return(
        <section className={style.questions}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className={style.carts}>
                            <div className={style.border}></div>
                            <span>01.</span>
                            <h3>Biz kimik?</h3>
                            <p>2003-cü ildə təsis edilmiş "Katsan Group" MMC mebel, inşaat, sənaye və digər sahələrdə tələb olunan istənilən növ boyaların satışını həyata keçirir.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={style.carts}>
                            <div className={style.border}></div>
                            <span>02.</span>
                            <h3>Vəzifəmiz</h3>
                            <p>Müştəri məmnuniyyətini nəzərə alaraq keyfiyyətli məhsulların satışını həyata keçirməkdir.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={style.carts}>
                            <div className={style.border}></div>
                            <span>03.</span>
                            <h3>Məqsədimiz</h3>
                            <p>Məqsədimiz dünya standartlarına uyğun məhsullarını sizlərə təqdim etməkdir.</p>
                            <p>İlk fəaliyyətinə Türkiyə Cümhuriyyətindən boya məhsullarının idxal və topdan satışı ilə başlayan şirkətimiz qısa müddət ərzində inkişaf edərək yüksək səviyyəli xidməti ilə seçilən müasir ticarət şirkətinə çevrilmiş və əməkdaşlıq etdiyi ölkələrin siyahısına BƏƏ, Çin, İran , Rusiya, İtaliya kimi İstehsalçı ölkələri də əlavə etmişdir.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={style.carts}>
                            <div className={style.border}></div>
                            <span>04.</span>
                            <h3>Məhsullarımız</h3>
                            <ul>
                                <li>
                                    <span>dünya standartlarına uyğunluğu;</span>
                                </li>
                                <li>
                                    <span>yüksək keyfiyyəti;</span>
                                </li>
                                <li>
                                    <span>gigiyenik və təhlükəsizlik göstəricilərinin üstünlüyünə görə satış bazarında digərlərindən fərqlənir.</span>
                                </li>
                            </ul>
                            <p>"Katsan Group" MMC Bakı şəhərində eləcə də Azərbaycanın bütün bölgələrində distributoru olduğu şirkətlərin brend məhsullarının satışını təşkil edir.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Questions;