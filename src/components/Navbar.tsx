import React from 'react';
import Image from 'next/image';
import logo from '@/public/logo.png'
import Link from 'next/link';

function Navbar() {
  return (
    <div>

        <nav className='w-full h-[102px] flex justify-around items-center'>

            <div>

                <Image  src={logo} height={1000} width={1000} alt='logo' className='w-[70px] h-[43.7px] mr-20'/>

            </div>

            <div>

                <ul className='flex justify-between gap-[64px] text-[12px] text-gray-800 mr-56'>
                    <Link href={'/'}><li className='border-y-2 hover:border-black'>MAIN</li></Link>
                    <Link href={'/gallery'}><li className='border-y-2 hover:border-black'>GALLERY</li></Link>
                    <Link href={'projects'}><li className='border-y-2 hover:border-black'>PROJECTS</li></Link>
                    <Link href={'/certifications'}><li className='border-y-2 hover:border-black'>CERTIFICATION</li></Link>
                    <Link href={'/contacts'}><li className='border-y-2 hover:border-black'>CONTACTS</li></Link>
                </ul>


            </div>

        </nav>


    </div>
  )
}

export default Navbar