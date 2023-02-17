import logo from './logo.svg';
import './App.css';
import NavBar from './nav/NavBar';
import { RouteData } from './nav/RouteData';
// import { Todu } from './Components/Todu';
import ToDo from './nav/ToDo';
import ToDopractice from './nav/ToDopractice';
import Todoo from './nav/Todoo';
import { TableData } from './TableData';


function App() {
  return (
    <div className="App">
      <RouteData/>
      {/* <TableData/> */}
      {/* <Todu/> */}
      {/* <ToDo/> */}
      {/* <ToDopractice/> */}
      {/* <Todoo/> */}
      
    </div>
  );
}

export default App;
