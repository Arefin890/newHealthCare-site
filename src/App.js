import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home/Home';
import AboutUs from './pages/AboutUS/AboutUs';
import Login from './pages/Home/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ServiceDescription from './pages/ServiceDescription/ServiceDescription';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/serviceDetails/:serviceId">
              <ServiceDescription></ServiceDescription>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
