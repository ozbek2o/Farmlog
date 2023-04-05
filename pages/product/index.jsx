import React from 'react'
import Image from 'next/image'
import Title from '@/components/ui/Title'

const Index = () => {
  return (
    <div className='flex'>
        <div className='relative flex-1'>
            <Image src="/images/f4.jpg" alt="" layout='fill'/>
        </div>
        <div>
            <Title addClass="text-6xl">Good Milk</Title>
            <span>$10</span>
        </div>
    </div>
  )
}

export default Index