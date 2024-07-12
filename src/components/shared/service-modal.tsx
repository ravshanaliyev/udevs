
const ServiceModal = ({ bg, title, desc, img, modules, technos, hashtag, vertical }: { bg?: boolean, title: string, desc: string, img: string, modules: any, technos?: any, hashtag?: string, vertical?: boolean }) => {
    return (
        <div id={hashtag} className={`py-8 md:py-16 ${bg ? 'bg-[#f4f7ff]' : 'bg-white'}`}>
            <div className="container">
                <h1 className="text-[32px] md:text-[64px] font-bold text-primary mb-5 md:mb-6">{title}</h1>
                <div className={`flex flex-col-reverse ${vertical ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-8 md:gap-16`}>
                    <div className="w-full md:w-1/2">
                        <p className="text-base md:text-2xl text-[#464359] font-semibold leading-snug">{desc}</p>
                        <div className="grid grid-cols-3 gap-x-2 gap-y-4 md:gap-5 mt-4 md:mt-8">
                            {
                                modules.map((item: any, index: number) => (
                                    <div key={index} className="flex flex-col items-start gap-3 bg-[#f4f7ff] p-4 md:p-5 rounded-lg">
                                        <img className="w-[30px] h-[30px] md:w-[44px] md:h-[44px]" src={item.image} alt={item.name} />
                                        <p className="text-sm md:text-lg text-[#18191f] font-semibold truncate">{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                        {
                            technos && (
                                <div className="mt-8">
                                    <h3 className="text-[24px] md:text-[30px] font-bold text-[#464359] mb-4 md:mb-6">Technologies</h3>
                                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 md:gap-5 mt-4">
                                        {
                                            technos.map((item: any, index: number) => (
                                                <div key={index} className="flex flex-col  items-center gap-1 bg-[#f4f7ff] p-2 rounded-lg">
                                                    <img className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]" src={item.image} alt={item.name} />
                                                    <p className="text-sm md:text-lg text-[#18191f] font-semibold">{item.name}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="w-full md:w-1/2 p-5 h-full" style={{ backgroundImage: "url(https://udevs.io/static/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <img className="w-full h-full" src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceModal