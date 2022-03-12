import React from "react";
import { useState } from "react";
import axios from "axios";

const SearchBox =({ setLocation }) => {
    const [search , setSearch] =useState("")
    // const [id, setId] = useState({})


    const searchType= () =>{
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
    //Traer un tipo de pokemon
        .then( res => {
         setLocation(res.data)
        })
    }

    return (
        <div className="searchBox">
            <input type="text" placeholder="Search a number" onChange={e => setSearch(e.target.value)} value={search}/>
            {/* Pasamos el valor del input a un estado  */}
            <button onClick={searchType}>Search</button>
        </div>
    )

}

export default SearchBox