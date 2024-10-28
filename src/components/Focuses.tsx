import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/1.png';
import Img02 from '@/public/2.png';


function Focuses() {
  return (
    <div className='w-screen md:w-[1170px] h-[600px] md:h-[268px] m-[10%] md:ml-[10%]'>

        <h2 className='text-[53px] md:text-[64px] text-gray-400 font-light'>Main Focus <br className='block md:hidden' /> /Mission Statement</h2>

        <div className='flex flex-col gap-10 md:gap-0 md:flex-row justify-evenly  md:justify-between'>

            <div className='w-screen md:w-[413px] h-auto md:h-[144px] flex flex-row gap-5'>

                <Image src={Img01} alt='01' height={1000} width={1000} className='w-[70px] md:w-[104px] h-auto md:h-[140px]'/>
                <p className='text-justify text-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>

            </div>

            <div className='w-screen md:w-[570px] h-auto md:h-[144px] flex gap-4'>

                <Image src={Img02} alt='02' height={1000} width={1000} className='w-[70px] md:w-[120px] h-auto md:h-[140px]'/>
                <p className='text-justify text-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, 
                    magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
            </div>



        </div>




    
    </div>
  )
}

export default Focuses