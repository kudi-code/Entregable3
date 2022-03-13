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
            <img src={characterObject.image} alt="Character" />
            <div className="card--text">
                <h3>{characterObject.name}</h3>
                <p>Status: <b>{characterObject.status}</b></p>
                <p>Origin: <b>{characterObject.origin?.name}</b></p>
                <p>Aparitions: <b>{characterObject.episode?.length}</b></p>
            </div>
        </div>
    )
}
export default ResidentInfo