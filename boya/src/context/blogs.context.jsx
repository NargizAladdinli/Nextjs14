'use client'
import { createContext, useEffect, useState } from "react";


export const BlogContext = createContext();

const BlogProvider = ({children}) => {
    const [blogs, setBlogs] = useState([]);
    const value = {blogs, setBlogs}

    useEffect(() => {
        const blogsProducts = async() => {
            const res = await fetch('https://json-server-tan-kappa.vercel.app/blogs');
            const data = await res.json();
            setBlogs(data);
            console.log(data);
        }
        blogsProducts()
    }, [])

    return(
        <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    )
}

export default BlogProvider;