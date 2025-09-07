import React from 'react'
import Image from 'next/image'
import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'

const Postinput = () => {
    return (
        <div className='flex gap-5 items-start pl-3 '>
            <Image
                src="/images/busybee-logo2.webp"
                width={44}
                height={44}
                alt="Logo"
                className='w-11 h-11'
                
            />
            <div className='w-full pr-3'>
                <textarea type='text' placeholder='whats happening!?'
                    className='w-full border-b border-gray-100
             resize-none outline-none py-2 text-lg '/>

                <div className='flex justify-between w-full  pt-5 pb-3 items-center ' >
                    <div className='flex gap-2 mr-10'>
                        <PhotoIcon className='w-[22px] h-[22px] text-[#F4AF01]' />
                        <ChartBarIcon className='w-[22px] h-[22px] text-[#F4AF01]' />
                        <FaceSmileIcon className='w-[22px] h-[22px] text-[#F4AF01]' />
                        <CalendarIcon className='w-[22px] h-[22px] text-[#F4AF01]' />
                        <MapPinIcon className='w-[22px] h-[22px] text-[#F4AF01]' />

                    </div>

                    <button className='bg-[#F4AF01]  text-sm cursor-pointer w-[80px] h-[36px] rounded-full text-white'> Bumble</button>
                </div>

            </div>

        </div>
    )
}

export default Postinput
