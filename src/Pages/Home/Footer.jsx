import React from 'react'
import SecotionTitle from '../../Components/SecotionTitle';

function Footer() {
  return (
    <div className='py-10'>
      {/* <SecotionTitle title="Footer" /> */}
        <div className="h-[1px] w-full bg-gray-700"></div>

        <div className="flex items-center justify-center flex-col mt-10 opacity-70">
            <h1 className="text-white">Designed And Developed By </h1>
            <h1 className='text-white'>
                <span className=''>Harshit Pandey</span>
            </h1>
        </div>
    </div>
  )
}

export default Footer;
