import Logo from "@/assets/logo.svg"
import HeaderImg from "@/assets/header.svg"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <div className="container py-8 ">
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 h-fit md:h-[600px]">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4">
                    <img className="w-[125px] md:w-[250px] h-fit" src={Logo} alt="Logo" />
                    <h1 className="text-[24px] md:text-[40px] text-[#464359] font-bold">IT-Outsourcing Company</h1>
                    {/* <h2 className="text-[40px] text-primary font-bold">Development and implementation ERP systym</h2> */}
                    <TypeAnimation
                        sequence={[
                            'Development of mobile applications', // Types 'One'Development and implementation ERP systym
                            2000, // Waits 1s
                            'User interface, User experience design', // Deletes 'One' and types 'Two'User interface, User experience design
                            2000, // Waits 2s
                            'Development and implementation ERP systym', // Types 'Three' without deleting 'Two'
                            () => {
                                console.log('Sequence completed');
                            },
                        ]}
                        speed={7}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="text-[24px] md:text-[40px] text-primary font-bold"
                    />
                    <Link className="hidden md:block" to="#contact"><Button className="h-[52px] w-[200px] text-xl font-semibold">Contact </Button></Link>
                </div>
                <div className="w-full md:w-1/2 h-full">
                    <img className="w-full h-full" src={HeaderImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header