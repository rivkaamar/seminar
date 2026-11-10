import logo from './logo.svg';
import './App.css';
import { Menu } from './components/menu';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './components/routing';

function App() {
  return (
    <div className="App">
      {/* <div style={{backgroundColor:'pink'}}> */}
        <BrowserRouter>
     <Menu></Menu>
     <Routing></Routing>
     </BrowserRouter>
      {/* </div> */}
    
    </div>
  );
}

export default App;
