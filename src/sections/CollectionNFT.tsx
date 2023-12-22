import Wrapper from '@/shared/Wrapper'
import React from 'react'
import Image from 'next/image'
import Pic1 from '@/assets/CollectionNftPics/unsplash_F56Y7dgrAkc.png'
import Pic2 from '@/assets/CollectionNftPics/unsplash_pVoEPpLw818.png'
import Pic3 from '@/assets/CollectionNftPics/unsplash_LpbyDENbQQg.png'
import Pic4 from '@/assets/CollectionNftPics/unsplash_9anj7QWy-2g.png'
import Pic5 from '@/assets/CollectionNftPics/unsplash_F56Y7dgrAkc (1).png'
import Pic6 from '@/assets/CollectionNftPics/unsplash_LpbyDENbQQg.png'
import Pic7 from '@/assets/CollectionNftPics/unsplash_pVoEPpLw818.png'
import Pic8 from '@/assets/CollectionNftPics/unsplash_9anj7QWy-2g (1).png'
import Pic9 from '@/assets/CollectionNftPics/unsplash_F56Y7dgrAkc (2).png'
import Pic10 from '@/assets/CollectionNftPics/unsplash_pVoEPpLw818 (2).png'
import Pic11 from '@/assets/CollectionNftPics/unsplash_LpbyDENbQQg (2).png'
import Pic12 from '@/assets/CollectionNftPics/unsplash_pVoEPpLw818.png'
import Pic13 from '@/assets/HeroPics/Ellipse 95.png'

const CollectionNFT = () => {
  return (
    <div>
        <Wrapper>
        <div className="w-[1440px] h-[619px] top-[420px] relative">
            <div className="w-[1440px] h-[619px] left-0 top-0 absolute bg-zinc-200 bg-opacity-20 backdrop-blur-[50px]" />
            <div className="left-[121px] top-[65px] absolute text-black text-[28px] font-bold font-['Integral CF']">COLLECTION FEATURED NFTS</div>
            <div className="w-[379px] h-[366px] left-[120px] top-[154px] absolute">
                <Image className="w-[265.85px] h-[272.27px] left-0 top-0 absolute rounded-[11px]" src={Pic1} alt='' />
                <Image className="w-[103.59px] h-[85.26px] left-[275.02px] top-0 absolute rounded-[11px]" src={Pic2} alt='' />
                <Image className="w-[103.59px] h-[85.26px] left-[275.02px] top-[93.51px] absolute rounded-[11px]" src={Pic3} alt='' />
                <Image className="w-[103.59px] h-[85.26px] left-[275px] top-[187.01px] absolute rounded-[11px]" src={Pic4} alt='' />
                <div className="w-[200px] h-[64.40px] left-0 top-[301.60px] absolute">
                    <div className="left-0 top-0 absolute text-black text-xl font-bold font-['DM Sans']">Amazing Collection</div>
                    <div className="w-[155px] h-7 left-0 top-[36.40px] absolute">
                        <div className="left-[38px] top-[5px] absolute text-black text-sm font-medium font-['DM Sans']">by Arkhan</div>
                        <Image className="w-7 h-7 left-0 top-0 absolute rounded-full" src={Pic13} alt='' />
                    </div>
                </div>
                <div className="w-[120px] h-[29px] px-5 py-2.5 left-[260px] top-[337px] absolute rounded-[60px] border border-blue-700 justify-center items-center gap-[4.58px] inline-flex  cursor-pointer hover:bg-violet-300">
                    <div className="w-[119.17px] h-[14.67px] text-blue-700 text-[11px] font-bold font-['DM Sans']">Total 54 Items</div>
                </div>
            </div>
            <div className="w-[379px] h-[366.34px] left-[530px] top-[154px] absolute">
                <Image className="w-[265.85px] h-[272.27px] left-0 top-0 absolute rounded-3xl" src={Pic5} alt=''/>
                <Image className="w-[103.59px] h-[85.26px] left-[275.02px] top-0 absolute rounded-[11px]" src={Pic6} alt=''/>
                <Image className="w-[103.59px] h-[85.26px] left-[275.02px] top-[93.51px] absolute rounded-[21.36px]" src={Pic7} alt=''/>
                <Image className="w-[103.59px] h-[85.26px] left-[275px] top-[187.01px] absolute rounded-[18.60px]" src={Pic8} alt='' />
                <div className="w-[200px] h-[64.40px] left-0 top-[301.60px] absolute">
                    <div className="left-0 top-0 absolute text-black text-xl font-bold font-['DM Sans']">Amazing Collection</div>
                    <div className="w-[155px] h-7 left-0 top-[36.40px] absolute">
                        <div className="left-[38px] top-[5px] absolute text-black text-sm font-medium font-['DM Sans']">by Arkhan</div>
                        <Image className="w-7 h-7 left-0 top-0 absolute rounded-full" src={Pic13} alt='' />
                    </div>
                </div>
                <div className="w-[120px] h-[29.34px] px-5 py-2.5 left-[260px] top-[337px] absolute rounded-[60px] border border-blue-700 justify-center items-center gap-[4.58px] inline-flex cursor-pointer hover:bg-violet-300">
                    <div className="w-[95.17px] h-[14.67px] text-blue-700 text-[11px] font-bold font-['DM Sans']">Total 54 Items</div>
                </div>
            </div>
            <div className="w-[380px] h-[366.34px] left-[940px] top-[154px] absolute">
                <Image className="w-[265.85px] h-[272.27px] left-0 top-0 absolute rounded-xl" src={Pic9} alt='' />
                <Image className="w-[103.59px] h-[85.26px] left-[275.02px] top-0 absolute rounded-xl" src={Pic10} alt='' />
                <Image className="w-[103.59px] h-[85.26px] left-[275.02px] top-[93.51px] absolute rounded-xl" src={Pic11} alt='' />
                <Image className="w-[103.59px] h-[85.26px] left-[275px] top-[187.01px] absolute rounded-[11px]" src={Pic12} alt='' />
                <div className="w-[200px] h-[64.40px] left-0 top-[301.60px] absolute">
                    <div className="left-0 top-0 absolute text-black text-xl font-bold font-['DM Sans']">Amazing Collection</div>
                    <div className="w-[155px] h-7 left-0 top-[36.40px] absolute">
                        <div className="left-[38px] top-[5px] absolute text-black text-sm font-medium font-['DM Sans']">by Arkhan</div>
                        <Image className="w-7 h-7 left-0 top-0 absolute rounded-full" src={Pic13} alt='' />
                    </div>
                </div>
                <div className="w-[120px] h-[29.34px] px-5 py-2.5 left-[260px] top-[337px] absolute rounded-[60px] border border-blue-700 justify-center items-center gap-[3.58px] inline-flex cursor-pointer hover:bg-violet-300">
                    <div className="w-[95.17px] h-[14.67px] text-blue-700 text-[11px] font-bold font-['DM Sans']">Total 54 Items</div>
                </div>
            </div>
        </div>
        </Wrapper>
    </div>
  )
}

export default CollectionNFT