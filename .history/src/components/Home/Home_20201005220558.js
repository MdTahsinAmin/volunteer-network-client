import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className ='home'>
             <div className='title-searchBox'>
                 <h3 className='title'>I grow by helping people in need.</h3>
                  <input type="text" placeholder='Search...'/>
             </div>
        </div>
    );
};

export default Home;