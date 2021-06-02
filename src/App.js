import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import ShopCategory from './components/ShopCategory';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
import Menu from './components/shopCategory/Menu';
import {PersistGate} from 'redux-persist/integration/react';



function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router>
      <Header /> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/shop" component={ShopCategory}/> 
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/shop/:id" component={Menu}/>
        </Switch>
      </Router>
      <Footer/>
      </PersistGate>
    </Provider>
  );
}

export default App;
