
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import ProductPage from './Components/Home/ProductPage/ProductPage';
import Footer from './Components/Footer/Footer';
import ProductCategoryPage from './Components/ProductCategoryPage/ProductCategoryPage';
import AllProductContext from './Contexts/AllProductContext';

function App() {
  return (
    <div className="App">
      <AllProductContext>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            <ProductPage></ProductPage>
          </Route>

          <Route path="/product/:Category">
            <ProductCategoryPage></ProductCategoryPage>
          </Route>
          

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AllProductContext>
    </div>
  );
}

export default App;
