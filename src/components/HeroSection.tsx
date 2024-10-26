import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/Rectangle 6.png';
import Imag02 from '@/public/Frame 8.png';
import Img03  from '@/public/Frame 9.png';
import Img04 from '@/public/slide-numbers.png';
import Img05 from '@/public/Frame 10.png';

function HeroSection() {
  return (
    <div className='flex justify-center gap-36 w-[1170px]  ml-[10%]'>

        <div className='flex flex-col mt-[180px] items-start space-y-12'>

            <div className='flex flex-col mt-[220px] text-left leading-none'>

              <p className='text-[64px] text-gray-400 font-light'>PROJECT</p>
              <p className='font-bold text-[64px]'>LORUM</p>

            </div>

            <div className='flex'>

                <Image src={Img03} alt='arrow' height={1000} width={1000} className='h-[53px] w-[53px]'/>
                <Image src={Imag02} alt='arrow' height={1000} width={1000} className='h-[53px] w-[53px]'/>

            </div>

            <div>

              <Image src={Img04} alt='number-line' height={1000} width={1000} className='h-[52px] w-[142px]'/>

            </div>

        </div>

        <div className='relative'>

            <Image src={Img01} height={1000} width={1000} alt='mainImg' className=' w-[770px] h-[829px]'/>
            <Image src={Img05} alt='button' height={1000} width={1000} className='h-[71px] w-[222px] absolute right-[580px] top-[785px]'/>
            
         </div>


    </div>
  )
}

export default HeroSection