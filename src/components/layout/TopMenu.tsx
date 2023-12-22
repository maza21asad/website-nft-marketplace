import Wrapper from '@/shared/Wrapper'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import search from '@/assets/search-normal-1 1.png'

const TopMenu = () => {
  return (
    <header>
        <Wrapper>
        <div className="w-full h-[78px] top-[15px] relative mx-auto" >
            <Link className='cursor-pointer hover:text-violet-700 duration-300' href={"/"}>
                <div className="left-[126px] top-[8px] relative text-violet-800 text-2xl font-bold font-['Integral CF']">NFters</div>
            </Link>
            
            <div className="flex w-80 h-full items-center left-[299px] top-[16px] absolute">
                <ul>
                    <li><div className="cursor-pointer hover:text-violet-800 left-0 top-0 absolute text-black text-base font-medium font-['DM Sans'] tracking-wide">Marketplace</div></li>
                    <li><div className="cursor-pointer hover:text-violet-800 left-[148px] top-0 absolute text-black text-base font-medium font-['DM Sans'] tracking-wide">Resource</div></li>
                    <li><div className="cursor-pointer hover:text-violet-800 left-[270px] top-0 absolute text-black text-base font-medium font-['DM Sans'] tracking-wide">About</div></li>
                </ul>
            </div>
            <div className="w-[1446px] h-[0px] left-0 top-[78px] absolute border border-zinc-100"></div>
            <div className="w-[47px] h-[0px] left-[264px] top-[3px] absolute origin-top-left rotate-90 border border-zinc-100"></div>
            <div className="w-[300px] h-[50px] left-[699px] top-1 absolute bg-white rounded-[100px] border-2 border-zinc-100 hover:border-zinc-300">
                <input type="text" className="left-5 top-[10px] absolute text-stone-300 text-base font-medium font-['DM Sans'] tracking-wide outline-none" placeholder='Search'/>
                <div className="w-5 h-5 left-[260px] top-[12px] absolute cursor-pointer"> <Image src={search} alt="Search"/> </div>
            </div>
            
            <div className="w-[166px] h-[50px] px-[22px] py-[18px] left-[1170px] top-1 absolute rounded-[60px] border-2 border-violet-800 justify-center items-center gap-2.5 inline-flex cursor-pointer hover:bg-violet-200">
                <div className="text-violet-800 text-sm font-bold font-['DM Sans'] leading-[12px] tracking-wide">Connect Wallet</div>
            </div>
            <div className="w-[131px] h-[50px] px-10 py-[18px] left-[1019px] top-1 absolute bg-violet-800 rounded-[60px] justify-center items-center gap-2.5 inline-flex cursor-pointer hover:bg-violet-600">
                <div className="text-white text-sm font-bold font-['DM Sans'] leading-[14px] tracking-wide">Upload</div>
            </div>
        </div>
        </Wrapper>
    </header>
  )
}

export default TopMenu