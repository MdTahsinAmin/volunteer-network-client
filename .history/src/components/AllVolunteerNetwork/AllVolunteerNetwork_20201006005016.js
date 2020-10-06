import React from 'react';
import './AllVolunteerNetwork.css'

const AllVolunteerNetwork = (props) => {
     console.log(props.event.images);
    
    const colors = colorChange();
     
    const style ={
        position: 'relative',
        width: '270px',
        height: '80px',
        background: colors,
        zIndex:'10',
        top:'-150px',
        borderRadius: '0px 0px 10px 10px',
}

    return (
         <div className='col-md-3 all-networks'>
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