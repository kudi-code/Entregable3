import React from "react";
import ResidentInfo from "./ResidentInfo";

const ResidentList = ({characters}) =>{    
    return(
        <div className="residentList">
        {characters?.map((character) => {
            return(
        <div key={character}>
            {/* {console.log(character)} */}
            <ResidentInfo characterUrl={character}></ResidentInfo>
        </div>
        )})}
        </div>
    )
}
export default ResidentList