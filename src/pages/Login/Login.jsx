import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        data: loginData,
      });

      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleData = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 class="text-white mx-5 mt-5">LOGIN</h1>
      <input
        class="border-solid border-black shadow-lg mx-5"
        type="email"
        value={loginData.email}
        onChange={(e) =>
          setLoginData({
            ...loginData,
            email: e.target.value,
          })
        }
      />
      <input
        class="border-solid border-black shadow-lg mx-5"
        type="password"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({
            ...loginData,
            password: e.target.value,
          })
        }
      />
      <button
        class="bg-white px-5"
        onClick={() => {
          handleSubmit();
          handleData();
        }}
      >
        Login
      </button>
    </>
  );
}

export default Login;
