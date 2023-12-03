import Latest from "@/components/latest/Latest";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Swipers from "@/components/swiper/Swiper";


export default function Home() {
  return (
    <main>
    <Swipers/>
    <Projects/>
    <Services/>
    <Latest/>
    </main>
  )
}
