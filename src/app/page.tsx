import AmazeNFT from '@/sections/AmazeNFT'
import CollectionNFT from '@/sections/CollectionNFT'
import CollectionOver from '@/sections/CollectionOver'
import DiscoverNFT from '@/sections/DiscoverNFT'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import SignUpNFT from '@/sections/SignUpNFT'
import Image from 'next/image'

export default function Home() {
  return (<>
  <main>
    {/* Hero section */}
    <Hero/>
    <AmazeNFT/>
    <CollectionOver/>
    <CollectionNFT/>
    <SignUpNFT/>
    <DiscoverNFT/>
    <Footer/>
  </main>  
  </>
  )
}
