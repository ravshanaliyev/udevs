
const HowWeWork = () => {
    return (
        <div className="container my-8 md:my-16">
            <h2 className="text-[32px] md:text-[64px] font-bold text-primary mb-4 md:mb-8">How we work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    portfolio.map((item, index) => (
                        <div key={index} data-aos="fade-up" data-aos-duration="1000" className="flex flex-row md:flex-col items-center gap-4 md:gap-2">
                            <img className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]" src={item.image} alt="" />
                            <div>
                                <h3 className="text-[18px] md:text-[20px] font-bold text-[#464359]">{item.name}</h3>
                                <p className="text-base text-[#18191f]">{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HowWeWork

const portfolio = [
    {
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQwLjM1NzggNDMuNTcxMkw0NC4wMzEyIDM5Ljg5NzhDNDUuMDQ1NyAzOC44ODMzIDQ1LjI5NzMgMzcuMzMzNCA0NC42NTU2IDM2LjA1MDFMNDQuNDQ3NSAzNS42MzM4QzQzLjgwNTggMzQuMzUwNSA0NC4wNTczIDMyLjgwMDYgNDUuMDcxOSAzMS43ODYxTDQ5LjYyNjYgMjcuMjMxNEM0OS45NTIgMjYuOTA1OSA1MC40Nzk2IDI2LjkwNTkgNTAuODA1MSAyNy4yMzE0QzUwLjg2ODQgMjcuMjk0NyA1MC45MjExIDI3LjM2NzggNTAuOTYxMiAyNy40NDhMNTIuODAxMSAzMS4xMjc5QzU0LjIwODcgMzMuOTQzMSA1My42NTcgMzcuMzQzMSA1MS40MzE0IDM5LjU2ODdMNDEuNDMzMyA0OS41NjY3QzM5LjAxMDggNTEuOTg5MyAzNS40Mjc0IDUyLjgzNTIgMzIuMTc3MiA1MS43NTE4TDI4LjE1MyA1MC40MTA0QzI3LjcxNjQgNTAuMjY0OSAyNy40ODA1IDQ5Ljc5MyAyNy42MjYgNDkuMzU2NEMyNy42NjY5IDQ5LjIzMzYgMjcuNzM1OCA0OS4xMjIxIDI3LjgyNzMgNDkuMDMwNkwzMi4yNDYxIDQ0LjYxMThDMzMuMjYwNiA0My41OTczIDM0LjgxMDUgNDMuMzQ1OCAzNi4wOTM4IDQzLjk4NzRMMzYuNTEwMSA0NC4xOTU2QzM3Ljc5MzQgNDQuODM3MiAzOS4zNDMzIDQ0LjU4NTcgNDAuMzU3OCA0My41NzEyWiIgZmlsbD0iIzFCNUJGNyIvPgo8L3N2Zz4K",
        name: "Сontact",
        desc: 'Send us your project request or project idea.'
    },
    {
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBkPSJNMjguODMzMyA1MS42NjY3SDUzLjgzMzNDNTQuNzUzOCA1MS42NjY3IDU1LjUgNTIuNDEyOSA1NS41IDUzLjMzMzNDNTUuNSA1NC4yNTM4IDU0Ljc1MzggNTUgNTMuODMzMyA1NUgyNy4xNjY3QzI2LjI0NjIgNTUgMjUuNSA1NC4yNTM4IDI1LjUgNTMuMzMzM1YyNi42NjY3QzI1LjUgMjUuNzQ2MiAyNi4yNDYyIDI1IDI3LjE2NjcgMjVDMjguMDg3MSAyNSAyOC44MzMzIDI1Ljc0NjIgMjguODMzMyAyNi42NjY3VjUxLjY2NjdaIiBmaWxsPSIjMUI1QkY3Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMyIgZD0iTTM1LjA0OTYgNDQuNDczQzM0LjQyIDQ1LjE0NDUgMzMuMzY1MyA0NS4xNzg1IDMyLjY5MzggNDQuNTQ5QzMyLjAyMjIgNDMuOTE5NCAzMS45ODgyIDQyLjg2NDcgMzIuNjE3OCA0Mi4xOTMyTDM4Ljg2NzggMzUuNTI2NUMzOS40NzY2IDM0Ljg3NzEgNDAuNDg4NCAzNC44MjA3IDQxLjE2NTUgMzUuMzk4Nkw0Ni4wOTg0IDM5LjYwOEw1Mi41MjU1IDMxLjQ2N0M1My4wOTU5IDMwLjc0NDUgNTQuMTQzOSAzMC42MjEyIDU0Ljg2NjQgMzEuMTkxNkM1NS41ODg5IDMxLjc2MiA1NS43MTIyIDMyLjgxIDU1LjE0MTggMzMuNTMyNUw0Ny42NDE4IDQzLjAzMjVDNDcuMDU2IDQzLjc3NDUgNDUuOTcwOSA0My44ODEyIDQ1LjI1MTggNDMuMjY3Nkw0MC4yMTE3IDM4Ljk2NjdMMzUuMDQ5NiA0NC40NzNaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo=",
        name: "Analysis",
        desc: 'We will contact you to clarify your project requirements.'
    },
    {
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjMuODMzIDUzLjUwMDNDMjMuODMzIDU0LjMyODggMjQuNTA0NiA1NS4wMDAzIDI1LjMzMyA1NS4wMDAzSDU1LjY2NjNDNTYuNDk0OCA1NS4wMDAzIDU3LjE2NjMgNTQuMzI4OCA1Ny4xNjYzIDUzLjUwMDNWMzMuMTY3QzU3LjE2NjMgMzIuMzM4NiA1Ni40OTQ4IDMxLjY2NyA1NS42NjYzIDMxLjY2N0gzNy4xNjYzTDMyLjYwNTcgMjcuMTA2M0MzMi4zMjQ0IDI2LjgyNSAzMS45NDI4IDI2LjY2NyAzMS41NDUgMjYuNjY3SDI1LjMzM0MyNC41MDQ2IDI2LjY2NyAyMy44MzMgMjcuMzM4NiAyMy44MzMgMjguMTY3VjUzLjUwMDNaIiBmaWxsPSIjMUI1QkY3Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMyIgZD0iTTQ0LjQxNiAzNy41QzQzLjA3NDggMzcuNSA0MS41MDYyIDM5LjAyMDUgNDAuNjY2IDQwQzM5LjgyNTggMzkuMDIwNSAzOC4yNTczIDM3LjUgMzYuOTE2IDM3LjVDMzQuNTQxOCAzNy41IDMzLjE2NiAzOS4zNTE4IDMzLjE2NiA0MS43MDg3QzMzLjE2NiA0NS42MjUgNDAuNjY2IDUwIDQwLjY2NiA1MEM0MC42NjYgNTAgNDguMTY2IDQ1LjYyNSA0OC4xNjYgNDEuODc1QzQ4LjE2NiAzOS41MTgxIDQ2Ljc5MDIgMzcuNSA0NC40MTYgMzcuNVoiIGZpbGw9IiMxQjVCRjciLz4KPC9zdmc+Cg==",
        name: "Offer",
        desc: 'We will provide you with our free, non-binding application.'
    },
    {
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBkPSJNMzIuNzA1NCAyOC44MzY5QzMzLjQ3NTUgMjguMzMyNyAzNC41MDg1IDI4LjU0ODMgMzUuMDEyNyAyOS4zMTg0QzM1LjUxNjkgMzAuMDg4NSAzNS4zMDEzIDMxLjEyMTUgMzQuNTMxMiAzMS42MjU3QzMxLjcyNDggMzMuNDYzMSAzMC4wMDAzIDM2LjU4MyAzMC4wMDAzIDM5Ljk5OTJDMzAuMDAwMyA0NS41MjIxIDM0LjQ3NzUgNDkuOTk5MiA0MC4wMDAzIDQ5Ljk5OTJDNDUuNTIzMiA0OS45OTkyIDUwLjAwMDMgNDUuNTIyMSA1MC4wMDAzIDM5Ljk5OTJDNTAuMDAwMyAzNi42NTg0IDQ4LjM1MTcgMzMuNTk4NyA0NS42NDYzIDMxLjc0NDJDNDQuODg3IDMxLjIyMzcgNDQuNjkzNSAzMC4xODY0IDQ1LjIxMzkgMjkuNDI3MkM0NS43MzQzIDI4LjY2NzkgNDYuNzcxNyAyOC40NzQzIDQ3LjUzMDkgMjguOTk0OEM1MS4xMzM3IDMxLjQ2NDQgNTMuMzMzNyAzNS41NDczIDUzLjMzMzcgMzkuOTk5MkM1My4zMzM3IDQ3LjM2MyA0Ny4zNjQxIDUzLjMzMjUgNDAuMDAwMyA1My4zMzI1QzMyLjYzNjUgNTMuMzMyNSAyNi42NjcgNDcuMzYzIDI2LjY2NyAzOS45OTkyQzI2LjY2NyAzNS40NDY3IDI4Ljk2NzkgMzEuMjgzOCAzMi43MDU0IDI4LjgzNjlaIiBmaWxsPSIjMUI1QkY3Ii8+CjxyZWN0IG9wYWNpdHk9IjAuMyIgeD0iMzguMzMzIiB5PSIyNSIgd2lkdGg9IjMuMzMzMzMiIGhlaWdodD0iMTYuNjY2NyIgcng9IjEiIGZpbGw9IiMxQjVCRjciLz4KPC9zdmc+Cg==",
        name: "Start",
        desc: 'You will get to know the team and we will get started.'
    }
]