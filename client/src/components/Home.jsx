// ----- Components -----
import BreweryProfile from "./Brewery-Profile/BreweryProfile";
import LikeButton from "./LikeButton";
import Hero from "../components/Hero/Hero";
import BreweryList from "./Breweries/BreweryList";
import { motion } from "framer-motion"
//
// ----- App Component -----
//
export default function App() {
  return (
    <motion.div className="App"
    initial={{translateY: "100%"}}
    animate={{translateY: "0%"}}
    exit={{translateY: "-100%", transition: {ease: "linear", duration: 0.125}}}
    >
      <Hero />
    </motion.div>
  );
}
