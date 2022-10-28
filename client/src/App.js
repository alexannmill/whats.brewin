import logo from "./logo.svg";
import "./App.css";
import FormUsers from "./components/users/FormUsers";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo " alt="logo" />
        <p className="text-red-900">
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FormUsers>Register</FormUsers>
      </header>
    </div>
  );
}

export default App;
