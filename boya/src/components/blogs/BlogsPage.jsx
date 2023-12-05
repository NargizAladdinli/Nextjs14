'use client'
import style from './_blogs.module.scss'
import { getPosts } from '@/app/libs/post';
import Blog from './Blog';

const BlogPage = async () => {
    // const {blogs} = useContext(BlogContext)
    const blogs = await getPosts()
    return(
        <section className={style.blogs}>
            <div className="container">
                <div className="row g-3">
                    {
                  blogs ?  blogs.map((item) => {
                        return(
                            <Blog key={item.id} items={item}/>
                        ) 
                    }) : "nine"}
                </div>
            </div>
        </section>
    )
}
export default BlogPage;