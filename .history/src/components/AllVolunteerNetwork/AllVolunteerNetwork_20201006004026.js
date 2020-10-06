import React from 'react';
import './AllVolunteerNetwork.css'

const AllVolunteerNetwork = (props) => {
     console.log(props.event.images);
    
    const color = colorChange();

    const style ={
        backgroundColor:{color},
        width: '270px',
        height: '80px',
        position: 'relative',
        top:'-55px',
        left:'20px',
        zIndex: '10'
    }

    return (
         <div className='col-md-3 all-networks'>
             <img className='event-image' src={require(`../../images/${props.event.images}`)} alt=""/>
             <h5  style={style}>{props.event.eventTitle}</h5>
        </div>
    );
};

const colorChange = () =>{
    const defualtNumber = Math.floor(1+Math.random()*4);
    let value = defualtNumber%4;
    let color='';
    if(value === 0){
       color ='#421FCF';
    }
    else if(value === 1){
        color ='#3F90FC ';
    }
    else if(value === 2){
        color =' #FF7044';
    }
    else{
        color ='#FFBD3E';
    }

    return color;
}


export default AllVolunteerNetwork;