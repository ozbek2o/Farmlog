import Campaings from '@/components/Campaings'
import Carousel from '@/components/Carousel'
import MenuWrapper from '@/components/product/MenuWrapper'
import React from 'react'
import About from '@/components/About'
import Resarvation from '@/components/Resarvation'

const index = () => {
  return (
    <div>
      <Carousel/>
      <Campaings/>
      <MenuWrapper/>
      <About/>
      <Resarvation/>
    </div>
  )
}

export default index