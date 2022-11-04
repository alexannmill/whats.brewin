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
    initial={{opacity: 0, y: 100 }}
    animate={{opacity: 1, y: 0 }}
    exit={{opacity: 0, y: -100, transition: {duration: 0.15}}}
    >
      <Hero />
    </motion.div>
  );
}
