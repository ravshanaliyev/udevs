import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import { Button } from "../ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger, } from "../ui/hover-card"
import ServicePhone from '@/assets/service-phone.svg'
import ServiceDevelop from '@/assets/service-develop.svg'
import ServiceInterface from '@/assets/service-interface.svg'
import ServiceIT from '@/assets/service-it.svg'
import ServiceOptimize from '@/assets/service-optimize.svg'
import Portofio1 from '@/assets/portfolio1.svg'
import Portofio2 from '@/assets/portfolio2.svg'
import Portofio3 from '@/assets/portfolio3.svg'
import Portofio4 from '@/assets/portfolio4.svg'
import Rus from '@/assets/ru.svg'
import Eng from '@/assets/en.svg'
import { ChevronDown, Menu } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"

const Navbar = () => {
    return (
        <div className="border-b sticky top-0 z-50 bg-white">
            <div className="container">
                <div className="h-[72px] flex items-center justify-between">
                    <Link to="/">
                        <img className="w-[96px] h-[32px]" src={Logo} alt="Logo" />
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Menu className="md:hidden cursor-pointer" />
                        </SheetTrigger>
                        <SheetContent className="w-full p-4">
                            <img className="w-[96px] h-[32px]" src={Logo} alt="" />
                            <div className="flex flex-col gap-4 justify-center items-center mt-8">
                                <ul className="flex flex-col gap-4 text-2xl font-bold">
                                    <li><Link to="#services">Services</Link></li>
                                    <li><Link to="#clients">Clients</Link></li>
                                    <li><Link to="#command">Command</Link></li>
                                </ul>
                                <Button className="py-[24px] w-full text-lg">Contact </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <ul className="hidden md:flex items-center gap-8 font-bold text-sm">
                        <li><Link to="#direction">Direction</Link></li>
                        <li><Link to="#command">Command</Link></li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Link to="#services" className="flex items-center gap-1"><p>Services</p> <ChevronDown className="w-4 h-4" /></Link>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80">
                                    <p className="text-muted-foreground mb-3">Services</p>
                                    <div className="flex flex-col gap-2">
                                        {
                                            service_data.map((item, index) => (
                                                <div key={index} className="flex items-center gap-4 hover:bg-primary p-2 cursor-pointer hover:text-white transition rounded-md">
                                                    <img src={item.image} alt={item.name} />
                                                    <p className="text-sm !font-normal">{item.name}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li><Link to="#tools">Tools</Link></li>
                        <li><Link to="#clients">Clients</Link></li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Link to="#portfolio" className="flex items-center gap-1"><p>Portfolio</p> <ChevronDown className="w-4 h-4" /></Link>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-64">
                                    <p className="text-muted-foreground mb-3">Porfolio</p>
                                    <div className="flex flex-col gap-2">
                                        {
                                            portfolio_data.map((item, index) => (
                                                <div key={index} className="flex items-center gap-4 hover:bg-primary p-2 cursor-pointer hover:text-white transition rounded-md">
                                                    <img src={item.image} alt={item.name} />
                                                    <p className="text-sm !font-normal">{item.name}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <div className="flex items-center gap-1 cursor-pointer"><p>Language</p> <ChevronDown className="w-4 h-4" /></div>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-32 p-2">
                                    <div className="flex flex-col gap-2">
                                        {
                                            language.map((item, index) => (
                                                <div key={index} className="flex items-center gap-4 hover:bg-primary p-2 cursor-pointer hover:text-white transition rounded-md">
                                                    <img className="w-[28px]" src={item.image} alt={item.name} />
                                                    <p className="text-sm !font-normal">{item.name}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                        <li><Link to="#contact"><Button>Contact</Button></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar

const service_data = [
    {
        name: "Development of mobile applications",
        image: ServicePhone
    },
    {
        name: "Development and implementation ERP systems",
        image: ServiceDevelop
    },
    {
        name: "User interface, User experience design",
        image: ServiceInterface
    },
    {
        name: "IT consulting",
        image: ServiceIT
    },
    {
        name: "Optimization IT consulting infrastructure",
        image: ServiceOptimize
    },
]
const portfolio_data = [
    {
        name: "Delever",
        image: Portofio1
    },
    {
        name: "Sms.uz",
        image: Portofio2
    },
    {
        name: "Goodzone",
        image: Portofio3
    },
    {
        name: "Iman",
        image: Portofio4
    },
]
const language = [
    {
        name: "Рус",
        image: Rus
    },
    {
        name: "Eng",
        image: Eng
    },
]