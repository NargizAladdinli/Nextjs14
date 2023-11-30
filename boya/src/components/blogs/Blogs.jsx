'use client'
import { useContext } from 'react';
import style from './_blogs.module.scss'
import { BlogContext } from '@/context/blogs.context';
import SingleBlog from './Blog';

const BlogPage = () => {
    const {blogs} = useContext(BlogContext)
    return(
        <section className={style.blogs}>
            <div className="container">
                <div className="row g-3">
                    {blogs.map((item) => {
                        return(
                            <SingleBlog key={item.id} items={item}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default BlogPage;