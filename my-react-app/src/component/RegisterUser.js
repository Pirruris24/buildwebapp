import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Validation from './RegisterValidation';

const RegisterUser = () => {

    const[values, setValues] = useState({
      name: '',
      email: '',
      password: ''
  })


  const [error, setError] = useState({});

  const handleInput = (event) =>{

      setValues(prev => ({...prev, [event.target.name]: [event.target.value]}) ) 
  }

  const navigate = useNavigate();
  const handleSubmit = (event) =>{

      event.preventDefault();
      console.log(values.email);
      
      console.log(values);
    
     
      setError(Validation(values));
       
      if(values.name !=="" && values.email !=="" && values.password !==""){
        fetch(`http://localhost:8000/addBuildUser/${values.name}/${values.email}/${values.password}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        }) .then((res)=>{
                  navigate('/login');
              })
              .catch((error)=>{
                console.error('Error adding user:', error);
              });  
      }
      
  }
  
  return (

    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
              <h2 style={{color:'Tomato'}}>Register User</h2>
                  <form action='' onSubmit={handleSubmit}>
                  <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' placeholder='Enter Name' name='name'
                        onChange={handleInput}  className='form-control rounded-0'></input>
                        {error.name && <span className='text-danger'>{error.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email'
                        onChange={handleInput}  className='form-control rounded-0'></input>
                        {error.email && <span className='text-danger'>{error.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password'
                        onChange={handleInput}  className='form-control rounded-0'></input>
                        {error.password && <span className='text-danger'>{error.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0' >Register</button>
                   <p/>
                   <Link to='/' className='btn btn-default border w-100 rounded-0 text-decoration-none'>Home</Link> 
                 </form>       
            </div>
        </div>

    

    
  );
};

export default RegisterUser;


/*

<div align="Center" style={{background:'#F5f5dc'}}>
      <h2 style={{color:'Tomato'}}>Register User</h2>
      {/* Add your registration form or content here} */

  /*    
      <label>
        User First Name:
        <input type="text" value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)} />
      </label>
      <br />
      <label>
        User Last Name:
        <input type="text" value={userLastName} onChange={(e) => setUserLastName(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
      </label>
      <br />

      <label>
        Organization:
        <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAddUser}>Add User</button>
      <div>
          <h2>Response from FastAPI:</h2>
        
        </div>
     
    </div>

////////////////////////////////////////////////////////////////////
const handleAddUser = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/addBuildUser/${userFirstName} ${userEmail} ${userPassword}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to add user');
        }
        if (response.ok) {
          
          const result = await response.json();
           console.log('User added:', result);
           navigate('/home');
        }
  
        
      } catch (error) {
        console.error('Error adding user:', error);
      }
    };
*/