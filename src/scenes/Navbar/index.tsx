import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "@/scenes/Navbar/Link"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

// to write the snippit type "tsrafce"

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage:(value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
const flexBetween = "flex items-center justify-between";
const [isMenuToggled, setIsMenuToggled] = useState<boolean>((false)); 
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
const navBarBackground = isTopOfPage ? "" : " bg-primary-100 drop-shadow ";

return (
    <nav>
    <div className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16 `}>
            {/* left- side */}
            <img src={Logo} alt="logo" />

            {/* right - side*/}
            {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Our classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Contact us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
            </div>
            <div className={`${flexBetween} gap-8`}>
                <p>sign in</p>
                <ActionButton setSelectedPage = {setSelectedPage}>become a member</ActionButton>
            </div>
            </div>) 
            : (
                <button className = "rounded-full bg-secondary-500 p-2" 
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                > 
                <Bars3Icon className="h-6 w-6 text-white"/>
                </button>
            )}
        </div>
        </div>
    </div>

{/* Mobile Menu Model */}
    {!isAboveMediumScreens && isMenuToggled && (
    <div className=" fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">  
        {/* close button */}
        <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
        </div>  
    {/* menu items */}
<div className={` ml-[33%] flex flex-col gap-10 text-2xl `}>
                <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Benifits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Our classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Contact us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
            </div>
    </div>
    )}
    </nav>
);
};

export default Navbar;
