import React from 'react'

const Message = () => {
  return (
    <div className='bg-[#FFFDF4] text-center py-[3rem] lg:py-[6rem] '>
        <div className='flex flex-col items-center'>
            <h1 className='text-[30px] lg:text-[60px] font-bold  '>MESSAGE FROM MR. TANVIR AHMED</h1>
            <img src="./assists/CEO.png" className='w-[300px] mt-14 p-3' alt="" />
            <p className='w-[80%] text-[24px] font-normal mt-8 leading-[40px] italic '>“I want our company to become the central hub and the unicorn of the IT and digital world. This vision may seem grand, but with our collective efforts, creativity, and relentless drive for innovation, I am confident we can turn it into a reality. We aim to lead, to influence, and to make a meaningful impact. We aspire to set the pace in the digital world, shaping the future of the industry.”</p>
            <h5 className=' text-[24px] font-bold mt-[3rem]' >CEO FUNSOL TECHNOLOGIES</h5>
        </div>
    </div>
  )
}

export default Message