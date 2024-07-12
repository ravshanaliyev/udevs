import { Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const Contact = () => {
    return (
        <div className="container my-8 md:my-16">
            <h1 className="text-[32px] md:text-[64px] font-bold text-primary mb-4 md:mb-6">Contact</h1>
            <div className="md:py-6 md:px-10 py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-8 border rounded-xl shadow">
                <form className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-[24px]  font-bold text-[#464359]">Leave us a message</h3>
                    <Input className="w-full md:h-[48px]" type="text" placeholder="Name" required />
                    <Input className="w-full md:h-[48px]" type="text" placeholder="Email" required />
                    <Textarea className="w-full" placeholder="Briefly describe your project" required />
                    <Button className="w-full h-[48px] text-base">Send</Button>
                </form>
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-primary" />
                        <p className="text-[16px] font-medium">Ташкент,  Мирзо-Улугбекский район, 5-й пр. Курган, 32  адрес</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-6 h-6 text-primary" />
                        <p className="text-[16px] font-medium">+998 90 123 45 67</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-6 h-6 text-primary" />
                        <p className="text-[16px] font-medium">azizbek.b@udevs.io</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Instagram className="w-6 h-6 text-primary" />
                        <p className="text-[16px] font-medium">@azizbekbakhodirov</p>
                    </div>
                    <img className="hidden md:block w-full h-[200px] object-cover" src="https://www.netmaps.net/wp-content/uploads/2015/03/tashkent-vector-map.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact