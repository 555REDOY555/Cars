
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header/Header';
import Home from './Components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import Order from './Components/Order/Order/Order';
import OrderMordal from './Components/Order/OrderMordal/OrderMordal';
import Explore from './Components/explore/Explore';
import PrivatRoute from './Components/PrivatRoute/PrivatRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AuthProvider from './Components/Context/AuthProvider';
import Footer from './Components/Footer/Footer';
import Review from './Components/Review/Review';
import AddAReview from './Components/Review/AddAReview/AddAReview';

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
            <PrivatRoute path="/review">
              <Review></Review>
            </PrivatRoute>
            <PrivatRoute path="/addreview">
              <AddAReview></AddAReview>
            </PrivatRoute>

            <Route path="/explore">
              <Explore></Explore>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
