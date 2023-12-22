import Wrapper from '@/shared/Wrapper'
import React from 'react'
import Image from 'next/image'
import AmazaNftPic1 from '@/assets/AmazeNftPics/card-tick-1 1.png'
import AmazaNftPic2 from '@/assets/AmazeNftPics/chart-square 2.png'

const AmazeNFT = () => {
  return (
    <Wrapper>
        <div className="w-[1440px] h-[326px] top-[180px] relative">
            <div className="w-[1440px] h-[326px] left-0 top-0 absolute bg-zinc-200 bg-opacity-20 backdrop-blur-[50px]" />
            <div className="w-[395px] left-[121px] top-[129px] absolute text-black text-[28px] font-bold font-['Integral CF'] tracking-tight">THE AMAZING NFT ART OF THE WORLD HERE</div>
            <div className="w-[362px] h-[85px] left-[961px] top-[122px] absolute">
                <div className="w-9 h-9 left-0 top-0 absolute"><Image src={AmazaNftPic2} alt='AmazaNftPic2'/></div>
                <div className="left-[51px] top-[3px] absolute text-black text-xl font-bold font-['DM Sans']">Growth Transaction</div>
                <div className="w-[311px] left-[51px] top-[41px] absolute text-stone-500 text-sm font-normal font-['DM Sans'] leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</div>
            </div>
            <div className="w-[300px] h-[107px] left-[605px] top-[122px] absolute">
                <div className="w-9 h-9 left-0 top-0 absolute"><Image src={AmazaNftPic1} alt='AmazaNftPic1'/></div>
                <div className="left-[51px] top-[3px] absolute text-black text-xl font-bold font-['DM Sans']">Fast Transaction</div>
                <div className="w-[249px] left-[51px] top-[41px] absolute text-stone-500 text-sm font-normal font-['DM Sans'] leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</div>
            </div>
        </div>
    </Wrapper>
    
  )
}

export default AmazeNFT