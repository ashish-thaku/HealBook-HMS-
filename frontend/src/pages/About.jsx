import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const about = () => {
  return (
    <div>
      <div className='text-center text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to CureX, your trusted partner in managing your healthcare needs conveniently and efficiently.</p>
            <p>CureX is committed to excellence in healthcare technology.We continuosly kepp improving.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Our Vision with cureX is to create a seamkess healthcare experience for every department.</p>
          </div>
        </div>
      </div>

      <div className='text-xl my-4'>
          <p>Why  <span className='text-gray-700 font-semibold '>Choose Us</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-allduration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>StreamLined appointment scheduling that fits</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-allduration-300 text-gray-600 cursor-pointer'>
          <b>Convinience</b>
          <p>Access to a network of Trusted healthcare professionals in your area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-allduration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to  help you stay on top of your health.</p>
        </div>
      </div>
        
      
    </div>
  )
}

export default about
