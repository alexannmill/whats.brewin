// ----- Components -----
import BreweryProfile from "./Brewery-Profile/BreweryProfile";
import LikeButton from "./LikeButton";
import Hero from "../components/Hero/Hero";
import EditForm from "./Brewers/EditForm"

//
// ----- App Component -----
//
export default function App() {
  return (
    <div className="App">
      {/* <Hero /> */}
      <EditForm />
    </div>
  );
}
