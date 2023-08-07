import "./App.css";
import PeliAzar from "./PeliAzar";
import Poster from "./Poster";
import Trailer from "./Trailer";

function App() {
  return (
    <div className="App">
      <PeliAzar />
      <Poster titulo="Top Gun" />
      <Trailer />
    </div>
  );
}

export default App;
