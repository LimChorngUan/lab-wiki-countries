import React from 'react';
import countries from '../countries.json';

const CountryDetails = props => {
  let countryFound = countries.find(
    country => country.name.common === props.match.params.country
  );

  return (
    <div className="col-6 mt-3">
      <h3>{countryFound.name.common}</h3>
      <hr />
      <div className="d-flex m-3">
        <p style={{width: "100px"}}>Capital</p>
        <p>{countryFound.capital[0]}</p>
      </div>
      <hr />
      <div className="d-flex m-3">
        <p style={{ width: "100px" }}>Area</p>
        <p>{countryFound.area}km<sup>2</sup></p>
      </div>
      <hr/>
      
    </div>
  );
};

export default CountryDetails;
