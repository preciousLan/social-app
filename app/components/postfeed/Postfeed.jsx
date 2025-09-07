import React from 'react'
import Postinput from "./Postinput"
import Posts from './Posts'
import SignUpPrompt from '../SignUpPrompt/SignUpPrompt'

const Postfeed = () => {
    return (
        <div className='flex-grow  overflow-y-auto border border-gray-200'>
            <div className='py-4 sm:text-xl sticky top-0 z-50
      bg-white bg-opacity-80 backdrop-blur-sm font-bold border-b border-gray-100 pl-3 mb-3'  >
                Home
            </div>
            <Postinput />
            <Posts/>
            <SignUpPrompt/>
        </div>
    )
}

export default Postfeed
