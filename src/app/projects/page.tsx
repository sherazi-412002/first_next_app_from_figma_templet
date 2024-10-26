import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/image 30.png';
import Img02 from '@/public/image 33.png';
import Img03 from '@/public/image 32.png';
import Img04 from '@/public/Frame 11 (5).png';

import Img05 from '@/public/slide-numbers (1).png';
import Img06 from '@/public/Frame 9.png';
import Img07 from '@/public/Frame 8.png'; 

function page() {
  return (
    <div className='ml-[10%] flex flex-col gap-14'>

      <div className='leading-none'>

        <h2 className='text-[64px] text-gray-400 font-light'>Our</h2>
        <h2 className='text-[64px] font-bold'>Projects</h2>

      </div>

      <div className='h-[435px] w-[1170px] flex gap-5'>
        <div> <Image src={Img01} alt='1stProject' width={1000} height={1000} className='h-[435px] w-[670px]'/></div>
        <div className='flex flex-col justify-between h-[435px] w-[440px]'>
          <h3 className='text-[40px] text-gray-400 font-light'>Sample Project 1</h3>
          <p className='text-justify flex justify-end'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.</p>
          <Image src={Img04} alt='1stProject' width={1000} height={1000} className='h-[71px] w-[222px]'/>

        </div>
      </div>



      <div className='h-[435px] w-[1170px] flex gap-5'>
        <div> <Image src={Img02} alt='2ndProject' width={1000} height={1000} className='h-[435px] w-[670px]'/></div>
        <div className='flex flex-col justify-between h-[435px] w-[440px]'>
          <h3 className='text-[40px] text-gray-400 font-light'>Sample Project 2</h3>
          <p className='text-justify flex justify-end'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.</p>
          <Image src={Img04} alt='1stProject' width={1000} height={1000} className='h-[71px] w-[222px]'/>

        </div>
      </div>



      <div className='h-[435px] w-[1170px] flex gap-5'>
        <div> <Image src={Img03} alt='3rdProject' width={1000} height={1000} className='h-[435px] w-[670px]'/></div>
        <div className='flex flex-col justify-between h-[435px] w-[440px]'>
          <h3 className='text-[40px] text-gray-400 font-light'>Sample Project 3</h3>
          <p className='text-justify flex justify-end'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.</p>
          <Image src={Img04} alt='1stProject' width={1000} height={1000} className='h-[71px] w-[222px]'/>

        </div>
      </div>


      <div className='flex gap-9'>

        <Image src={Img05} alt='number-slider' height={1000} width={1000} className='h-[52px] w-[140px]'/>
        
        <Image src={Img06} alt='arrow' height={1000} width={1000} className='h-[53px] w-[53px]'/>
        <Image src={Img07} alt='arrow' height={1000} width={1000} className='h-[53px] w-[53px]'/>


      </div>


     <br /> <br />



      
    </div>
  )
}

export default page