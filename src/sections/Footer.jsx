import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="relative py-12 w-full flex gap-[25px] flex-wrap sm:justify-around justify-between px-8">
      <Image width={1000} height={350} layout='' className='absolute top-0 left-0 w-full h-full object-cover -z-[10]' src="/Footer-Pattern.png" alt="footer-pattern" />
      
      <div className="logo w-[15%] min-w-[150px]">
      <Image className='w-full h-auto' src="/logo.png" alt="footer-logo" width={325} height={90} />
        
      </div>
      <p className=" sm:w-[33%] md:w-[28%] w-full text-white">
        At Lumora Estates, nature isn't a neighbor; it's family. We seamlessly blend luxury with sustainability, creating sanctuaries that offer not just Villas but harmony. At Lumora Estates, we've reimagined what it means to escape the ordinary.
        </p>
        <ul className="flex flex-col min-w-[150px] text-white gap-3">
          <li><a href="">Abouts us</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Amenities</a></li>
          <li><a href="">Contact us</a></li>
          <li><button className='rounded-full px-3 py-1 bg-[#b18d43]'>Book a tour</button></li>
        </ul>
    </footer>
  )
}

export default Footer
