import Htext from "@/shared/Htext";
import { SelectedPage, benefitType } from "@/shared/types";
import {
HomeModernIcon,
UserGroupIcon,
AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./benefit";


const benefits: Array<benefitType> = [
    {
        icon: <HomeModernIcon className = "h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Neque adipiscing amet amet enim. ftytert ftytr guij gyuhgtrety gu g gu giuyui ftythjnjhgr. uiuhughi ey"
    },
    {
        icon: <UserGroupIcon className = "h-6 w-6" />,
        title: "100`s of Diverse Classes",
        description: "hgoeirh hgeorihg eporhgw ergoeijbg ebrigboe irjgblerijbg woeijrbg eirogweirb geriop;e ere rgrgwegerwerg"
    },
    {
        icon: <AcademicCapIcon className = "h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "weuiowneq huweiqpoinwephr wpeuhrp qowherp qwoehrnqwehr pqwehrnwhjeqp wejrowjhe wer woer wuerh 9wuehrwur"
    },
];

const container = {
    hidden:{},
    visable:{
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({setSelectedPage}: Props) {
return <section
id="benefits"
className="mx-auto min-h-full w-5/6 py-28"
>
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
        <div className="md:my-9 md:w-3/5">
            <Htext> More Than Just A Gym </Htext>
            <p className="my-5 text-sm "> 
                We Provide World Class Fitness Equipment, Trainers and Classes To Get You To Your Ultimate Fitness Goals With Ease. We Provide Care Into Each And Every Member
            </p>
        </div>

        <motion.div className="md:flex items-center justify-between gap-8 mt-5"
        initial = "hidden"
        whileInView ="visable"
        viewport = {{once: true, amount: 0.35}}
        variants={container}
        >
            {benefits.map((benefits: benefitType) => (
                <Benefit 
                key = {benefits.title}
                icon={benefits.icon}
                title={benefits.title}
                description={benefits.description}
                setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>
    </motion.div>
</section>
}

export default Benefits;
