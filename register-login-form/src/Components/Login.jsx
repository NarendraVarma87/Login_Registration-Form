import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    userName: '',
    userPassword: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.get('http://localhost:8758/user/get/' + user.userName)
      .then((res) => {
        if ((res.data.userPassword) == (user.userPassword)) {
          navigate('/hOmEpAgE');
        } else {
          alert('Please enter the correct username and password');
          console.log(res)
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  };

  return (
    <div className='container p-3 m-5' style={{border : '2px solid gray'}}>
    <h1 className="text-center">LogIn to Your Account</h1>
      <form onSubmit={handleSubmit} className='text-center d-inline align-items-center'>
        <label htmlFor="" id='userName' className="form-label">Enter UserName : </label>
        <input
          type="text"
          placeholder="UserName"
          className="form-control"
          autoComplete='off'
          name="userName"
          value={user.userName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="" id='userPassword' className="form-label">Enter Password : </label>
        <input
          type="password"
          className="form-control "
          autoComplete='off'
          placeholder="UserPassword"
          name="userPassword"
          value={user.userPassword}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          value="Login"
          className="form-control btn btn-outline-success my-1 mx-4 px-3 "
          style={{width:"45%"}}
        />
        <button onClick={handleRegister} className='btn btn-outline-primary my-1 mx-4' style={{width:"45%"}}>Register</button>
      </form>
    </div>
  );
}
