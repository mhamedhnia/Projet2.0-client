import './SignIn.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../../JS/actions/user';
import img from '../../4.jpg';
const Signin = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(login(user, history));
  };

  return (
    <div className="signin">
      <div className="img-left">
        <img className="img" alt="#" src={img} />
      </div>
      <div className="card-signin">
        <h2 className="card-title">Sign In</h2>
        <div className="card-content">
          <label>Email</label>
          <input placeholder="Email" /* mb={3} */ type="email" name="email" onChange={handleChange} />
          <label>Password</label>
          <input placeholder="Password" type="password" name="password" onChange={handleChange} />

          <button type="submit" className="btn-login " onClick={handleConfirm}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signin;
