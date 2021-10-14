
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header></Header>
     <Switch>

<Route path="/home">
<Home></Home>
</Route>


     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
