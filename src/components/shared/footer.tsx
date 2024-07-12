import Logo from "@/assets/logo.svg"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className="bg-[#f4f7ff] py-8 md:py-12">
            <div className="container">
                <img className="w-[96px] h-[32px] mx-auto" src={Logo} alt="" />
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between py-6 border-b">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-[20px] font-bold">About Us</h3>
                        <ul className="flex flex-col gap-2 font-medium">
                            <li><Link to="#service" className="text-primary">Services</Link></li>
                            <li><Link to="#clients" className="text-primary">Clients</Link></li>
                            <li><Link to="#command" className="text-primary">Team</Link></li>
                            <li><Link to="#command" className="text-primary">Direction</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-[20px] font-bold">Services</h3>
                        <ul className="flex flex-col gap-2 font-medium">
                            <li><Link to="#service" className="text-primary">Development of mobile applications</Link></li>
                            <li><Link to="#clients" className="text-primary">Development and implementation ERP systems</Link></li>
                            <li><Link to="#command" className="text-primary">User interface, User experience design</Link></li>
                            <li><Link to="#command" className="text-primary">Optimization IT consulting infrastructure</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-[20px] font-bold">Portfolio</h3>
                        <ul className="flex flex-col gap-2 font-medium">
                            <li><Link to="#service" className="text-primary">Delever</Link></li>
                            <li><Link to="#clients" className="text-primary">Smsuz.uz</Link></li>
                            <li><Link to="#command" className="text-primary">Goodzone</Link></li>
                            <li><Link to="#command" className="text-primary">Iman</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between my-4">
                    <p className="text-[#464359] font-medium">© 2022. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer