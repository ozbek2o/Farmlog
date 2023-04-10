import React from 'react';
import Image from 'next/image';
import Title from '@/components/ui/Title';

const Index = () => {
  return (
    <div className='flex items-center h-screen gap-20'>
        <div className='relative flex-1 w-[80%] h-[80%] mx-20'>
            <Image src="/images/f4.jpg" alt="" layout='fill'/>
        </div>
        <div className='flex-1'>
            <Title addClass="text-6xl ">Good Milk</Title>
            <span className='text-primary text-2xl font-bold underline underline-offset-1 inline-block my-4'>$10</span>
            <p className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officia doloremque error natus voluptatum hic corporis explicabo 
                quaerat id veniam placeat! Eveniet unde mollitia, totam debitis
                 quod quidem maiores error tempora.</p>
                 <div >
                    <h4 className='text-xl font-bold'>Chose The Size</h4>
                    <div className='flex gap-x-20 items-center'>
                    <div className='relative w-8 h-8'>
                    <Image src="/images/milk.png" alt="" layout='fill'/>
                    </div>

                    <div className='relative  w-12 h-12 '>
                    <Image src="/images/milk.png" alt="" layout='fill'/>
                    </div>
                    
                    <div className='relative  w-16 h-16'>
                    <Image src="/images/milk.png" alt="" layout='fill'/>
                    </div>
                    </div>
                 </div>
        </div>
    </div>
  )
}

export default Index