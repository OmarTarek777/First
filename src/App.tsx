import Navbar from "@/scenes/Navbar"
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benifts";
import Ourclasses from "./scenes/ourclasses";
import Contactus from "./scenes/Contactus";
import Footer from "./scenes/Footer";




function App() {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

useEffect( () => {
const handleScroll = () => {
  if (window.scrollY === 0) {
    setIsTopOfPage(true);
    setSelectedPage(SelectedPage.Home);
  } if (window.scrollY !== 0) setIsTopOfPage(false)
}
window.addEventListener("scroll", handleScroll)
return () => window.removeEventListener("scroll", handleScroll);
}, [])


  return <div className="app bg-gray-20">
    <Navbar 
    isTopOfPage ={isTopOfPage}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <Ourclasses setSelectedPage={setSelectedPage} />
    <Contactus setSelectedPage={setSelectedPage}/>
    <Footer />
    </div>;
}

export default App;
