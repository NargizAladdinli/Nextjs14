'use client'
import { useEffect, useState } from 'react';
import style from './_categories.module.scss';

const Categorie = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async() => {
            const res = await fetch('https://json-server-tan-kappa.vercel.app/categories');
            const data = await res.json();
            setPost(data)
        }
        fetchPost()
    }, [])
    return(
        <section className={style.categories}>
            <div className="container">
                <div className="row g-3">
                    {posts.map(item => {
                        return(
                            <div key={item.id} className="col-6 col-lg-4">
                                <div className={style.carts}>
                                    <div className={style.img}>
                                        <img src={item.img} alt="" />
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Categorie;