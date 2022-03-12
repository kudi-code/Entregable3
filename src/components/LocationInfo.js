import React from "react";

const LocationInfo = ({location}) => {


    return(
    <div className="locationInfo">
        <h1>{location.name}</h1>
        <div className="locationInfo--subtext">
          <p><b>Type: </b>{location.type}</p>
          <p><b>Dimension: </b>{location.dimension}</p>
          <p><b>Number of residents: </b>{location.residents === undefined ? 0 : location.residents.length}</p>
        </div>
      </div>
    )

}
export default LocationInfo