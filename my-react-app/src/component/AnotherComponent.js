import React, {useState} from 'react'
import ReactDOM from "react-dom/client";
import crimemap from '../assets/crimemap.png'
import businessmap from '../assets/bussinesmap.png'
import transportationsmap from '../assets/ptmap.png'
import allbusinessmap from '../assets/allbussinesmap.png'
import allcrimemap from '../assets/allcrimemap.png'
import allhotelmap from '../assets/allhotelmap.png'
import allpolicemap from '../assets/allpolicemap.png'
import allpharmacymap from '../assets/allpharmacymap.png'
import allhospitalsmap from '../assets/allhospitalsmap.png'
import  MapContainer  from '../component/MyComponent';


export default function  AnotherComponent (){


      //FETCH CRIME MAP DATA//
    const [municipioCrime,setDataCrime] = useState([]);
   // const [updated, setUpdated] = useState(municipioCrime);
   

    const handleChangeCrime = (eventCrime) => {
      setDataCrime(eventCrime.target.value);
    };
    const handleClickCrime = () => {
      // 👇 "municipioCrime" stores input field value
     // setUpdated(municipioCrime);
      fetch(`http://localhost:8000/crimeMap/${municipioCrime}`)
            .then((responseCrime)=>responseCrime.json())
            .then((responseDataCrime)=>{
              setDataCrime(responseDataCrime);
            })
            .catch((error)=>{
                
            });
    };

      // FETCHA NEGOCIOS DATA//
    const [municipioNegocios,setDataNegocios] = useState([]);
   // const [updated1, setUpdated1] = useState(municipioNegocios);
    

    const handleChangeNegocios = (eventNegocios) => {
      setDataNegocios(eventNegocios.target.value);
    };
    const handleClickNegocios = () => {
      // 👇 "municipioNegocios" stores input field value
      //setUpdated1(municipioNegocios);
      fetch(`http://localhost:8000/businessMap/${municipioNegocios}`)
            .then((responseNegocios)=>responseNegocios.json())
            .then((responseDataNegocios)=>{
              setDataNegocios(responseDataNegocios);
            })
            .catch((error)=>{
                
            });
           
    };

   

    
  

    //TRANSPORTATION MAP/CLUSTER
  
  
    const handleClickTransportationMap = () => {
      // 👇 "message" stores input field value
      fetch(`http://localhost:8000/publicTransportZMG/`)
            .catch((error)=>{
                alert(error);
            });
    };

    const handleClickAllBusiness = () => {
      // 👇 "message" stores input field value
      fetch(`http://localhost:8000/businessMap/`)
            .catch((error)=>{
                alert(error);
            });
    };


    const handleClickAllCrimes = () => {
      // 👇 "message" stores input field value
      fetch(`http://localhost:8000/crimeMap/`)
            .catch((error)=>{
                alert("Error");
            });
    };

    const handleClickAllHotels = () => {
      // 👇 "message" stores input field value
      fetch(`http://localhost:8000/hotelMap/`)
            .catch((error)=>{
                alert("Error");
            });
    };


    const handleClickAllPolice = () => {
      // 👇 "message" stores input field value
      fetch(`http://localhost:8000/policeMap/`)
            .catch((error)=>{
                alert("Error");
            });
    };


    const handleClickAllPharmacy = () => {
      // 👇 "message" stores input field value
      fetch(`http://localhost:8000/pharmacyMap/`)
            .catch((error)=>{
                alert("Error");
            });
    };


    const handleClickAllHospitals = () => {
      // 👇 "message" stores input field value
      fetch(`http://localhost:8000/hospitalMap/`)
            .catch((error)=>{
                alert("Error");
            });
    };

    return (
        <div align="Center" >
          <h1 style={{color:'Tomato'}}>Build</h1>
          
          <div >
            <label htmlFor='text'>
              <h2  >Accessibility to Transportation in Guadalajara</h2>
              Check for update:{' '}
              <button className='btn btn-success w-50' onClick={handleClickTransportationMap}>Check</button>
              <p/>
              </label>
            {/* SET IMAGE FOR CRIME BARS MAP*/ }
            <img src={transportationsmap}   width="1200" height="800" alt=""/>
          </div>

          <p/>

          <div >
            <label htmlFor='text'>
              <h2 >Hotel Zones in Jalisco</h2>
              Check for update:{' '}
              <button className='btn btn-success w-50' onClick={handleClickAllHotels}>Check</button>
              <p/>
              </label>
            {/* SET IMAGE FOR CRIME BARS MAP*/ }
            <img src={allhotelmap}   width="1200" height="800" alt=""/>
          </div>


           <p/>

          <div >
            <label htmlFor='text'>
              <h2 >Police Stations by Zones in Jalisco</h2>
              Check for update:{' '}
              <button className='btn btn-success w-50' onClick={handleClickAllPolice}>Check</button>
              <p/>
              </label>
            {/* SET IMAGE FOR CRIME BARS MAP*/ }
            <img src={allpolicemap}   width="1200" height="800" alt=""/>
          </div>


           <p/>

          <div >
            <label htmlFor='text'>
              <h2 >Pharmacies by Zones in Jalisco</h2>
              Check for update:{' '}
              <button className='btn btn-success w-50' onClick={handleClickAllPharmacy}>Check</button>
              <p/>
              </label>
            {/* SET IMAGE FOR CRIME BARS MAP*/ }
            <img src={allpharmacymap}   width="1200" height="800" alt=""/>
          </div>



           <p/>

          <div >
            <label htmlFor='text'>
              <h2 >Hospitals by Zones in Jalisco</h2>
              Check for update:{' '}
              <button className='btn btn-success w-50' onClick={handleClickAllHospitals}>Check</button>
              <p/>
              </label>
            {/* SET IMAGE FOR CRIME BARS MAP*/ }
            <img src={allhospitalsmap}   width="1200" height="800" alt=""/>
          </div>

          <p/>

          <div >
            <label htmlFor='text'>
              <h2>All Business Zones in Jalisco</h2>
              Check for update:{' '}
              <button className='btn btn-success w-50' onClick={handleClickAllBusiness}>Check</button>
              <p/>
              </label>
            {/* SET IMAGE FOR ALL BUSINESS MAP*/ }
            <img src={allbusinessmap}   width="1200" height="800" alt=""/>
          </div> 

          <p/>

          <div >
            <label htmlFor='text'>
              <h2 >Crime Rate in Jalisco</h2>
              Check for update:{' '}
              <button className='btn btn-success w-50'  onClick={handleClickAllCrimes}>Check</button>
              <p/>
            </label>
            {/* SET IMAGE FOR ALL BUSINESS MAP*/ }
            <img src={allcrimemap}   width="1200" height="800" alt=""/>
          </div>


         

         <p/>

        {/* SEARCH FIELD FOR BUSINESS MAP STARTS*/ }
          <div className='mb-3'>
              <label htmlFor='text'>

              <h2>Businesses by Area</h2>
              Municipio:{' '}
              <input className='form-control rounded-0' value={municipioNegocios} onChange={handleChangeNegocios} />
              <p/>
              <button className='btn btn-success w-50'  onClick={handleClickNegocios}>Search</button>
              {/*<h2>Message: {municipioNegocios}</h2> */}
              
              {/*<h2>Updated: {updated1}</h2> */}

              </label>
              <p/>
            {/* SET IMAGE FOR BUSINESS MAP*/ }
            <img src={businessmap}   width="1200" height="800" alt=""/>
          </div>
         {/* SEARCH FIELD FOR BUSINESS MAP ENDS*/ }

          {/* SEARCH FIELD FOR CRIME BARS STARTS*/ }
          
          <div className='mb-3'>
            <label htmlFor='text'>
              <h2 >Crime Zones by Area</h2>
              Location:{' '}
              <input className='form-control rounded-0' value={municipioCrime} onChange={handleChangeCrime}/>
              <p/>
              <button className='btn btn-success w-50'  onClick={handleClickCrime}>Search</button>
              {/* <h2>Message: {municipioCrimeBars}</h2>*/ }
              {/* <h2>Updated: {updated2}</h2>*/ }
              </label>
              <p/>
            {/* SET IMAGE FOR CRIME BARS MAP*/ }
            <img src={crimemap}   width="1200" height="800" alt=""/>
          </div> 

           
          <diV>
          <h2>Prediction Safest Zone Closest to Location</h2>
      {/* Use the MapContainer component */}
              <MapContainer />
          </diV>    
        </div>
      
      );  
    }    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AnotherComponent/>);
//export default AnotherComponent;
