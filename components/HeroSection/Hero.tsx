"use client"
import Image from 'next/image'
import HeroBtn from '../ui/Buttons/HeroBtn'

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className=' hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Finden, buchen oder mieten Sie ein Auto -- schnell
          und einfach!
        </h1>
        <p className="hero__subtitle">
          Optimieren Sie Ihre Autovermietung
          mit unserem unkomplizierten Buchungsprozess.
        </p>

        <HeroBtn
          title="Entdecken Sie Autos"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className='object-contain'/>
        <div className='hero__image-overlay'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero