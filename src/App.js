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
import Exprlor from './Components/explore/Explore';
import Find from './Components/explore/Find/Find';
import Explore from './Components/explore/Explore';
import PrivatRoute from './Components/PrivatRoute/PrivatRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import MyOders from './Components/MyOrders/MyOders';
import makeAdmin from './Components/Dashboard/MakeAmin/MakeAdmin';
import AuthProvider from './Components/Context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route exact path="/Home" >
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivatRoute path="/order/:id">
              <Order></Order>
            </PrivatRoute>
            <PrivatRoute path="/OrderMordal/:id">
              <OrderMordal></OrderMordal>
            </PrivatRoute>
            <PrivatRoute path="/dasbord">
              <Dashboard></Dashboard>
            </PrivatRoute>

            <Route path="/explore">
              <Explore></Explore>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
