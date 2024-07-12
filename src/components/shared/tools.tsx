import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { tools_data } from "@/lib/data";
import { useState } from 'react'
const Tools = () => {
    const [selectedCategory, setSelectedCategory] = useState<any>(null);
    const categories = tools_data.map((item) => item.key_route)
    const uniqueCategories = [...new Set(categories)];


    return (
        <div className='py-8 md:py-16 bg-[#f4f7ff]'>
            <div className="container">
                <h1 className="text-[32px] md:text-[64px] font-bold text-primary mb-4 md:mb-6">Tools</h1>
                <RadioGroup defaultValue='all' defaultChecked className="flex flex-wrap gap-x-3 gap-y-4 md:gap-8 mb-6">
                    <div onClick={() => setSelectedCategory(null)} className="flex items-center space-x-2">
                        <RadioGroupItem value={''} id={'all'} className='w-5 h-5' />
                        <Label htmlFor={'all'} className='text-base'>All Tools</Label>
                    </div>
                    {
                        uniqueCategories.map((item, index) => (
                            <div onClick={() => setSelectedCategory(item)} key={index} className="flex items-center space-x-2">
                                <RadioGroupItem className='w-5 h-5' value={item} id={item} />
                                <Label htmlFor={item} className='text-base'>{item}</Label>
                            </div>
                        ))
                    }
                </RadioGroup>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2 md:gap-4">
                    {
                        tools_data.map((item: any, index: number) => (
                            <div key={index} className={`flex flex-col gap-2  ${selectedCategory && selectedCategory === item.key_route ? 'bg-[#a8bfff]' : 'bg-[#dbe5ff]'} p-2 items-center md:p-4 rounded-lg transition`}>
                                <img className="w-[26px] md:w-[34px] h-[26px] md:h-[34px]" src={item.image} alt={item.name} />
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
