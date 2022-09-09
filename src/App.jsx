import './App.scss';
import Card from './components/Card/Card';
import Header from "./components/Header/Header";
import team from './data/ticket-data.js';


function App () {
  return (
    <>
    <div className="app">
      < Header />
      <div className='app__employee-cards'>
   
      </div>
    </div>
    </>
  );
}

export default App;
