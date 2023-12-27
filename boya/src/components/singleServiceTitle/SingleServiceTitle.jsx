import style from './_singleservicetitle.module.scss';

const SingleServiceTitle = ({children}) => {
    return(
        <section className={style.title}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className={style.cart}>
                            <h3>Fəsad işləri</h3>
                            <p>Boyaların tərkibi və piqmentlərin davamlılığı nəzərə alınaraq su əsaslı boya ilə rəngləmə işləri həyata keçirilir.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 d-none d-md-block">
                        <div className={style.image}>
                           <img src="https://s3-alpha-sig.figma.com/img/d37e/124a/23bc7512aabb96d158dbac6d898734fb?Expires=1702857600&Signature=o--6htLEtqjJ4kKv4pm2p~8OCxRoD6AVSKr7ctqYE10Nw1hFNcvJLZpgKEu5JwprbC401Tqi6loM3wFWBLUT~p392nGvHPQQory1tAgSxU2-XdV453hDgPXQs6ZUVG-0njIP4H8ESoMCUDUYHY22CPa9HEvG~xE3wDTN2qwvo-khVKp25o8DnWmjtfzSvXzjILgPuJ-fnCyeP6FmyzsMPHO7dsN9lajMkxrPZsnjrV~zs4UlbvDxEOBCvoY5K3KyPWNZJl2~IIeWm04i-~c9kX3xYN9tAAwiiPj~5jLntOib4CmyIfoe~UwxBCgatbFH0SlK1hU8PpfhIAWc9Tj42Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleServiceTitle;