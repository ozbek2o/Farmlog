import Image from "next/image";
import Title from "./ui/Title";
import {FaShoppingCart} from "react-icons/fa"

const CampaingnItem=()=>{
    return(
        <div className=" bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4 " >
            <div className="relative sm:w-44 sm:h-44 w-36 h-36 after:content=[''] 
          border-[5px] border-primary
            rounded-full overflow-hidden text-2xl ">
                <Image src="/images/f3.jpg" alt="" layout="fill" objectFit="cover" className="hover:scale-105 transition-all"/>
            </div>
            <div className="text-white">
                <Title addClass="text-2xl">Tasty Thursday</Title>
                <div className=" my-1">
                    <span className="text-[40px] font-dancing">20%</span>
                    <span className="font-dancing text-sm inline-block ml-2">Off</span>
                </div>
                <button className=" btn-primary flex items-center gap-x-2" >Sipariş Ver <FaShoppingCart size={20}/> </button>
            </div>
        </div>
    )
}


const Campaings = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
        <CampaingnItem/>
        <CampaingnItem/>
    </div>
  )
}

export default Campaings