import ServicePhone from '@/assets/service-develop2.svg'
import ServiceDevelop from '@/assets/service-phone2.svg'
import ServiceInterface from '@/assets/service-interface2.svg'
import ServiceIT from '@/assets/service-it2.svg'
import ServiceOptimize from '@/assets/service-optimize2.svg'
import Team from '@/assets/team.svg'

const Services = () => {
    return (
        <div className="container  my-8 md:my-12">
            <h1 className="text-[32px] md:text-[64px] font-bold text-primary mb-4 md:mb-6">Our Services</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 md:gap-8">
                {
                    service_data.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 bg-[#f4f7ff] p-4 md:p-8 rounded-lg">
                            <img className="w-[35px] h-[35px]" src={item.image} alt={item.name} />
                            <p className="text-base md:text-xl text-[#18191f] font-semibold">{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services


const service_data = [
    {
        name: "Team",
        image: Team
    },
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
        name: "Optimization IT consulting infrastructure",
        image: ServiceOptimize
    },
    {
        name: "IT consulting",
        image: ServiceIT
    },
]