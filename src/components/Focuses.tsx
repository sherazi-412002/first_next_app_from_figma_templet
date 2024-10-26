import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/1.png';
import Img02 from '@/public/2.png';


function Focuses() {
  return (
    <div className='w-[1170px] h-[268px] ml-[10%]'>

        <h2 className='text-[64px] text-gray-400 font-light'>Main Focus/Mission Statement</h2>

        <div className='flex justify-between'>

            <div className='w-[413px] h-[144px] flex gap-5'>

                <Image src={Img01} alt='01' height={1000} width={1000} className='w-[104px] h-[140px]'/>
                <p className='text-justify text-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>

            </div>

            <div className='w-[570px] h-[144px] flex gap-4'>

                <Image src={Img02} alt='02' height={1000} width={1000} className='w-[120px] h-[140px]'/>
                <p className='text-justify text-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, 
                    magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
            </div>



        </div>




    
    </div>
  )
}

export default Focuses