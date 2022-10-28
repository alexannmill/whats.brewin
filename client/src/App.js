import "./App.css";
import axios from "axios";

function App() {
  axios
    .get(
      "https://api.openbrewerydb.org/breweries?by_city=san_diego&per_page=50"
    )
    .then((res) => {
      console.log("res.data:", res.data);
    });
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
