import { getSinglePost } from "@/app/libs/post"
import style from './_singleblog.module.scss';


const SingleBlog = async ({params}) => {

    const blog = await getSinglePost(params)

    return(
        <div className="container">
            <div className={style.title}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className={style.bgcolor}>
                            <h4>Nec feugiat in fermentum</h4>
                            <span>August 1, 2023</span>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-md-block">
                        <div className={style.image}>
                            <img src="https://s3-alpha-sig.figma.com/img/adbb/46d5/5c3535e28597a8789235e3620b6945f8?Expires=1702857600&Signature=BRr159bmE5k~mw5GJ44TVHxLboDvOMldIIi5wUsrT14wOO~sC1a54pV3M73hxulah7GdumS2O~ISklfv6KkNy9SoDgLzk24chHAy0FFdVWfJAJpTM0dQ6KJe7AyuiB-~AP9jMYN2iPeKldiMN0NFHD5qwYNLLpdd8NjijRYd3t65sCuMtoVwkw0-Oay4PviOLEfZS7olfWKqixKg7VxpiG46Y4wwBPYhEmIMGTAmhpzVpctuDNgULXjupM1-J8qEFuPXlNGeN6l4b0RK2AEuYJKFVzy4fte1TsAF3jwBhAOIICvQ1yyaRQ~Vr4i801Rl8-DVykSMbobsVXrwUNenGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
        </div>
    )
}

export default SingleBlog;