import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";
import React from 'react'
import Image from 'next/image';
import {AiFillCloseCircle} from "react-icons/ai"

const Search = ({setisSearchModal}) => {
  return (
    <div className="fixed w-screen h-screen z-50 top-0 left-0 after:content-[''] after:w-screen after:h-screen after:absolute after:top-0 after:left-0  grid place-content-center  after:bg-white after:opacity-70">
        <OutsideClickHandler onOutsideClick={()=> setisSearchModal(false)}>
             <div className='w-full h-full grid place-content-center '>
             <div className="rounded-3xl relative z-50 md:w-[600px] :w-[370px]  bg-white border-2 p-5 ">
              <Title addClass="text-[40px] text-center">Search</Title>
              <input type="text" placeholder='Search...' className='border w-full my-10' />
               <div>
                <ul className='mt-5'>
                    <li className='flex items-center justify-between p-1 hover:bg-primary transition-all mb-3'>
                        <div className="relative flex w-14 h-14">
                    <Image src="/images/f1.jpg" fill  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
                    </div>
                    <span className='font-bold'>Honey</span>
                    <span className='font-bold'>10$</span>
                    </li>
                    
                    <li className='flex items-center justify-between p-1 hover:bg-primary transition-all mb-3'>
                        <div className="relative flex w-14 h-14">
                    <Image src="/images/f1.jpg" fill  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
                    </div>
                    <span className='font-bold'>Honey</span>
                    <span className='font-bold'>10$</span>
                    </li>

                    <li className='flex items-center justify-between p-1 hover:bg-primary transition-all mb-3'>
                        <div className="relative flex w-14 h-14">
                    <Image src="/images/f1.jpg" fill  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
                    </div>
                    <span className='font-bold'>Honey</span>
                    <span className='font-bold'>10$</span>
                    </li>
                </ul>
                <button className='absolute top-0 right-4 ' onClick={()=> setisSearchModal(false)} >
                    <AiFillCloseCircle size={25} className='text-primary  transition-all'/>
                </button>
               </div>
             </div>
             </div>
        </OutsideClickHandler>
        </div>
  );
};

export default Search