import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        data: registerData,
      });

      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        navigate('/home');
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
        url: 'https://reqres.in/api/register',
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

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <h1 class="text-white mx-5 mt-5">REGISTER</h1>
      <input
        class="border-solid border-black shadow-lg mx-5"
        type="email"
        value={registerData.email}
        onChange={(e) =>
          setRegisterData({
            ...registerData,
            email: e.target.value,
          })
        }
      />
      <input
        class="border-solid border-black shadow-lg mx-5"
        type="password"
        value={registerData.password}
        onChange={(e) =>
          setRegisterData({
            ...registerData,
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

export default Register;
