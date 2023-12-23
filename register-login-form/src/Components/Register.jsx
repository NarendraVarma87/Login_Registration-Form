import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [regi, setRegi] = useState({
    userName: '',
    userPassword: '',
    userAddress: '',
  });

  const handleChange = (event) => {
    setRegi({ ...regi, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8758/user/add', regi);
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error.response?.data || error.message);
    }
  };

  const isFormValid = () => {
    return regi.userName !== '' && regi.userPassword !== '' && regi.userAddress !== '';
  };

  return (
    <div className='container ' style={{border : '2px solid gray'}}>
      <h2 className='text-center p-2 my-3 mx-2 text-decoration-underline'>New User ? Register Here</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="form-label">Enter UserName : </label>
        <input
          type="text"
          className="form-control p-2 m-2"
          name="userName"
          placeholder="Username"
          value={regi.userName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="" className="form-label">Enter Password : </label>
        <input
          type="password"
          className="form-control p-2 m-2"
          placeholder="Password"
          name="userPassword"
          value={regi.userPassword}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="" className="form-label">Enter Address : </label>
        <input
          type="text"
          className="form-control p-2 m-2"
          placeholder="Address"
          name="userAddress"
          value={regi.userAddress}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="Register" className="form-control btn btn-outline-info mb-4 p-2 mx-1" disabled={!isFormValid()} />
      </form>
    </div>
  );
}
