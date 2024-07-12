import Nextjs from '@/assets/tools/next.svg'
import Reactjs from '@/assets/tools/React.svg'
import Javascript from '@/assets/tools/js.svg'
import Ant from '@/assets/tools/antd.svg'
import Vue from '@/assets/tools/vue.svg'
import Sasss from '@/assets/tools/sass.svg'
import MaterialUI from '@/assets/tools/material.svg'
import Gatsby from '@/assets/tools/gatsy.png'
import Postgres from '@/assets/tools/postgerql.svg'
import Pythin from '@/assets/tools/pythin.svg'
import Ndjs from '@/assets/tools/node.svg'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Phpp from '@/assets/tools/php.svg'
import Goo from '@/assets/tools/go.svg'
import Mongos from '@/assets/tools/mongo.svg'
import Casandra from '@/assets/tools/casandra.svg'
import Promotheus from '@/assets/tools/promotheus.svg'
import Loki from '@/assets/tools/loki.svg'
import Bitbucket from '@/assets/tools/Bitbucket.svg'
import Gitlab from '@/assets/tools/gitlab.svg'
import ELK from '@/assets/tools/elk.svg'
import Grafana from '@/assets/tools/grafana.svg'
import Terraform from '@/assets/tools/terraform.svg'
import Docker from '@/assets/tools/docker.svg'
import Invision from '@/assets/tools/invision.svg'
import Figma from '@/assets/tools/figma.svg'
import Sketch from '@/assets/tools/sketch.svg'
import Zeplin from '@/assets/tools/zeplin.svg'
import Illustrator from '@/assets/tools/illuster.svg'
import Photoshop from '@/assets/tools/photoshop.svg'
import Kotlin from '@/assets/tools/kotlin.svg'
import Android from '@/assets/tools/android.svg'
import Java from '@/assets/tools/Java.svg'
import IOS from '@/assets/tools/ios.svg'
import Swift from '@/assets/tools/swift.svg'
import Flutter from '@/assets/tools/flutter.svg'
import { useEffect, useState } from 'react'
const Tools = () => {
    const [singleProduct, setSingleProduct] = useState<any>(null);
    const [AllData, setAllData] = useState<any>([]);
    const categories = tools_data.map((item) => item.key_route)
    const uniqueCategories = [...new Set(categories)];
    useEffect(() => {
        if (singleProduct) {
            const filteredProducts = singleProduct ? tools_data.filter((product: any) => product.key_route === singleProduct) : tools_data
            setAllData(filteredProducts)
        } else {
            setAllData(tools_data)
        }
    }, [singleProduct, tools_data])
    return (
        <div className='py-8 md:py-16 bg-[#f4f7ff]'>
            <div className="container">
                <h1 className="text-[32px] md:text-[64px] font-bold text-primary mb-4 md:mb-6">Tools</h1>
                <RadioGroup defaultValue='all' defaultChecked className="flex flex-wrap gap-x-3 gap-y-4 md:gap-8 mb-6">
                    <div onClick={() => setSingleProduct(null)} className="flex items-center space-x-2">
                        <RadioGroupItem value={''} id={'all'} className='w-5 h-5' />
                        <Label htmlFor={'all'} className='text-base'>All Tools</Label>
                    </div>
                    {
                        uniqueCategories.map((item, index) => (
                            <div onClick={() => setSingleProduct(item)} key={index} className="flex items-center space-x-2">
                                <RadioGroupItem className='w-5 h-5' value={item} id={item} />
                                <Label htmlFor={item} className='text-base'>{item}</Label>
                            </div>
                        ))
                    }
                </RadioGroup>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2 md:gap-4">
                    {
                        AllData.map((item: any, index: number) => (
                            <div key={index} className="flex flex-col gap-2 bg-[#dbe5ff] p-2 items-center md:p-4 rounded-lg">
                                <img className="w-[26px] md:w-[30px] h-[26px] md:h-[30px]" src={item.image} alt={item.name} />
                                <p className="text-[10px] md:text-[12px] text-[#18191f] font-semibold">{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tools

const tools_data = [
    {
        name: "Next.js",
        image: Nextjs,
        key_route: "frontend"
    },
    {
        name: "React.js",
        image: Reactjs,
        key_route: "frontend"
    },
    {
        name: "Javascript",
        image: Javascript,
        key_route: "frontend"
    },
    {
        name: "Ant Design",
        image: Ant,
        key_route: "frontend"
    },
    {
        name: "Gatsby.JS",
        image: Gatsby,
        key_route: "frontend"
    },
    {
        name: "Vue.JS",
        image: Vue,
        key_route: "frontend"
    },
    {
        name: "Sass",
        image: Sasss,
        key_route: "frontend"
    },
    {
        name: "Material UI",
        image: MaterialUI,
        key_route: "frontend"
    },
    {
        name: "PostgreSQL",
        image: Postgres,
        key_route: "backend"
    },
    {
        name: "Python",
        image: Pythin,
        key_route: "backend"
    },
    {
        name: "Node.js",
        image: Ndjs,
        key_route: "backend"
    },
    {
        name: "PHP",
        image: Phpp,
        key_route: "backend"
    },
    {
        name: "Go",
        image: Goo,
        key_route: "backend"
    },
    {
        name: "MongoDB",
        image: Mongos,
        key_route: "backend"
    },
    {
        name: "Cassandra",
        image: Casandra,
        key_route: "backend"
    },
    {
        name: "Prometheus",
        image: Promotheus,
        key_route: "devops"
    },
    {
        name: "Loki",
        image: Loki,
        key_route: "devops"
    },
    {
        name: "Bitbucket",
        image: Bitbucket,
        key_route: "devops"
    },
    {
        name: "Gitlab",
        image: Gitlab,
        key_route: "devops"
    },
    {
        name: "ELK",
        image: ELK,
        key_route: "devops"
    },
    {
        name: "Grafana",
        image: Grafana,
        key_route: "devops"
    },
    {
        name: "Terraform",
        image: Terraform,
        key_route: "devops"
    },
    {
        name: "Docker",
        image: Docker,
        key_route: "devops"
    },
    {
        name: "Invision",
        image: Invision,
        key_route: "ui/ux"
    },
    {
        name: "Figma",
        image: Figma,
        key_route: "ui/ux"
    },
    {
        name: "Sketch",
        image: Sketch,
        key_route: "ui/ux"
    },
    {
        name: "Zeplin",
        image: Zeplin,
        key_route: "ui/ux"
    },
    {
        name: "Illustrator",
        image: Illustrator,
        key_route: "ui/ux"
    },
    {
        name: "Photoshop",
        image: Photoshop,
        key_route: "ui/ux"
    },
    {
        name: "Kotlin",
        image: Kotlin,
        key_route: "mobile"
    },
    {
        name: "Android",
        image: Android,
        key_route: "mobile"
    },
    {
        name: "Java",
        image: Java,
        key_route: "mobile"
    },
    {
        name: "IOS",
        image: IOS,
        key_route: "mobile"
    },
    {
        name: "Swift",
        image: Swift,
        key_route: "mobile"
    },
    {
        name: "Flutter",
        image: Flutter,
        key_route: "mobile"
    },
]