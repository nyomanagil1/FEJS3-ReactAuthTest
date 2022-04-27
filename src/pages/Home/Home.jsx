import React, { useEffect } from 'react';

function Home() {
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  if (!token) {
    return <div>Loading...</div>;
  }

  return <div>Home</div>;
}

export default Home;
