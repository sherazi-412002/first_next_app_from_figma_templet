import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/image 12.png';
import Img02 from '@/public/Frame 11 (4).png'


function Contact() {
  return (
    <div className='h-[603px] w-[1170px] ml-[10%]'>


        <h2 className='text-gray-400 text-[64px] font-light'>Contact Us</h2>

        <div className='flex gap-7'>
            <form className='flex flex-col gap-2'>

              <input type="text" placeholder='Name' className='h-[46px] w-[391px] bg-input placeholder:px-4' />

              <div className='relative'>
              <input type="phone" placeholder='Phone Number' className='h-[45px] w-[391px] bg-input placeholder:px-4' required/>
              <span className="absolute right-64 top-2 text-red-500">*</span>
              </div>

              <div className='relative'>
              <input type="email" placeholder='E-mail' className='h-[46px] w-[391px] bg-input placeholder:px-4' required />
              <span className="absolute right-80 top-2 text-red-500">*</span>
              </div>

              <input type="text" placeholder='Interested In' className='h-[46px] w-[391px] bg-input placeholder:px-4' />
             
              <div className='relative'>
              <textarea placeholder='Message' className='h-[147px] w-[391px] bg-input placeholder:px-4 resize-none' required></textarea>
              <span className="absolute right-[297px] text-red-500">*</span>
              </div>

            </form>
       

            <Image src={Img01} alt='contactImg' height={1000} width={1000} className='h-[369px] w-[749px]'/>

        </div>

        <br /> <br /> <br />

        <div>

          <Image src={Img02} alt='button' className='w-[221.81px] h-[71px] hover:opacity-75'/>

              
        </div>




    </div>
  )
}

export default Contact