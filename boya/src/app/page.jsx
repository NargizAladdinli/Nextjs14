import Latest from "@/components/latest/Latest";
import Partner from "@/components/partner/Partner";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Swipers from "@/components/swiper/Swiper";


export default function Home() {
  return (
    <main>
    <Swipers/>
    <Partner/>
    <Projects/>
    <Services/>
    <Latest/>
    </main>
  )
}
