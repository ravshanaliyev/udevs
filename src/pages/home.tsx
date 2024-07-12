import Header from "@/components/shared/header"
import Navbar from "@/components/shared/navbar"
import Services from "@/components/shared/services"
import Team from "@/components/shared/team"
import Tools from "@/components/shared/tools"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Services />
            <Team />
            <Tools />
        </div>
    )
}

export default Home