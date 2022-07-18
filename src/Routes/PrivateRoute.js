import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem('token');
  if (token) {
    return <Route component={Component} />;
  }
  return <Redirect to="/" />;
};

export default PrivateRoute;
