import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({characterUrl}) =>{

    const [characterObject , setCharacter] = useState({})
    
    useEffect(() => {
        axios.get(`${characterUrl}`)
        .then(res => setCharacter(res.data))
    },[characterUrl])

    return(
        <div className="card">        
            <h3>{characterObject.name}</h3>
            <img src={characterObject.image} alt="Character" />      
            <p>Status: <b>{characterObject.status}</b></p>
            <p>Origin: <b>{characterObject.origin?.name}</b></p>
            <p>Aparitions: <b>{characterObject.episode?.length}</b></p>

        </div>
    )
}
export default ResidentInfo