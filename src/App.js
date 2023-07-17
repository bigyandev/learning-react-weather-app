import React, { useState, useEffect } from 'react'
import './App.css';
import IsdayComponent from "./IsdayComponent.js";
import LoaderComponent from "./LoaderComponent.js";
const FetchComponent = () => {
  const [datas, setData] = useState({});
  const [inputField, setInputField] = useState("NEPAL")
  const [btnClicked, setBtnClicked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const target = await fetch(`https://api.weatherapi.com/v1/current.json?key=da7e22d2b34d48f6a39124748231607&q=${inputField}&aqi=no`)
      const value = await target.json();
      setData(value)
      setIsLoading(false)
      setBtnClicked(false)
    }
    getData()
  }, [btnClicked]);
  
   console.log(datas)


   //location object //
   const location = !isLoading && datas ?.location;
   const countryName = location?.country;
   console.log(countryName)
   // weather object //
   const current = !isLoading && datas ?.current;
   const temperature = current?.feelslike_c;
   const is_day = current?.is_day;
   
   const condition = current?.condition?.text;
   const icon = current?.condition?.icon;
   

   if(icon) {
  return (
    <>
    
     <div className='design'>
     
      <input type="text" value={inputField} onChange={(e) => setInputField(e.target.value)}/>
      <button onClick={() => setBtnClicked(true)}>SEARCH</button>
      <h2>{countryName}</h2>
     
      <img src={icon} />
      <h2>{temperature}&deg;C</h2>
      
     
      
      <h4>{condition}</h4>
      

     </div>
     
    </>
  )
  }
  else {
    return (
      <>
      <LoaderComponent />
      </>
    )
  }
  

}
export default FetchComponent

