import '../App.css';
import React, { useEffect, useState } from 'react';

function Global() {
  const [global, setGlobal] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.covid19api.com/summary")
      const data = await res.json();
      // console.log(data);
      setGlobal(data.Global);
    }
    getData();
  }, []);

  if (!global) {
    return <div>
      Loading ...
    </div>

  } else
    return (<>
      {
        Object.keys(global).map((val, ind) => {
          return <div key={ind}>
            <h6>  {val} =  {global[val]}
            </h6>
          </div>
        })
      }

    </>)

}

export default Global;