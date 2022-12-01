import logo from "./assets/Rick-And-Morty-Logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="divContainer">
        <img src={logo} className="logo" alt="Rick and Morty" />
      </div>
      <h1>Welcome to the Rick & Morty Universe!</h1>
    </div>
  );
}

export default App;
