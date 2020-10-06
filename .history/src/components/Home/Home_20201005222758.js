import React, { useEffect } from 'react';
import './Home.css'
const Home = () => {
    
    const [allEvents , setAllEvents] = useState([]);


    useEffect(()=>{
         fetch('http://localhost:5200/allEvents')
         .then(response =>  response.json())
         .then(data => setAllEvents(data));
    },[])




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