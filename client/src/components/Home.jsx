// ----- Components -----
import BreweryProfile from "./BreweryProfile";
import LikeButton from "./LikeButton";
import Hero from "../components/Hero/Hero"

//
// ----- App Component -----
//
export default function App() {
  
  return (
    <div className="App">
      <Hero />
      {/* <BreweryProfile breweryName="barrel-and-beam-marquette" /> */}
      {/* <LikeButton /> */}
    </div>
  );
}
