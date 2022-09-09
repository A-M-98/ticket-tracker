import './App.scss';
import Card from './components/Card/Card';
import Header from "./components/Header/Header";
import team from './data/ticket-data.js';


function App () {
  return (
    <>
    <div className="app">
      < Header />
      {/* mapping to get all 10 cards and their information(data) */}
      <div className='app__employee-cards'>
      {team.map((employee) => {
        return (< Card key={employee.id} info={employee}/>)
      })}
      </div>
    </div>
    </>
  );
}

export default App;
