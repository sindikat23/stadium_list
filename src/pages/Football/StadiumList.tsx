import { AppstoreAddOutlined, EnvironmentFilled, GlobalOutlined, StarFilled } from "@ant-design/icons"
import { Stadiums } from "./IStadimList"
import { useEffect, useState } from "react"
import { IStadium } from "../../types/interfaces"

const StadiumList = () => {
    const [stad, setStad] = useState(Array<IStadium>)
    const getStadium = async ()=>{
        const res = await Stadiums
        console.log(res);
        
        setStad(res)
    }
    useEffect(()=>{
        getStadium()
    }, [])


    return (
        <div className="bg-[#F5F7FA]">
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <select name="stadium" className="text-[#8A94AD] bg-white py-1 px-4 rounded-lg outline-0">
                            <option value="1" className="rounded-lg">Calendar-alt
                                Sort by:   Best reviewed and lowest price</option>
                        </select>
                    </div>
                    <div className="flex gap-4">
                        <button className="text-[#31374A] text-lg border-[1px] rounded-lg px-3 py-1 active:bg-gray-500 active:text-white font-semibold">
                            <GlobalOutlined /> Xaritada ko`rish
                        </button>
                        <button className="text-[#31374A] text-lg border-[1px] rounded-lg px-3 py-1 active:bg-gray-500 active:text-white font-semibold">
                        <AppstoreAddOutlined /> Qoshish
                        </button>
                    </div>
                </div>
                <div className="py-4 grid grid-cols-4 gap-4">
                    {
                        stad.map((item)=>(
                            <div key={item.id} className="shadow hover:scale-105 duration-700 rounded-lg cursor-pointer">
                                <div className="rounded-[10px_10px_0px_0px] overflow-hidden w-full h-[140px]">
                                    <img src={item.picture} alt={item.stadium_name} className="object-cover"/>
                                </div>
                                <div className="px-2">
                                <p className="py-2 px-1 text-xl font-bold text-[#31374A]">{item.stadium_name}</p>
                                    <p className="pb-2 px-1 text-lg font-bold text-[#31374A]"><EnvironmentFilled/> {item.address}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="pb-2 px-1 text-lg font-bold text-[#31374A]">{item.rate} <StarFilled/></p>
                                        <p className="pb-2 px-1 text-lg font-bold text-[#31374A]">{item.price} $</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default StadiumList