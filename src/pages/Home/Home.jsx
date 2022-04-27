import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate('/login');
  }

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);
  return (
    <>
      <button
        class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        onClick={() => handleLogout()}
      >
        LOGOUT
      </button>
    </>
  );
}

export default Home;
