// ----- Components -----
import BreweryProfile from "./Brewery-Profile/BreweryProfile";
import LikeButton from "./LikeButton";
import Hero from "../components/Hero/Hero";
import EditForm from "./Brewers/EditForm"
import { motion } from "framer-motion"
//
// ----- App Component -----
//
export default function App() {
  return (
    <motion.div className="App"
    initial={{translateY: "100%"}}
    animate={{translateY: "0%", transition: {ease:"easeInOut", duration: 0.5}}}
    exit={{translateY: "-200%", transition: {ease: "easeInOut", duration: 0.75}}}
    >
      <Hero />
    </motion.div>
  );
}
