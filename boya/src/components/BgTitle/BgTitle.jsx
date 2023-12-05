import bg from '@/../../public/images/bg.png'
const styling = {
    backgroundImage: `url('${bg.src}')`,
    width:"100%",
    height:"209px",
    padding: "99px"
}
const title = {
    color: "#FFF",
    fontSize: "40px",
    fontWeight: "600",
}

const BgTitle = () => {
    return(
        <section style={styling}>
            <h3 style={title}>Title</h3>
        </section>
    )
}

export default BgTitle