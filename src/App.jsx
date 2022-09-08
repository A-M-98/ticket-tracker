import './App.scss';
import Card from './components/Card/Card';
import Header from "./components/Header/Header";
import team from './data/ticket-data.js';

console.log(team)

function App() {
  return (
    <>
    <div className="app">
      < Header />
      <div>
      <Card name={team.name} role={team.role}/>
      </div>
    </div>
    </>
  );
}

export default App;
