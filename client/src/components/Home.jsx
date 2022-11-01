// ----- Components -----
import BreweryProfile from "./BreweryProfile";
import LikeButton from "./LikeButton";
import Hero from "../components/Hero/Hero";
import BrewerieList from "./Breweries/BrewerieList";

//
// ----- App Component -----
//
export default function App() {
  return (
    <div className="App">
      <Hero />

      <BrewerieList />
    </div>
  );
}
