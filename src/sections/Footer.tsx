import Wrapper from '@/shared/Wrapper'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Wrapper>
        <div className="w-[1200px] h-[353px] left-[120px] top-[800px] relative">
            <div className="w-[133px] h-[243px] left-[433px] top-[4px] absolute">
                <div className="left-0 top-[47px] absolute text-neutral-700 text-sm font-medium font-['DM Sans'] leading-7">All NFTs<br/>New<br/>Art<br/>Sports<br/>Utility<br/>Music<br/>Domain Name</div>
                <div className="left-0 top-0 absolute text-black text-lg font-bold font-['DM Sans'] capitalize">Market Place</div>
            </div>
            <div className="w-[333px] h-[190px] left-0 top-0 absolute">
                <div className="left-0 top-0 absolute text-black text-2xl font-bold font-['Integral CF']">NFters </div>
                <div className="w-[333px] left-0 top-[56px] absolute text-neutral-600 text-sm font-normal font-['Averta Demo PE Cutted Demo'] leading-snug">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</div>
                <div className="w-9 h-9 left-0 top-[154px] absolute">
                    <div className="w-9 h-9 left-0 top-0 absolute">
                    </div>
                </div>
                <div className="w-9 h-9 left-[52px] top-[154px] absolute">
                    <div className="w-9 h-9 left-0 top-0 absolute">
                    </div>
                </div>
                <div className="w-9 h-9 left-[104px] top-[154px] absolute">
                    <div className="w-9 h-9 left-[-0px] top-[-0px] absolute">
                    </div>
                </div>
            </div>
            <div className="w-[106px] h-[159px] left-[638px] top-[4px] absolute">
                <div className="left-0 top-[47px] absolute text-neutral-700 text-sm font-medium font-['DM Sans'] leading-7">Profile<br/>Favorite<br/>My Collections<br/>Settings</div>
                <div className="left-0 top-0 absolute text-black text-lg font-bold font-['DM Sans'] capitalize">My Account</div>
            </div>
            <div className="w-[364px] h-[197.79px] left-[836px] top-[4px] absolute">
                <div className="w-[362px] left-0 top-[47px] absolute text-neutral-700 text-sm font-normal font-['DM Sans'] leading-snug">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</div>
                <div className="left-0 top-0 absolute text-black text-lg font-bold font-['DM Sans'] capitalize">Stay in the loop</div>
                <div className="w-[364px] h-[60.79px] left-0 top-[137px] absolute">
                    <div className="w-[364px] h-[60.79px] left-0 top-0 absolute bg-white rounded-[45.59px] border-2 border-zinc-100" />
                    <div className="w-[144.38px] h-4 left-[25.84px] top-[18px] absolute "><input type='text' className="text-neutral-400 text-xs font-normal font-['DM Sans'] outline-none" placeholder='Enter your email address..'/></div>
                    <div className="w-[149.79px] h-[46.40px] px-[30.40px] py-[15.20px] left-[207px] top-[7.60px] absolute bg-blue-700 rounded-[45.59px] justify-center items-center gap-[7.60px] inline-flex cursor-pointer hover:bg-blue-500">
                        <div className="text-white text-xs font-normal font-['DM Sans'] tracking-wide ease-in-out transition-transform hover:scale-105">Subscibe Now</div>
                    </div>
                </div>
            </div>
            <Link href={"/Resume"} className="w-[1200px] h-[37px] left-[550px] top-[280px] absolute ease-in transition-transform hover:scale-105 hover:text-violet-800">My Resume</Link>
            <div className="w-[1200px] h-[37px] left-0 top-[316px] absolute">
                <div className="left-[400px] top-[15px] relative text-neutral-400 text-sm font-normal font-['Averta Demo PE Cutted Demo'] leading-snug">This webpage is created by Mohammed Asaduzzaman Asad.</div>
                <div className="left-[450px] top-[15px] relative text-neutral-400 text-sm font-normal font-['Averta Demo PE Cutted Demo'] leading-snug">The resume is attached in the footer section.</div>
                <div className="left-[500px] top-[35px] relative text-neutral-400 text-sm font-normal font-['Averta Demo PE Cutted Demo'] leading-snug">Copyright © 2022 Avi Yansah</div>
                <div className="w-[1200px] h-[0px] left-0 top-0 absolute border border-zinc-100"></div>
            </div>
        </div>
        </Wrapper>
    </div>
  )
}

export default Footer