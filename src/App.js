
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import ProductPage from './Components/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header></Header>
     <Switch>

<Route path="/home">
<Home></Home>
</Route>
<Route path="/products">
  <ProductPage></ProductPage>
</Route>


     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
