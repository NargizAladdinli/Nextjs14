import Link from 'next/link';
import style from './_blogs.module.scss'

const SingleBlog = ({items}) => {
    const {img, body,title} = items
    return(
        <div className="col-md-6 col-lg-6">
            <div className={style.carts}>
                <Link href="#">
                <div className={style.image}>
                    <img src={img} alt="" />
                </div>
                <div className={style.content}>
                    <span>{body}</span>
                    <p>{title}</p>
                </div>
                </Link>
            </div>
        </div>
    )
}
export default SingleBlog;