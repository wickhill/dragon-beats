import React from 'react'
import { useNavigate } from 'react-router-dom';


function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Remove the token from local storage
    navigate('/'); // Navigate to the welcome page
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
}

export default Logout;