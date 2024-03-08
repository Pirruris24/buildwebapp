import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
   // authorized=true;
    
   /* if(!authorized){
        return <Navigate to="/login" />


    }*/
    const navigate=useNavigate();
    const handleClickLogIn=()=>{
      navigate('/login');
    }

    const handleClickRegisterUser=()=>{
      navigate('/registeruser');
    }
  return (
    
    <div>
      <div>
        <h2 style={{color:'Tomato'}} >Sign-In</h2>
        {/* Add content for the home page */}
        <button className='btn btn-success w-100 rounded-0' onClick={handleClickLogIn}>Log-In</button>
        <p/>
        <button className='btn btn-success w-100 rounded-0' onClick={handleClickRegisterUser}>Register User</button>
      </div>
      
    </div>
  );
};

export default Home;