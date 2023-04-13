import React from 'react';
import Image from 'next/image';
import Title from '@/components/ui/Title';

const Index = () => {
  return (
    <div className='flex items-center h-screen gap-20 flex-wrap '>
        <div className='relative md:flex-1 w-[80%] h-[80%] mx-20 '>
            <Image src="/images/f4.jpg" alt="" layout='fill' objectFit='contain'/>
        </div>
        <div className='md:flex-1 md:text-start'>
            <Title addClass="text-6xl ">Good Milk</Title>
            <span className='text-primary text-2xl font-bold underline underline-offset-1 inline-block my-4'>$10</span>
            <p className='text-sm my-4 md:pr-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officia doloremque error natus voluptatum hic corporis explicabo 
                quaerat id veniam placeat! Eveniet unde mollitia, totam debitis
                 quod quidem maiores error tempora.</p>
                 <div >
                    <h4 className='text-xl font-bold'>Chose The Size</h4>
                    <div className='flex  items-center gap-x-20 md:justify-start justify-center'>
                    <div className='relative w-10 h-10'>
                    <Image src="/images/milk.png" alt="" layout='fill'/>
                    <span className='absolute top-0 -right-9 text-xs bg-primary rounded-full px-[5px] font-medium'>Küçük</span>
                    </div>

                    <div className='relative  w-12 h-12 '>
                    <Image src="/images/milk.png" alt="" layout='fill'/>
                    <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Orta</span>
                    </div>
                    
                    <div className='relative  w-16 h-16'>
                    <Image src="/images/milk.png" alt="" layout='fill'/>
                    <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Büyük</span>
                    </div>
                    </div>
                 </div>
                 <h4 className='text-xl font-bold mt-3'>Chose The Size</h4>
                 <div className='flex gap-x-4 my-6 md:justify-start justify-center'>
                 
                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary ' />
                        <span className=' text-sm font-semibold'>Yağlı</span>
                    </label>

                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary ' />
                        <span className=' text-sm font-semibold'>Yağsız</span>
                    </label>

                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary ' />
                        <span className=' text-sm font-semibold'>Yarı yağlı</span>
                    </label>
                 </div>
                 <button className='btn-primary'>Add To Cart</button>
        </div>
    </div>
  )
}

export default Index