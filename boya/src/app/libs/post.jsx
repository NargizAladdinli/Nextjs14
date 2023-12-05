export async function getPosts() {
    const res = await fetch('https://json-server-tan-kappa.vercel.app/blogs')
    const data = await res.json()
    return data
}

export async function getSinglePost() {
    const res = await fetch(`https://json-server-tan-kappa.vercel.app/blogs/1`)
    const data = await res.json()
    return data
}