import '../App.css';
import React, { useEffect, useState } from 'react';

function Countries() {
  const [countries, setCountries] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      setCountries(data.Countries);
    };

    getData();
  }, []);
  if (!countries) {
    return <div>
      Loading ...
    </div>
  }

  return (<div>
    {
      countries.map((val, ind) => {
        delete val.Premium;
        delete val.ID;
        return Object.keys(val).map((value, ind) => {
          return <div key={ind}>
            <h6>  {value} =  {val[value]}
            </h6>
          </div>
        })
      })}
  </div>
  )

}

export default Countries;