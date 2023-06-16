import React, { useState } from 'react'
import axios from 'axios'

export default function Weather() {
  const[sunrise_time,upd]=useState('')
  const[humidity,upd1]=useState('')
  const[search,update]=useState('')
  const[conv,updates]=useState('')
 
  async function  getTT(){
    const res = await axios.get("https://yahoo-weather5.p.rapidapi.com/weather?location="+search,{
      headers: {
        'X-RapidAPI-Key': '1c8642a721mshd8e67a89226dde5p15b92cjsn1b6a262d533e',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
      }
  })
console.log(res.data)
  upd(res.data.current_observation.astronomy.sunrise)
  upd1(res.data.current_observation.atmosphere.humidity)
  
 
  }
  const conversion=(value)=>{
   
  }
  return (
    <div>
        enter your location: <input type="text"  onChange={(e)=>{update(e.target.value)}}/>
        <button onClick={()=>getTT()}>submit</button> 
        <div className="container" style={css}>
        <h1>Sunrise time: {sunrise_time}</h1>
        <h1>Humidity: {humidity}</h1>
        </div>  
        
    </div>
    
    
  )
}
