import Wrapper from '@/shared/Wrapper'
import React from 'react'
import Image from 'next/image'
import Pic1 from '@/assets/CollectionNftPics/unsplash_F56Y7dgrAkc (1).png'
import Pic2 from '@/assets/CollectionNftPics/unsplash_pVoEPpLw818.png'
import Pic3 from '@/assets/HeroPics/unsplash_tZCrFpSNiIQ.png'
import Pic4 from '@/assets/Ellipse 96.png'
import Pic5 from '@/assets/Ellipse 95.png'

const SignUpNFT = () =>  {
  return (
    <div >
        <Wrapper>
        <div className="w-[1200px] h-[606px] left-[120px] top-[600px] relative">
            <div className="w-[222px] h-[65px] px-10 py-5 left-[683px] top-[431px] absolute bg-violet-800 rounded-[50px] justify-center items-center gap-2.5 inline-flex cursor-pointer hover:bg-violet-600">
                <div className="text-white text-xl font-normal font-['Averta Demo PE Cutted Demo'] tracking-wider ease-in-out transition-transform hover:scale-105">Sign Up Now</div>
            </div>
            <Image className="w-[194.55px] h-[214px] left-[105px] top-[352px] absolute rounded-xl" src={Pic3} alt='' />
            <Image className="w-[240.95px] h-[265.04px] left-[364px] top-[138px] absolute rounded-xl" src={Pic2} alt='' />
            <Image className="w-[300px] h-[300px] left-0 top-0 absolute rounded-xl" src={Pic1} alt='' />
            <Image className="w-20 h-20 left-[248px] top-[254px] absolute rounded-full border-4 border-white" src={Pic4} alt='' />
            <Image className="w-[71.92px] h-[71.92px] left-[568.98px] top-[351.08px] absolute rounded-full border-4 border-white" src={Pic5} alt='' />
            <Image className="w-20 h-20 left-[260px] top-[526px] absolute rounded-full border-4 border-white" src={Pic5} alt='' />
            <div className="w-80 left-[683px] top-[138px] absolute text-black text-[32px] font-bold font-['Integral CF']">CREATE AND SELL YOUR NFT</div>
            <div className="w-[517px] left-[683px] top-[254px] absolute text-zinc-600 text-lg font-normal font-['DM Sans'] leading-[28.80px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</div>
        </div>
        </Wrapper>
    </div>
  )
}

export default SignUpNFT