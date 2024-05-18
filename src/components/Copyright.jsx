import React from 'react'

const Copyright = () => {
  return (
    <div className='bg-[#1E1E1E] w-full'>
        <div className="w-[80%] h-full  mx-auto max-w-[1200px] flex md:flex-row  flex-col text-center justify-between md:py-8 ">
          <h1 className="md:text-[16px] text-[12px] text-[#fff] tracking-widest leading-[18.43px]">
            Built With Passion by <span className="border-b-2 border-[#fff] pb-2">Amrita Gupta</span>
          </h1>
          <h1 className="md:text-[16px] text-[12px] text-[#fff] tracking-widest leading-[18.43px] md:mt-0 mt-5">
            © Copyright 2024 Glamour Palette | Privacy Policy
          </h1>
        </div>
    </div>
  )
}

export default Copyright