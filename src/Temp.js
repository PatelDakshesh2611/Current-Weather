import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
export default function Temp() {
    const[Pressure,upd]=useState('')
    const[humidity,upd1]=useState('')
    const[search,update]=useState('Ahmedabad')
    const[location,upd2]=useState('')
    const[temp,upd3]=useState('')
    const[cond,upd4]=useState('')
    const[css,u]=useState({
      display:'none'
    })
   const[check,updc]=useState(1)
  
    
    async function  getTT(){
      const res = await axios.get("https://yahoo-weather5.p.rapidapi.com/weather?location="+search,{
        headers: {
          'X-RapidAPI-Key': '1c8642a721mshd8e67a89226dde5p15b92cjsn1b6a262d533e',
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    })
    
    upd2(res.data.location.city)
    var t=res.data.current_observation.condition.temperature
    var t1=parseFloat((t-32)/1.8).toFixed(2);
    upd3(t1)
    upd4(res.data.current_observation.condition.text)
    upd(res.data.current_observation.atmosphere.pressure)
    upd1(res.data.current_observation.atmosphere.humidity)
    u((previousState => {
      return { ...previousState, display:'block' }
    }))
   
    }
  
  
  return (
   
    <div>
        
      <section class="vh-100">
  <div class="container py-5 h-100">
  <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-8 col-lg-6 col-xl-4">

        <h3 class="mb-4 pb-2 fw-normal">Check the weather forecast</h3>

        <div class="input-group rounded mb-3">
          <input type="search" class="form-control rounded" placeholder="City" aria-label="Search"
            aria-describedby="search-addon" onChange={(e)=>{update(e.target.value)}} />
          <button onClick={()=>getTT()} >Getweather</button>
        </div>

        <div class="mb-4 pb-2">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio"   name="inlineRadioOptions"  id="inlineRadio1"
              value="option1" checked />
            <label class="form-check-label" for="inlineRadio1">Celsius</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
              value="option2"  />
            <label class="form-check-label" for="inlineRadio2">Farenheit</label>
          </div>
        </div>
        <div className="container" style={css}>
        <div class="card shadow-0 border">
          <div class="card-body p-4">

            <h4 class="mb-1 sfw-normal">{location}</h4>
            <p class="mb-2">Current temperature: <strong>{temp}</strong></p>
            <p>Condition: <strong>{cond}</strong></p>
            <p>Humidity: <strong>{humidity}</strong>, Pressure: <strong>{Pressure}</strong></p>
          </div>
        </div>
        </div>

      </div>
    </div>

  </div>
</section>
    </div>
  )
}
