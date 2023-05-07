import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useGeolocation from 'react-hook-geolocation';
import moment from 'moment';


function Weather() {
  const location = useGeolocation();
  console.log('latitude:', location.latitude)

  const [forecaste_data,setForecaste_data] = useState({}); 

  
  const date = Date().slice(4,10);
  console.log(moment().format("MMM DD"))


  const [data, setData] = useState({});
  const baseUrl = 'https://weatherapi-com.p.rapidapi.com/';
  const url1 = `${baseUrl}${'current.json'}`;
  const url2 = `${baseUrl}${'forecast.json'}`;

  const options1 = {
    method: 'GET',
    url: url1,
    params: {q: `${location.latitude},${location.longitude}`},
    headers: {
      'X-RapidAPI-Key': 'f3438130e3msh5ee8a4070e98bdbp1c4dc8jsn539286245d4b',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  const options2 = {
    method: 'GET',
    url: url2,
    params: {q: `${location.latitude},${location.longitude}`, days:3},
    headers: {
      'X-RapidAPI-Key': 'f3438130e3msh5ee8a4070e98bdbp1c4dc8jsn539286245d4b',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  async function fetchWeatherData(){
  
    try {
        const response1 = await axios.request(options1);
        console.log('data--->',response1.data);
        setData(response1.data)
        console.log('data state--->',data);
    } catch (error) {
        console.error(error);
    }
    try {
        const response2 = await axios.request(options2);
        console.log('forecasted--->',response2.data);
        console.log('day 2 temp:--->',response2.data.forecast.forecastday[1].day.avgtemp_c);
        setForecaste_data(response2.data);
        console.log('day 2 temp state:--->',forecaste_data);
    } catch (error) {
        console.error(error);
    }
  }
  
  useEffect(()=>{
    fetchWeatherData();
    
  },[location.latitude])

  return (
    <>

      <div className='current_data'>
          <div className='current_data1'>
            <div className='temp_deg'>
                <span className='temp'>{data.current && data.current.temp_c}°</span>
                <span className='current_date'>{date}</span>
            </div>
            
            <div className='cloud_icon'>
                <img src={data.current && data.current.condition && data.current.condition.icon} height={'80%'} width={'80%'} alt="image" />
                <span className='current_date'>{data.current && data.current.wind_kph} kmph</span>
            </div>
          </div>
          <div className='current_data1'>
            <div className='temp_deg'>
                <span className='temp'>{forecaste_data.forecast && forecaste_data.forecast && forecaste_data.forecast.forecastday[1] && forecaste_data.forecast.forecastday[1].day && forecaste_data.forecast.forecastday[1].day.avgtemp_c }°</span>
                <span className='current_date'>{moment().add(1,'days').format("MMM DD")}</span>
            </div>
            
            <div className='cloud_icon'>
                <img src={forecaste_data.forecast && forecaste_data.forecast && forecaste_data.forecast.forecastday[1] && forecaste_data.forecast.forecastday[1].day && forecaste_data.forecast.forecastday[1].day.condition && forecaste_data.forecast.forecastday[1].day.condition.icon} height={'80%'} width={'80%'} alt="image" />
                <span className='current_date'>{forecaste_data.forecast && forecaste_data.forecast && forecaste_data.forecast.forecastday[1] && forecaste_data.forecast.forecastday[1].day && forecaste_data.forecast.forecastday[1].day.avgvis_km} kmph</span>
            </div>
          </div>
          <div className='current_data1'>
            <div className='temp_deg'>
                <span className='temp'>{forecaste_data.forecast && forecaste_data.forecast && forecaste_data.forecast.forecastday[2] && forecaste_data.forecast.forecastday[2].day && forecaste_data.forecast.forecastday[2].day.avgtemp_c }°</span>
                <span className='current_date'>{moment().add(2,'days').format("MMM DD")}</span>
            </div>
            
            <div className='cloud_icon'>
                <img src={forecaste_data.forecast && forecaste_data.forecast && forecaste_data.forecast.forecastday[2] && forecaste_data.forecast.forecastday[2].day && forecaste_data.forecast.forecastday[2].day.condition && forecaste_data.forecast.forecastday[2].day.condition.icon} height={'80%'} width={'80%'} alt="image" />
                <span className='current_date'>{forecaste_data.forecast && forecaste_data.forecast && forecaste_data.forecast.forecastday[2] && forecaste_data.forecast.forecastday[2].day && forecaste_data.forecast.forecastday[2].day.avgvis_km} kmph</span>
            </div>
          </div>
        </div>
    </>
  )
}

export default Weather