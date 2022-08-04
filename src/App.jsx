import './App.css';
import Loader from "./components/Loader/Loader";
import Spinner from "./components/Spinner/Spinner";
import TournamentItem from "./components/TornamentItem/TournamentItem";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";

function App() {
  return (
    <div className="App">
        <h1 className="title">Poker</h1>
        <Spinner/>
        <PlayerInfo/>
      <Loader/>

      <TournamentItem register={true}/>
      <TournamentItem register={true}/>
      <TournamentItem
        register={false}
      />
      <TournamentItem register={false}/>
      <TournamentItem register={true}/>
      <TournamentItem register={false}/>


    </div>
  );
}

export default App;
