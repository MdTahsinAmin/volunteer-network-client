import axios from 'axios';
import React, { useState } from 'react';
import './CreateNetwork.css'
import { useForm } from "react-hook-form";
const CreateNetwork = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));
    return (
        <div className="create-network">
              <form onSubmit={handleSubmit(onSubmit)}>
              <input name="example" defaultValue="test" ref={register} />
              <input name="exampleRequired" ref={register({ required: true })} />
              <input type="submit" />
              </form>
        </div>
           
    );
};

export default CreateNetwork;