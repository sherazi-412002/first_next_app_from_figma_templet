import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/Group 11 1.png';

import Img02 from '@/public/Vector.png';
import Img03 from '@/public/Group (1).png';
import Img04 from '@/public/Group (2).png';

import Img05 from '@/public/Shape.png';
import Img06 from '@/public/Shape (1).png';
import Img07 from '@/public/Linked In (1).png';
import Img08 from '@/public/Shape (2).png';


function Footer() {
  return (
    <div>

        <footer className='h-[417px] w-full bg-ftcolor flex flex-col justify-around text-white  pt-[2%]'>

            <div className='flex justify-around'>

            <div>

                <Image src={Img01} alt='logo' width={1000} height={1000} className='h-[94px] w-[145px]'/>

            </div>

            <div className='h-[229px] w-[605px] flex gap-36'>

                <div>

                   <h3 className='text-[16px] font-bold'>Information</h3>
                   <ul className='flex flex-col gap-4 mt-4'>
                      <li>Main</li>
                      <li>Gallery</li>
                      <li>Projects</li>
                      <li>Certifications</li>
                      <li>Contacts</li>
                   </ul>

                </div>


                <div>

                    <h3 className='text-[16px] font-bold'>Contacts</h3>
                    <ul className='flex flex-col gap-8 mt-4'>
                        <li className='flex gap-4'>
                            <Image src={Img02} alt='location' width={1000} height={1000} className='h-[16px] w-[11px]'/>
                            <div>
                                <p>1234 Sample Street</p>
                                <p>Austin Texas 78704</p>
                            </div>
                        </li>
                        <li className='flex gap-4 mt-4'>
                            <Image src={Img03} alt='contact' width={1000} height={1000} className='h-[16px] w-[16px]'/>
                            <p>512.333.2222</p>
                        </li>
                        <li className='flex gap-4'>
                            <Image src={Img04} alt='email' width={1000} height={1000} className='h-[11px] w-[16px] mt-2'/>
                            <p>sampleemail@gmail.com</p>
                        </li>
                    </ul>

                </div>

            </div>

            <div className='mr-24'>

                <h3 className='text-[16px] font-bold'>Social Media</h3>

                <ul className='flex gap-10 mt-7'>
                    <li>
                        <Image src={Img05} alt='facebook' width={1000} height={1000} className='h-[19px] w-[10px]'/>
                    </li>
                    <li>
                        <Image src={Img06} alt='twitter' width={1000} height={1000} className='h-[16px] w-[21px]'/>
                    </li>
                    <li>
                        <Image src={Img07} alt='linkedIn' width={1000} height={1000} className='h-[20px] w-[20px]'/>
                    </li>
                    <li>
                        <Image src={Img08} alt='pixel' width={1000} height={1000} className='h-[19px] w-[14px]'/>
                    </li>
                </ul>

            </div>

            </div>

            <div className='w-full h-[6%] pt-[3%] flex justify-center items-center border-t-2 border-opacity-40 border-ftSep'>
                <p className='text-[12px] text-ftText'>© 2021 All Rights Reserved</p>
            </div>

        </footer>


    </div>
  )
}

export default Footer