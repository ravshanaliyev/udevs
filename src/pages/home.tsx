import AllServices from "@/components/shared/all-services"
import Clients from "@/components/shared/clients"
import Contact from "@/components/shared/contact"
import Footer from "@/components/shared/footer"
import Header from "@/components/shared/header"
import HowWeWork from "@/components/shared/how-we-work"
import Navbar from "@/components/shared/navbar"
import Portofolio from "@/components/shared/portofolio"
import Services from "@/components/shared/services"
import Team from "@/components/shared/team"
import Tools from "@/components/shared/tools"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"


const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <Navbar />
            <Header />
            <Services />
            <Team />
            <AllServices />
            <Tools />
            <Clients />
            <Portofolio />
            <HowWeWork />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home