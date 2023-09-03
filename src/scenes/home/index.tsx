import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types'
import HomePageText from "@/assets/HomePageText.png"
import SponserRedbull from "@/assets/SponsorRedBull.png"
import SponserForbes from "@/assets/SponsorForbes.png"
import SponserFortune from "@/assets/SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {setSelectedPage: (value: SelectedPage) => void
};

const Home = ({setSelectedPage}: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");


  return (
<section id='home' className='gap-16 bg-gray-20 py-16 md:h-full md:pb-0 '>

  {/* image and main header*/}
<motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 mt-8'
  onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
>

  {/* main header*/}
  <div className='z-10 mt-24 md:basis-3/5' >

    {/* headings*/}
    <motion.div className='md:-mt-20'
    initial="hidden"
    whileInView="visable"
    viewport={{ once: true, amount: 0.5}}
    transition={{duration: 0.7}}
    variants={{
      hidden:{opacity: 0, x: -50},
      visable:{opacity:1, x:0},
    }}
    >
      <div className='relative'>
        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evovletext '>
          <img src={HomePageText} alt="Home-Page-Text" />
        </div>
      </div>
        <p className='mt-8 text-sm'>
          Dongol Gym. Unparalleled Training Fitness Classes, World Class Studios to get the Body Shape that you dream of... Get Your Dream Body Now!.
          </p>
    </motion.div>
    <motion.div className='mt-8 flex items-center gap-8 '
      initial="hidden"
      whileInView="visable"
      viewport={{ once: true, amount: 0.5}}
      transition={{ delay:0.2, duration: 0.7}}
      variants={{
        hidden:{opacity: 0, x: -50},
        visable:{opacity:1, x:0},
      }}>
      <ActionButton setSelectedPage={setSelectedPage}>
        Join now
      </ActionButton>
      <AnchorLink 
      className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
      >
        LearnMore
      </AnchorLink>
    </motion.div>
  </div>

{/* xxxxxxxxximage*/}
</motion.div>

{/* Sponsors*/}
{isAboveMediumScreens && (
  <div className='h-[135px] w-full bg-primary-100 py-10'>
    <div className='mx-auto w-5/6'>
      <div className='flex w-full items-center justify-between gap-8 '>
        <img src={SponserRedbull} alt="sponser-redbull" />
        <img src={SponserForbes} alt="sponser-forbes" />
        <img src={SponserFortune} alt="sponser-fortune" />
      </div>
    </div>
  </div>
)}

</section>  )
}

export default Home