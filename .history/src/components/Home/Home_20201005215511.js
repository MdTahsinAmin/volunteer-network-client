import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className ='home'>
             <div>
                 <h1>I grow by helping people in need.</h1>
                 <input type="text" name='' placeholder='Search...'/> 
                 <button className='search-btn'>Search</button>
             </div>
        </div>
    );
};

export default Home;