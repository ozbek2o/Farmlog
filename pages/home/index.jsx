import Campaings from '@/components/Campaings'
import Carousel from '@/components/Carousel'
import MenuWrapper from '@/components/product/MenuWrapper'
import React from 'react'
import About from '@/components/About'

const index = () => {
  return (
    <div>
      <Carousel/>
      <Campaings/>
      <MenuWrapper/>
      <About/>
    </div>
  )
}

export default index