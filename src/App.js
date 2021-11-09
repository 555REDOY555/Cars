import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header/Header';
import Home from './Components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddACar from './Components/AddCars/AddACar';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
