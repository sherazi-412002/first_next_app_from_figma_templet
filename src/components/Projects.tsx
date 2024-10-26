import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/Group 17.png';
import Img02 from '@/public/Rectangle 17.png';
import Img03 from '@/public/Rectangle 12.png';
import Img04 from '@/public/image 15.png';

import Img05 from '@/public/image 16.png';
import Img06 from '@/public/image 17.png';
import Img07 from '@/public/image 18.png';
 
import Img08 from '@/public/Frame 11 (1).png'
import Link from 'next/link';

function Projects() {
  return (
    <div className='h-[765px] w-[1170px] ml-[10%]'>

        <h2 className='text-[64px] text-gray-400 font-light'>Our Projects</h2> <br />

        <div className='flex flex-col gap-4'>

            <div className='flex justify-between'>


                <Link href={'/sample-project'}>
                <div className='flex relative group'>
                  <Image src={Img03} alt='bgImg' height={1000} width={1000} className='h-[255px] w-[570px]'/>
                  <Image src={Img02} alt='bgImg' height={1000} width={1000} className='h-[255x] w-[570px] absolute hidden group-hover:block '/>
                  <Image src={Img01} alt='bgImg' height={1000} width={1000} className='h-[160px] w-[233px] absolute m-14'/>
                </div>
                </Link>

                <div>

                  <Image src={Img04} alt='bgImg' height={1000} width={1000} className='h-[255px] w-[570px] text-gray-700'/>
                  
                </div>

            </div>

            <div className='flex justify-between'>

              <Image src={Img05} alt='bgImg' height={1000} width={1000} className='h-[255px] w-[270px]'/>
              <Image src={Img06} alt='bgImg' height={1000} width={1000} className='h-[255px] w-[470px]'/>
              <Image src={Img07} alt='bgImg' height={1000} width={1000} className='h-[255px] w-[370px]'/>


            </div>

            <div className='flex justify-end'>
              <Image src={Img08} alt='bgImg' height={1000} width={1000} className='h-[71px] w-[221.81px] hover:opacity-75'/>
            </div>
        </div>

    </div>
  )
}

export default Projects