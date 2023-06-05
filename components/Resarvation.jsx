import React from 'react'
import Title from './ui/Title'
import Input from './form/Input'
const Resarvation = () => {
  return (
    <div className='container mx-auto py-12 '> 
    <Title addClass="text-[40px] mb-10">Book A Table</Title> 
    <div className='flex justify-between flex-wrap items-center gap-x-10'>
       <div className='lg:flex-1 w-full'>
    <div className='flex flex-col gap-y-4'>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        </div>
        <button className="btn-primary mt-4">BOOK NOW</button>
        </div>
        <div className='lg:flex-1 !h-[384px] w-full'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d784910.1328813714!2d36.331034712207966!3d39.78331643449517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407eaa28129f0613%3A0xe2f2fcefa3ddaa2b!2sSivas%20Merkez%2FSivas!5e0!3m2!1str!2str!4v1685970636963!5m2!1str!2str" width="600" height="450"  
        allowfullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
        </div>
    </div>
    </div>
    
  )
}

export default Resarvation