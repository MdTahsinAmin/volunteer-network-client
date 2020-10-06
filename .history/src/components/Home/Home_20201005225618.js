import React, { useEffect,useState } from 'react';
import './Home.css'
const Home = () => {
    
    const [allEvents , setAllEvents] = useState([]);


    useEffect(()=>{
         //fetch('http://localhost:5200/allEvents')
         //.then(response =>  response.json())
         //.then(data => setAllEvents(data));
         async function fetchData(){
             const request = await fetch('http://localhost:5200/allEvents')
            
             return request;
         }
        fetchData().then(response => response.json())
        .then(data => setAllEvents(data));

    },[])
   
    console.log(allEvents)



    return (
        <div className ='home'>
             <div className='title-searchBox'>
                 <h3 className='title'>I grow by helping people in need.</h3>
                  <input type="text" placeholder='Search...'/>
                   <button className='search-btn'>Search</button>
             </div>
             <div className='allEvents'>
                 
             </div>
        </div>
    );
};

export default Home;