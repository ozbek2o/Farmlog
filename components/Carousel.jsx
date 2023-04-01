import Image from 'next/image';
import React from 'react';
import Title from './ui/Title';
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true, 
    autoplaySpeed:3500,
    appenDots:(dots)=>(
      <div style={{
        color:"yellow",
        padding:"0px",
      }}>
        <ul style={{marginTop:"10px"}}
        >{dots}</ul>
      </div>
    ),
    customPaging:(i)=>(
      <div className='w-3 border bg-white rounded-full mt-10'></div>
    )
  };
  return (
    <div className='h-screen w-full container mx-auto -mt-[88px]'>
        <div className='absolute top-0 left-0 w-full h-full'> 
        <div className="relative w-full h-full ">
        <Image  src="/images/f2.jpg" fill  sizes="(max-width: 1000px) 100vw,
              (max-width: 1000px) 50vw,
              33vw" objectFit="cover"  />
        </div>
        </div>
        <Slider {...settings}>
          <div>
        <div className=' mt-48  text-white  flex flex-col items-start gap-y-10 '>
            <Title addClass="text-6xl">Natural Market Farmlog</Title>

            <p className='text-sm sm:w-2/5 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus tempora possimus hic sapiente, iusto temporibus consectetur praesentium nesciunt? A recusandae impedit debitis, libero voluptate delectus dolore magnam dolores! Cum obcaecati nemo quam vitae deserunt itaque facilis culpa. Velit, tenetur.</p>

            <button className='btn-primary'>Sipariş Ver</button>
        </div>
        </div>
        <div>
        <div className=' mt-48  text-white  flex flex-col items-start gap-y-10 '>
            <Title addClass="text-6xl">Natural Market Farmlog</Title>

            <p className='text-sm sm:w-2/5 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus tempora possimus hic sapiente, iusto temporibus consectetur praesentium nesciunt? A recusandae impedit debitis, libero voluptate delectus dolore magnam dolores! Cum obcaecati nemo quam vitae deserunt itaque facilis culpa. Velit, tenetur.</p>

            <button className='btn-primary'>Sipariş Ver</button>
        </div>
        </div>
        <div>
        <div className=' mt-48  text-white  flex flex-col items-start gap-y-10 '>
            <Title addClass="text-6xl">Natural Market Farmlog</Title>

            <p className='text-sm sm:w-2/5 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus tempora possimus hic sapiente, iusto temporibus consectetur praesentium nesciunt? A recusandae impedit debitis, libero voluptate delectus dolore magnam dolores! Cum obcaecati nemo quam vitae deserunt itaque facilis culpa. Velit, tenetur.</p>

            <button className='btn-primary'>Sipariş Ver</button>
        </div>
        </div>
        </Slider>
    </div>
  )
}

export default Carousel

