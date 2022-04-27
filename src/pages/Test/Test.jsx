import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Test() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);
  return <div>Test</div>;
}

export default Test;
