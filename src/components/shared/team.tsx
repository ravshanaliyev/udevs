
const Team = () => {
    return (
        <div id="command" className="bg-[#f4f7ff] py-8 md:py-12 ">
            <div className="container">
                <h1 className="text-[32px] md:text-[64px] font-bold text-primary mb-4 md:mb-6">Team</h1>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
                    <div className="w-full md:w-1/2 ">
                        <p className="text-base md:text-2xl text-[#464359] font-semibold leading-relaxed">For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.</p>
                        <h2 className="text-[64px] md:text-[120px] font-bold text-primary">100+</h2>
                        <h3 className="text-[24px] md:text-[40px] font-bold text-[#18191f]">Dedicated team</h3>
                    </div>
                    <div className="w-full md:w-1/2 h-full" >
                        <img data-aos="zoom-in" src="https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team