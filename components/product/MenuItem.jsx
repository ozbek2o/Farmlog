import React from 'react';
import Image from 'next/image';
import {FaShoppingCart} from "react-icons/fa"

const MenuItem = () => {
  return (
    <div className='bg-secondary rounded-3xl'>
        <div className='w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl'>
        <div className='relative w-36 h-36 '>
            <Image src="/images/f4.jpg" alt=""
            layout='fill' className='hover:scale-110' />
        </div>
        </div>
        <div className=' p-[25px] text-white'>
            <h4 className='text-xl font-semibold'>Dairy Products</h4>
            <p className='text-15px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum assumenda quaerat nemo ullam?</p>

        </div>
        <div className=' flex justify-between p-[25px] items-center text-white '>
        <span>%30</span>
        <button className='btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center'><FaShoppingCart/></button>
    </div>
    </div>
  )
}

export default MenuItem