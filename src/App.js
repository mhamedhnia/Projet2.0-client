import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import PrivateRoute from './Routes/PrivateRoute';
import Signin from './Components/SignIn/SignIn';
import Admin from './Pages/Admin';
import AddProPage from './Pages/AddProPage';
import ContactPage from './Pages/ContactPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Signin} />
      <PrivateRoute path="/Admin" component={Admin} />
      <PrivateRoute path="/addProduct" component={AddProPage} />
      <PrivateRoute path="/contactList" component={ContactPage} />
    </Switch>
  </Router>
);

export default App;
