import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);
  return <div>Home</div>;
}

export default Home;
