// ----- Components -----
import Hero from "../components/Hero/Hero";
import BrewerHomepage from "./Brewers/BrewerHomepage"
import { motion } from "framer-motion"
import EditForm from "./Brewers/EditForm";
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
      {/* <Hero /> */}
      <EditForm />
      <BrewerHomepage />
    </motion.div>
  );
}
