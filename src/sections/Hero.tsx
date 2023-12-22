import Wrapper from '@/shared/Wrapper'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import ethereum2 from '@/assets/HeroPics/ethereum 2.png'
import heroPic1 from '@/assets/HeroPics/Ellipse 95.png'
import heroPic2 from '@/assets/HeroPics/unsplash_E8Ufcyxz514.png'
import heroPic3 from '@/assets/HeroPics/unsplash_pVoEPpLw818.png'
import heroPic4 from '@/assets/HeroPics/unsplash_tZCrFpSNiIQ.png'

const Hero = () => {
  
  return (
    <section>
        <Wrapper>

            <div className="w-[1229px] h-[440px] left-[75px] top-[60px] relative">
                {/* left div*/}
                <div >
                    <div className="w-[196px] h-[154px] left-0 top-[270px] absolute">
                        <div className="w-[7px] h-[7px] left-0 top-0 absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-0 top-[21px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-0 top-[42px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-0 top-[63px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-0 top-[84px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-0 top-[105px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-0 top-[126px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-0 top-[147px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[21px] top-0 absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[21px] top-[21px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[21px] top-[42px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[21px] top-[63px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[21px] top-[84px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[21px] top-[105px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[21px] top-[126px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[21px] top-[147px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[42px] top-0 absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[42px] top-[21px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[42px] top-[42px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[42px] top-[63px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[42px] top-[84px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[42px] top-[105px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[42px] top-[126px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[42px] top-[147px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[63px] top-0 absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[63px] top-[21px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[63px] top-[42px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[63px] top-[63px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[63px] top-[84px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[63px] top-[105px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[63px] top-[126px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[63px] top-[147px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[84px] top-0 absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[84px] top-[21px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[84px] top-[42px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[84px] top-[63px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[84px] top-[84px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[84px] top-[105px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[84px] top-[126px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[84px] top-[147px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[105px] top-0 absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[105px] top-[21px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[105px] top-[42px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[105px] top-[63px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[105px] top-[84px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[105px] top-[105px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[105px] top-[126px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[105px] top-[147px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[126px] top-0 absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[126px] top-[21px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[126px] top-[42px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[126px] top-[63px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[126px] top-[84px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[126px] top-[105px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[126px] top-[126px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[126px] top-[147px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[147px] top-0 absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[147px] top-[21px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[147px] top-[42px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[147px] top-[63px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[147px] top-[84px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[147px] top-[105px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[147px] top-[126px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[147px] top-[147px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[168px] top-0 absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[168px] top-[21px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[168px] top-[42px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[168px] top-[63px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[168px] top-[84px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[168px] top-[105px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[168px] top-[126px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[168px] top-[147px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[189px] top-0 absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[189px] top-[21px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[189px] top-[42px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[189px] top-[63px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[189px] top-[84px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[189px] top-[105px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[189px] top-[126px] absolute bg-zinc-100 rounded-full" />
                        <div className="w-[7px] h-[7px] left-[189px] top-[147px] absolute bg-zinc-100 rounded-full" />
                    </div>
                    
                    <Link href="/" className='w-[220px] h-[65px] px-10 py-5 left-[53px] top-[270px] absolute bg-violet-800 cursor-pointer hover:bg-violet-600  rounded-[60px] justify-center items-center gap-2.5 inline-flex'>
                        <div className="">
                            <div className="text-white text-xl font-['Averta Demo PE Cutted Demo'] tracking-wider ease-in-out transition-transform hover:scale-105">Explore Now</div>
                        </div>
                    </Link>        
                    <div className="w-[600px] left-[52px] top-[15px] absolute text-black text-[40px] font-bold font-['Integral CF'] tracking-normal gap-1">DISCOVER, AND COLLECT DIGITAL ART NFTS </div>
                    <div className="w-[385px] left-[53px] top-[140px] absolute text-neutral-600 text-l font-normal font-['DM Sans'] leading-loose">Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</div>
                    <div className="w-[116px] h-[75px] left-[52px] top-[365px] absolute">
                        <div className="left-0 top-0 absolute"><span style={{ color: 'black', fontSize: '35px', fontWeight: 'bold', font: 'Integral CF', letterSpacing: 'widest' }}>98</span><span style={{ color: 'black', fontSize: '35px', fontWeight: 'bold', font: 'Integral CF', letterSpacing: 'widest' }}>K+</span></div>
                        <div className="left-0 top-[43px] absolute text-neutral-600 text-xl font-normal font-['DM Sans'] leading-loose">Artwork</div>
                    </div>
                    <div className="w-28 h-[75px] left-[191px] top-[365px] absolute">
                        <div className="left-0 top-0 absolute"><span style={{ color: 'black', fontSize: '35px', fontWeight: 'bold', font: 'Integral CF', letterSpacing: 'widest' }}>12</span><span style={{ color: 'black', fontSize: '35px', fontWeight: 'bold', font: 'Integral CF', letterSpacing: 'widest' }}>K+</span></div>
                        <div className="left-0 top-[43px] absolute text-neutral-600 text-xl font-normal font-['DM Sans'] leading-loose">Auction</div>
                    </div>
                    <div className="w-28 h-[75px] left-[326px] top-[365px] absolute">
                        <div className="left-0 top-0 absolute"><span style={{ color: 'black', fontSize: '35px', fontWeight: 'bold', font: 'Integral CF', letterSpacing: 'widest' }}>15</span><span style={{ color: 'black', fontSize: '35px', fontWeight: 'bold', font: 'Integral CF', letterSpacing: 'widest' }}>K+</span></div>
                        <div className="left-0 top-[43px] absolute text-neutral-600 text-xl font-normal font-['DM Sans'] leading-loose">Artist</div>
                    </div>
                </div>
            
                {/* right div*/}
                <div >        
                    <Image className="w-[310px] h-[341px] left-[919px] top-[49.50px] absolute rounded-[18.60px]" src={heroPic4} alt="heroPic4"/>
                    <Image className="w-[356px] h-[391.60px] left-[842px] top-[24.20px] absolute rounded-[21.36px]" src={heroPic3} alt="heroPic3"/>
                    <Image className="w-[400px] h-[440px] left-[762px] top-0 absolute rounded-3xl" src={heroPic2} alt="heroPic2"/>
                    <div className="w-[348px] h-[73.85px] left-[788px] top-[342.56px] absolute">
                        <div className="w-[348px] h-[73.85px] left-0 top-0 absolute bg-white bg-opacity-20 rounded-xl backdrop-blur-[50px]" />
                        <div className="w-[298px] h-[45.13px] left-[26px] top-[14.36px] absolute ease-in transition-transform hover:scale-105">
                            <div className="w-[78px] h-[21.54px] left-[23px] top-[23.59px] absolute text-white text-base font-bold font-['DM Sans']">0.25 ETH</div>
                            <div className="w-[103px] h-[21.54px] left-[195px] top-[23.59px] absolute"><span style={{ color: 'white', fontSize: 'base', fontWeight: 'bold', fontFamily: 'DM Sans' }}>12</span><span style={{ color: 'white', fontSize: 'base', fontWeight: 'normal', fontFamily: 'DM Sans' }}>h  </span><span style={{ color: 'white', fontSize: 'base', fontWeight: 'bold', fontFamily: 'DM Sans' }}>43</span><span style={{ color: 'white', fontSize: 'base', fontWeight: 'normal', fontFamily: 'DM Sans' }}>m  </span><span style={{ color: 'white', fontSize: 'base', fontWeight: 'bold', fontFamily: 'DM Sans' }}>42</span><span style={{ color: 'white', fontSize: 'base', fontWeight: 'normal', fontFamily: 'DM Sans' }}>s</span></div>
                            <div className="w-[75px] h-[16.41px] left-0 top-0 absolute text-white text-xs font-medium font-['DM Sans']">Current Bid</div>
                            <div className="w-[51px] h-[16.41px] left-[195px] top-0 absolute text-white text-xs font-medium font-['DM Sans']">Ends in</div>
                            <div className="w-[13px] h-[21.33px] left-0 top-[23.59px] absolute" />
                        </div>
                    </div>
                    <div className="w-[133.40px] h-[32.82px] left-[788px] top-[71.79px] absolute">
                        <div className="w-[87px] h-[26.67px] left-[46.40px] top-[1.64px] absolute text-white text-xl font-bold font-['DM Sans']">Arkhan17</div>
                        <Image className="w-8 h-[32.82px] left-0 top-0 absolute rounded-full" src={heroPic1} alt='heroPic1' />
                    </div>
                    <div className="w-[290px] h-[36.92px] left-[788px] top-[26.67px] absolute text-white text-[25px] font-bold font-['DM Sans']">Abstr Gradient NFT</div>
                    <div className="origin-top-left rotate-[30deg] w-[101px] h-[101px] left-[780px] top-[198px] absolute">
                        <div className="w-[101px] h-[101px] left-0 top-0 absolute origin-top-left rotate-[30deg] bg-orange-100 rounded-full" />
                        <div className="origin-top-left rotate-[30deg] w-[80.25px] h-[80.25px] left-[30.88px] top-[14.49px] absolute">
                            <div className="w-[5.06px] h-[10.15px] left-[32.76px] top-[18.91px] absolute origin-top-left rotate-[30deg] text-center text-black text-[10px] font-normal font-['Roboto']">L</div>
                            <div className="w-[2.76px] h-[10.14px] left-[40.49px] top-[24.06px] absolute origin-top-left rotate-[42.03deg] text-center text-black text-[10px] font-normal font-['Roboto']">I</div>
                            <div className="w-1.5 h-[10.14px] left-[45.48px] top-[28.97px] absolute origin-top-left rotate-[54.06deg] text-center text-black text-[10px] font-normal font-['Roboto']">V</div>
                            <div className="w-[5.06px] h-[10.14px] left-[50.35px] top-[36.35px] absolute origin-top-left rotate-[66.08deg] text-center text-black text-[10px] font-normal font-['Roboto']">E</div>
                            <div className="w-[0px] h-[10.13px] left-[53.86px] top-[46.42px] absolute origin-top-left rotate-[78.08deg] text-center text-black text-[10px] font-normal font-['Roboto']"> </div>
                            <div className="w-1.5 h-[10.12px] left-[54.73px] top-[51.99px] absolute origin-top-left rotate-[90.07deg] text-center text-black text-[10px] font-normal font-['Roboto']">A</div>
                            <div className="w-1.5 h-[10.12px] left-[54.41px] top-[60.39px] absolute origin-top-left rotate-[102.05deg] text-center text-black text-[10px] font-normal font-['Roboto']">U</div>
                            <div className="w-1.5 h-[10.12px] left-[52.37px] top-[68.54px] absolute origin-top-left rotate-[114.02deg] text-center text-black text-[10px] font-normal font-['Roboto']">C</div>
                            <div className="w-[5.53px] h-[10.12px] left-[48.67px] top-[76.10px] absolute origin-top-left rotate-[125.98deg] text-center text-black text-[10px] font-normal font-['Roboto']">T</div>
                            <div className="w-[2.77px] h-[10.12px] left-[42.46px] top-[83.64px] absolute origin-top-left rotate-[137.95deg] text-center text-black text-[10px] font-normal font-['Roboto']">I</div>
                            <div className="w-[6.45px] h-[10.12px] left-[37.45px] top-[87.89px] absolute origin-top-left rotate-[149.93deg] text-center text-black text-[10px] font-normal font-['Roboto']">O</div>
                            <div className="w-[6.45px] h-[10.13px] left-[30.07px] top-[91.92px] absolute origin-top-left rotate-[161.92deg] text-center text-black text-[10px] font-normal font-['Roboto']">N</div>
                            <div className="w-[0px] h-[10.14px] left-[18.82px] top-[94.68px] absolute origin-top-left rotate-[173.92deg] text-center text-black text-[10px] font-normal font-['Roboto']"> </div>
                            <div className="w-[3.22px] h-[10.14px] left-[11.82px] top-[94.83px] absolute origin-top-left rotate-[-174.06deg] text-center text-black text-[10px] font-normal font-['Roboto']">•</div>
                            <div className="w-[0px] h-[10.14px] left-[2.27px] top-[92.96px] absolute origin-top-left rotate-[-162.03deg] text-center text-black text-[10px] font-normal font-['Roboto']"> </div>
                            <div className="w-[5.06px] h-[10.15px] left-[-3.38px] top-[90.71px] absolute origin-top-left rotate-[-150deg] text-center text-black text-[10px] font-normal font-['Roboto']">L</div>
                            <div className="w-[2.76px] h-[10.14px] left-[-11.12px] top-[85.56px] absolute origin-top-left rotate-[-137.97deg] text-center text-black text-[10px] font-normal font-['Roboto']">I</div>
                            <div className="w-1.5 h-[10.14px] left-[-16.11px] top-[80.65px] absolute origin-top-left rotate-[-125.94deg] text-center text-black text-[10px] font-normal font-['Roboto']">V</div>
                            <div className="w-[5.06px] h-[10.14px] left-[-20.98px] top-[73.27px] absolute origin-top-left rotate-[-113.92deg] text-center text-black text-[10px] font-normal font-['Roboto']">E</div>
                            <div className="w-[0px] h-[10.13px] left-[-24.48px] top-[63.19px] absolute origin-top-left rotate-[-101.92deg] text-center text-black text-[10px] font-normal font-['Roboto']"> </div>
                            <div className="w-1.5 h-[10.12px] left-[-25.35px] top-[57.63px] absolute origin-top-left rotate-[-89.93deg] text-center text-black text-[10px] font-normal font-['Roboto']">A</div>
                            <div className="w-1.5 h-[10.12px] left-[-25.04px] top-[49.23px] absolute origin-top-left rotate-[-77.95deg] text-center text-black text-[10px] font-normal font-['Roboto']">U</div>
                            <div className="w-1.5 h-[10.12px] left-[-22.99px] top-[41.08px] absolute origin-top-left rotate-[-65.98deg] text-center text-black text-[10px] font-normal font-['Roboto']">C</div>
                            <div className="w-[5.53px] h-[10.12px] left-[-19.30px] top-[33.52px] absolute origin-top-left rotate-[-54.02deg] text-center text-black text-[10px] font-normal font-['Roboto']">T</div>
                            <div className="w-[2.77px] h-[10.12px] left-[-13.09px] top-[25.97px] absolute origin-top-left rotate-[-42.05deg] text-center text-black text-[10px] font-normal font-['Roboto']">I</div>
                            <div className="w-[6.45px] h-[10.12px] left-[-8.08px] top-[21.73px] absolute origin-top-left rotate-[-30.07deg] text-center text-black text-[10px] font-normal font-['Roboto']">O</div>
                            <div className="w-[6.45px] h-[10.13px] left-[-0.70px] top-[17.69px] absolute origin-top-left rotate-[-18.08deg] text-center text-black text-[10px] font-normal font-['Roboto']">N</div>
                            <div className="w-[0px] h-[10.14px] left-[10.55px] top-[14.94px] absolute origin-top-left rotate-[-6.08deg] text-center text-black text-[10px] font-normal font-['Roboto']"> </div>
                            <div className="w-[3.22px] h-[10.14px] left-[17.55px] top-[14.79px] absolute origin-top-left rotate-[5.94deg] text-center text-black text-[10px] font-normal font-['Roboto']">•</div>
                            <div className="w-[0px] h-[10.14px] left-[27.11px] top-[16.66px] absolute origin-top-left rotate-[17.97deg] text-center text-black text-[10px] font-normal font-['Roboto']"> </div>
                        </div>
                        <div className="w-[18.91px] h-[31.03px] left-[28.02px] top-[75.88px] absolute origin-top-left rotate-[160deg]"><Image src={ethereum2} alt="ethereum2"/></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Hero

