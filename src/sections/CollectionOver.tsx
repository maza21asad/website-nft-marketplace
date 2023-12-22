import Wrapper from '@/shared/Wrapper'
import React from 'react'
import Image from 'next/image'
import COPic1 from '@/assets/CollectionOverPics/unsplash_F56Y7dgrAkc.png'
import COPic2 from '@/assets/CollectionOverPics/unsplash_8uZPynIu-rQ.png'
import COPic3 from '@/assets/CollectionOverPics/unsplash_Tyg0rVhOTrE.png'
import COPic4 from '@/assets/CollectionOverPics/unsplash_wHJ5L9KGTl4.png'
import COPic5 from '@/assets/CollectionOverPics/Ellipse 95.png'
import COPic6 from '@/assets/CollectionOverPics/ethereum 2.png'
import Pic7 from '@/assets/CollectionOverPics/unsplash_k0rVudBoB4c.png'
import Pic8 from '@/assets/CollectionOverPics/unsplash_fT49QnFucQ8.png'
import Pic9 from '@/assets/CollectionOverPics/unsplash_5MTf9XyVVgM.png'
import Pic10 from '@/assets/CollectionOverPics/unsplash_zkNT5mikUuo.png'
import Pic11 from '@/assets/CollectionOverPics/unsplash_WjIB-6UxA5Q.png'
import Pic12 from '@/assets/CollectionOverPics/verify 1 (2).png'


const CollectionOver = () => {
  return (
    <div>
        <Wrapper>
            <div className="w-[1200px] h-[540px] left-[125px] top-[310px] relative">
                <Image className="w-[400px] h-[424px] left-0 top-0 absolute rounded-3xl ease-in-out transition-transform hover:scale-105" src={COPic1} alt=''/>
                <div className="w-[400px] h-12 left-0 top-[456px] absolute">
                    <div className="left-[58px] top-0 absolute text-black text-xl font-bold font-['DM Sans']">The Futr Abstr</div>
                    <div className="left-[58px] top-[30px] absolute text-neutral-700 text-sm font-normal font-['DM Sans']">10 in the stock</div>
                    <Image className="w-12 h-12 left-0 top-0 absolute rounded-full" src={COPic5} alt='' />
                    <div className="w-[91px] h-[45.13px] left-[300px] top-0 absolute">
                        <div className="w-[78px] h-[21.54px] left-[23px] top-[23.59px] absolute text-neutral-700 text-base font-bold font-['DM Sans']">0.25 ETH</div>
                        <div className="w-[75px] h-[16.41px] left-0 top-0 absolute text-neutral-700 text-xs font-medium font-['DM Sans']">Highest Bid</div>
                        <div className="w-[13px] h-[21.33px] left-0 top-[23.59px] absolute"> <Image src={COPic6} alt=''/> </div>
                    </div>
                </div>
                <div className="w-[334px] h-[147px] left-[453px] top-0 absolute">
                    <div className="w-[147px] h-[147px] left-0 top-0 absolute">
                        <Image className="w-[147px] h-[147px] left-0 top-0 absolute rounded-xl ease-in-out transition-transform hover:scale-105" src={COPic2} alt='' />
                    </div>
                    <div className="w-[180px] h-32 left-[167px] top-[10px] absolute">
                        <div className="left-0 top-0 absolute text-black text-xl font-bold font-['DM Sans']">The Futr Abstr</div>
                        <div className="left-[133px] top-[42px] absolute text-neutral-500 text-sm font-normal font-['DM Sans']">1 of 8</div>
                        <Image className="w-[34px] h-[34px] left-0 top-[34px] absolute rounded-full" src={COPic5} alt=''/>
                        <div className="w-[80.53px] h-8 p-2 left-[42px] top-[35px] absolute rounded-md border border-green-600 justify-center items-center gap-[5px] inline-flex">
                            <div className="w-[1.5px] h-3.5 relative" />
                            <div className="text-green-600 text-xs font-bold font-['DM Sans']">0.25 ETH</div>
                        </div>
                        <div className="w-[120px] h-[45px] px-5 py-3.5 left-0 top-[83px] absolute rounded-[50px] border-2 border-violet-800 cursor-pointer hover:bg-violet-700 hover:text-white justify-center items-center gap-2.5 inline-flex">
                            <div className="text-violet-950 text-sm font-normal font-['Averta Demo PE Cutted Demo'] cursor-pointer hover:text-white ">Place a bid</div>
                        </div>
                    </div>
                </div>
                <div className="w-[334px] h-[147px] left-[453px] top-[188px] absolute">
                    <div className="w-[147px] h-[147px] left-0 top-0 absolute">
                        <Image className="w-[147px] h-[147px] left-0 top-0 absolute rounded-xl ease-in-out transition-transform hover:scale-105" src={COPic3} alt='' />
                    </div>
                    <div className="w-[180px] h-32 left-[167px] top-[10px] absolute">
                        <div className="left-0 top-0 absolute text-black text-xl font-bold font-['DM Sans']">The Futr Abstr</div>
                        <div className="left-[133px] top-[42px] absolute text-neutral-500 text-sm font-normal font-['DM Sans']">1 of 8</div>
                        <Image className="w-[34px] h-[34px] left-0 top-[34px] absolute rounded-full" src={COPic5} alt='' />
                        <div className="w-[80.53px] h-8 p-2 left-[42px] top-[35px] absolute rounded-md border border-green-600  justify-center items-center gap-[5px] inline-flex">
                            <div className="w-[1.5px] h-3.5 relative" />
                            <div className="text-green-600 text-xs font-bold font-['DM Sans']">0.25 ETH</div>
                        </div>
                        <div className="w-[129px] h-[45px] px-5 py-3.5 left-0 top-[83px] absolute rounded-[50px] border-2 border-violet-800 cursor-pointer hover:bg-violet-700 hover:text-white justify-center items-center gap-2.5 inline-flex">
                            <div className="text-violet-950 text-sm font-normal font-['Averta Demo PE Cutted Demo'] cursor-pointer hover:text-white">Place a bid</div>
                        </div>
                    </div>
                </div>
                <div className="w-[334px] h-[147px] left-[453px] top-[376px] absolute">
                    <div className="w-[147px] h-[147px] left-0 top-0 absolute">
                        <Image className="w-[147px] h-[147px] left-0 top-0 absolute rounded-xl ease-in-out transition-transform hover:scale-105" src={COPic4} alt='' />
                    </div>
                    <div className="w-[180px] h-32 left-[167px] top-[10px] absolute">
                        <div className="left-0 top-0 absolute text-black text-xl font-bold font-['DM Sans']">The Futr Abstr</div>
                        <div className="left-[133px] top-[42px] absolute text-neutral-500 text-sm font-normal font-['DM Sans']">1 of 8</div>
                        <Image className="w-[34px] h-[34px] left-0 top-[34px] absolute rounded-full" src={COPic5} alt='' />
                        <div className="w-[80.53px] h-8 p-2 left-[42px] top-[35px] absolute rounded-md border border-green-600 justify-center items-center gap-[5px] inline-flex">
                            <div className="w-[1.5px] h-3.5 relative" />
                            <div className="text-green-600 text-xs font-bold font-['DM Sans']">0.25 ETH</div>
                        </div>
                        <div className="w-[120px] h-[45px] px-5 py-3.5 left-0 top-[83px] absolute rounded-[50px] border-2 border-violet-800 cursor-pointer hover:bg-violet-700 hover:text-white justify-center items-center gap-2.5 inline-flex">
                            <div className="text-violet-950 text-sm font-normal font-['Averta Demo PE Cutted Demo'] cursor-pointer hover:text-white">Place a bid</div>
                        </div>
                    </div>
                </div>
        <div className="left-[877px] top-0 absolute text-black text-xl font-bold font-['Integral CF']">Top Collections over </div>
        <div className="left-[881px] top-[34px] absolute text-violet-800 text-lg font-bold font-['DM Sans']">Last 7 days</div>
        <div className="w-[540px] h-[0px] left-[839px] top-0 absolute origin-top-left rotate-90 border border-gray-200"></div>
        <div className="w-[313px] h-[66px] left-[881px] top-[89px] absolute">
            <Image className="w-[60px] h-[60px] left-[31px] top-[6px] absolute rounded-full" src={Pic7} alt='' />
            <div className="left-0 top-[20px] absolute text-center text-black text-2xl font-bold font-['DM Sans'] leading-normal">1</div>
            <div className="left-[114px] top-[10px] absolute text-black text-base font-medium font-['DM Sans'] leading-none">CryptoFunks</div>
            <div className="left-[232px] top-[26px] absolute text-right text-teal-500 text-xl font-semibold font-['Poppins'] leading-tight">+26.52%</div>
            <div className="w-[82px] h-6 left-[114px] top-[36px] absolute">
                <div className="left-[21px] top-[5px] absolute text-zinc-600 text-sm font-semibold font-['Poppins'] leading-[14.42px]">19,769.39</div>
                <div className="w-[15px] h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex"><Image src={COPic6} alt=''/></div>
            </div>
            <div className="w-8 h-8 left-[65px] top-0 absolute">
                <div className="w-5 h-[11px] left-[8px] top-[10px] absolute"> <Image src={Pic12} alt=''/> </div>
            </div>
        </div>
        <div className="w-[316px] h-[60px] left-[879px] top-[187px] absolute">
            <Image className="w-[60px] h-[60px] left-[34px] top-0 absolute rounded-full" src={Pic8} alt='' />
            <div className="left-0 top-[14px] absolute text-center text-black text-2xl font-bold font-['DM Sans'] leading-normal">2</div>
            <div className="left-[117px] top-[4px] absolute text-black text-base font-medium font-['DM Sans'] leading-none">Cryptix</div>
            <div className="left-[239px] top-[20px] absolute text-right text-rose-600 text-xl font-semibold font-['Poppins'] leading-tight">+10.52%</div>
            <div className="w-[77px] h-6 left-[117px] top-[30px] absolute">
                <div className="left-[21px] top-[5px] absolute text-zinc-600 text-sm font-semibold font-['Poppins'] leading-[14.42px]">2,769.39</div>
                <div className="w-[15px] h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex"><Image src={COPic6} alt=''/></div>
            </div>
        </div>
        <div className="w-[316px] h-[60px] left-[879px] top-[279px] absolute">
            <Image className="w-[60px] h-[60px] left-[34px] top-0 absolute rounded-full" src={Pic9} alt='' />
            <div className="left-0 top-[14px] absolute text-center text-black text-2xl font-bold font-['DM Sans'] leading-normal">3</div>
            <div className="left-[117px] top-[4px] absolute text-black text-base font-medium font-['DM Sans'] leading-none">Frensware</div>
            <div className="left-[247px] top-[20px] absolute text-right text-teal-500 text-xl font-semibold font-['Poppins'] leading-tight">+2.52%</div>
            <div className="w-[77px] h-6 left-[117px] top-[30px] absolute">
                <div className="left-[21px] top-[5px] absolute text-zinc-600 text-sm font-semibold font-['Poppins'] leading-[14.42px]">9,232.39</div>
                <div className="w-[15px] h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex"><Image src={COPic6} alt=''/></div>
            </div>
        </div>
        <div className="w-[317px] h-[66px] left-[879px] top-[371px] absolute">
            <Image className="w-[60px] h-[60px] left-[35px] top-[6px] absolute rounded-full" src={Pic10} alt='' />
            <div className="left-0 top-[20px] absolute text-center text-black text-2xl font-bold font-['DM Sans'] leading-normal">4</div>
            <div className="left-[118px] top-[10px] absolute text-black text-base font-medium font-['DM Sans'] leading-none">PunkArt</div>
            <div className="left-[252px] top-[26px] absolute text-right text-teal-500 text-xl font-semibold font-['Poppins'] leading-tight">+1.52%</div>
            <div className="w-[77px] h-6 left-[118px] top-[36px] absolute">
                <div className="left-[21px] top-[5px] absolute text-zinc-600 text-sm font-semibold font-['Poppins'] leading-[14.42px]">3,769.39</div>
                <div className="w-[15px] h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex"><Image src={COPic6} alt=''/></div>
            </div>
            <div className="w-8 h-8 left-[69px] top-0 absolute">
                <div className="w-5 h-[11px] left-[8px] top-[10px] absolute"><Image src={Pic12} alt=''/> </div>
            </div>
        </div>
        <div className="w-[316px] h-[60px] left-[879px] top-[469px] absolute">
            <Image className="w-[60px] h-[60px] left-[34px] top-0 absolute rounded-full" src={Pic11} alt='' />
            <div className="left-0 top-[14px] absolute text-center text-black text-2xl font-bold font-['DM Sans'] leading-normal">5</div>
            <div className="left-[117px] top-[4px] absolute text-black text-base font-medium font-['DM Sans'] leading-none">Art Crypto</div>
            <div className="left-[247px] top-[20px] absolute text-right text-rose-600 text-xl font-semibold font-['Poppins'] leading-tight">+2.52%</div>
            <div className="w-[83px] h-6 left-[117px] top-[30px] absolute">
                <div className="left-[21px] top-[5px] absolute text-zinc-600 text-sm font-semibold font-['Poppins'] leading-[14.42px]">10,769.39</div>
                <div className="w-[15px] h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex"><Image src={COPic6} alt=''/></div>
            </div>
        </div>
        <div className="w-[325px] h-[0px] left-[875px] top-[171px] absolute border border-zinc-100"></div>
        <div className="w-[325px] h-[0px] left-[875px] top-[263px] absolute border border-zinc-100"></div>
        <div className="w-[325px] h-[0px] left-[875px] top-[355px] absolute border border-zinc-100"></div>
        <div className="w-[325px] h-[0px] left-[875px] top-[453px] absolute border border-zinc-100"></div>
    </div>
        </Wrapper>
    </div>
  )
}

export default CollectionOver