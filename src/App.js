import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header/Header';
import Home from './Components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddACar from './Components/AddCars/AddACar';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import Order from './Components/Order/Order/Order';
import OrderMordal from './Components/Order/OrderMordal/OrderMordal';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route exact path="/Home" >
            <Home></Home>
          </Route>
          <Route path="/addCar">
            <AddACar></AddACar>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/order/:id">
            <Order></Order>
          </Route>
          <Route path="/OrderMordal/:id">
            <OrderMordal></OrderMordal>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
