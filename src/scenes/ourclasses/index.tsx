import { SelectedPage, classType } from '@/shared/types'
import Redbull from "@/assets/SponsorRedBull.png"
import { motion } from 'framer-motion';
import Htext from '@/shared/Htext';
import Class from './class';

const classes: Array<classType> = [
    {
    name: "Weight Training Classes",
    image: Redbull,
    },
    {
    name: "Abs Training Classes",
    description: "yo what the freck is you even on about but anyways what ever bruh",
    image: Redbull,
    },
    {
    name: "Adventure Training Classes",
    image: Redbull,
    },
    {
    name: "Fitness Classes",
    description: "yo what the freck is you even on about but anyways what ever bruh",
    image: Redbull,
    },
    {
    name: "Training Classes",
    image: Redbull,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Ourclasses = ({setSelectedPage,}: Props) => {
    return (
        <section id='ourclasses' className='w-full bg-primary-100 py-28'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div className='mx-auto w-5/6 '
                initial="hidden"
                whileInView="visable"
                viewport={{ once: true, amount: 0.5}}
                transition={{duration: 0.7}}
                variants={{
                hidden:{opacity: 0, x: -50},
                visable:{opacity:1, x:0},
                }}>
                    <div className='md:w-3/5'>
                        <Htext> Our Classes </Htext>
                        <p className='py-5 text-end text-lg'>
مبدئيا إحنا معندناش كلاسيس بتاتا و الحوار ممل فشخ و بصراحه فاكس تيجي لأنك هتتعبنا معاك الاااا لوووو{"..."} جبت معاك مبلغ مش بطال و شكرا ههههه                        </p>
                    </div>
                </motion.div>
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2400px] whitespace-nowrap'>
                        {classes.map((item: classType, index) => (
                            <Class 
                            key = {`${item.name}-${index}`}
                            name = {item.name}
                            description = {item.description}
                            image = {item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default Ourclasses