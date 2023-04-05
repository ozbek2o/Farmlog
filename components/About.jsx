import Image from 'next/image'
import Title from './ui/Title'

const About = () => {
  return (
    <div className='bg-secondary py-20'>
        <div className='container mx-auto flex items-center text-white gap-20  sm:flex-auto sm:justify-center justify-center flex-wrap'>
            
            <div className="relative sm:w-[445px] sm:h-[600px] w-[300px] h-[500px]">
                <Image src="/images/f5.png" alt='' layout='fill' />
            </div>
            <div className='md:w-1/2 flex-col items-center '> 
                <Title addClass="text-[40px]">We Are Farmlog</Title>
                <p className='my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit ad inventore iure a facilis! Dolorum debitis expedita odio aspernatur nam praesentium voluptates eius optio reiciendis voluptatem odit, assumenda iste? Necessitatibus minus delectus, sapiente adipisci alias vitae possimus debitis, ex in, nihil dolores perspiciatis. Dolorum sed neque nemo eos suscipit.</p>
                <button className='btn-primary'>Read More</button>
            </div>
        </div>
        </div>
    
  )
}

export default About