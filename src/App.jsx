import './App.css';
import Loader from "./components/Loader/Loader";
import Spinner from "./components/Spinner/Spinner";
import TournamentItem from "./components/TornamentItem/TournamentItem";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";

function App() {
  return (
    <div className="App">
      <Loader/>
      <Spinner/>
      <TournamentItem/>
      <PlayerInfo/>

    </div>
  );
}

export default App;
