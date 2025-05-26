import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Navbar = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 -left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 -left-80 h-[80vh] w-[50vw]' fill='blue'/>
            <Spotlight className='top-28 -left-80 h-[80vh] w-[50vw]' fill='green'/>
        </div>
        <div className="h-screen w-full bg-white dark:bg-black-100 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex item-center justify-center">
      
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
            Backgrounds
          </p>
        </div>
    </div>
  )
}

export default Navbar