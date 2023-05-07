import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import backGRound0 from '../../static/images/backgroundwallpapers/bg0.jpg'
import backGRound1 from '../../static/images/backgroundwallpapers/bg1.jpg'
import backGRound2 from '../../static/images/backgroundwallpapers/bg2.jpg'
import backGRound3 from '../../static/images/backgroundwallpapers/bg3.jpg'
import backGRound4 from '../../static/images/backgroundwallpapers/bg4.jpg'
import backGRound5 from '../../static/images/backgroundwallpapers/bg5.jpg'
import backGRound6 from '../../static/images/backgroundwallpapers/bg6.jpg'
import backGRound7 from '../../static/images/backgroundwallpapers/bg7.jpg'
import backGRound8 from '../../static/images/backgroundwallpapers/bg8.jpg'
import backGRound9 from '../../static/images/backgroundwallpapers/bg9.jpg'
import backGRound10 from '../../static/images/backgroundwallpapers/bg10.jpg'
import backGRound11 from '../../static/images/backgroundwallpapers/bg11.jpg'
import backGRound12 from '../../static/images/backgroundwallpapers/bg12.jpg'
import backGRound13 from '../../static/images/backgroundwallpapers/bg13.jpg'
import backGRound14 from '../../static/images/backgroundwallpapers/bg14.jpg'
import backGRound15 from '../../static/images/backgroundwallpapers/bg15.jpg'
import backGRound16 from '../../static/images/backgroundwallpapers/bg16.jpg'
import backGRound17 from '../../static/images/backgroundwallpapers/bg17.jpg'
import backGRound18 from '../../static/images/backgroundwallpapers/bg18.jpg'
import backGRound19 from '../../static/images/backgroundwallpapers/bg19.jpg'
import { IoLocation } from 'react-icons/io5';


function Navbar() {
    const bgs = [backGRound0,backGRound1,backGRound2,backGRound3,backGRound4,backGRound5,backGRound6,backGRound7,backGRound8,backGRound9,backGRound10,backGRound11,backGRound12,backGRound13,backGRound14,backGRound15,backGRound15,backGRound16,backGRound17,backGRound18,backGRound19,]

    const backgroundImage = '../static/images/backgroundwallpapers/bg3.jpg'
          
    const [wallpapers, setWallpapers] = useState({});

    // function to generate random numbe between 0-14
    function generateRandom(maxLimit = 19){
        let rand = Math.random() * maxLimit;
        console.log(rand); 
      
        rand = Math.floor(rand); // 99
      
        return rand;
      }
    
    const options = {
        method: 'GET',
        url: 'https://pexelsdimasv1.p.rapidapi.com/v1/search',
        params: {
          query: 'nature',
          locale: 'en-US',
          per_page: '15',
          page: '1'
        },
        headers: {
          Authorization: 'LVVmJTZCSpdFd4NejPTaJyMKXKdPagujXfpehXRytFL5MfMakIl66vv6',
          'X-RapidAPI-Key': 'e7ddfaa08emshef9518843a5b804p1dd9dcjsn52528b172d70',
          'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
        }
      };
      
    async function fetchWallpapaers(){
        try {
            const response = await axios.request(options);
            console.log('wallpaers:',response.data);
            console.log('wallpaers111:',response.data.photos[generateRandom()].src.original);
            setWallpapers(response.data.photos[generateRandom()].src.original);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        fetchWallpapaers();
    },[])
  return (
    <>
        <div className="Navbar">
            <ul>
                <li>
                    <NavLink to='weather/' >Weather</NavLink>
                </li>
                <li>
                    <NavLink to='#' >New & Events</NavLink>
                </li>
                <li>
                    <NavLink to='#' >Gallery</NavLink>
                </li>
           
            </ul>
        </div>

        <div id="wallpaper">
        <img className='backGroundImage' src={bgs[generateRandom()]} width={'100%'} height={'100%'}/>
        <div className='image_data'>
            <span id='area'><IoLocation/>Area</span>
            <span id='city'>{}</span>
        </div>
        </div>
    </>
  )
}

export default Navbar