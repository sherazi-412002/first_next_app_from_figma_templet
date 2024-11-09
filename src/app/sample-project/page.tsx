import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/image 33 (1).png';
import Img02 from '@/public/image 34 (1).png';
import Img03 from '@/public/image 35.png';

function page() {
  return (
    <div className='p-3 md:p-0 md:ml-[10%] flex flex-col gap-10 mt-5'>

      <div className='leading-none'>

        <h2 className='text-[64px] text-gray-400 font-light'>Sample</h2>
        <h2 className='text-[64px] font-bold mb-10'>Project 1</h2>

      </div>



      <div>

        <Image src={Img01} alt='firstImg' height={1000} width={1000} className='h-[435px] w-auto  md:w-[1170px]'/>

      </div>



      <div className='flex flex-col md:flex-row gap-5 w-auto md:w-full p-3 md:p-0'>

        <Image src={Img02} alt='firstImg' height={1000} width={1000} className='h-[428px] w-auto md:w-[419px]'/>
        <p className='md:mr-[10%] text-justify md:w-[721px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
          and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
          PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took 
          a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
          leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
          has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
          it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with.</p>

      </div>


      <div>

        <Image src={Img03} alt='firstImg' height={1000} width={1000} className='h-[435px] w-auto md:w-[1170px]'/>

      </div>


      <br /> <br />



        
    </div>
  )
}

export default page