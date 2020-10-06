import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AllVolunteerNetwork.css'

const AllVolunteerNetwork = (props) => {
    
    const history = useHistory();
    
    const colors = colorChange();
     
    const style ={
        position: 'relative',
        width: '270px',
        height: '80px',
        background: colors,
        zIndex:'10',
        top:'-75px',
        borderRadius: '0px 0px 10px 10px',
     }
     
    const handleChange = (title) =>{
         history.push(`/allEvents/${title}`);
    }
    
    return (
          <div className='col-md-3 all-networks' onClick={handleChange(props.event.eventTitle)}>
             <img className='event-image' src={require(`../../images/${props.event.images}`)} alt=""/>
             <div style={style}>
             <h5 className='footer-title'>{props.event.eventTitle}</h5>
             </div>
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