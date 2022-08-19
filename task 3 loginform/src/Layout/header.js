import '../App.css';
import React  from 'react';
import {Link} from 'react-router-dom';
function Header() {
  return (<>
    {/* <h1>
      Header
    </h1> */}

    <div className='header'>

<div className='heading'>
<h1>
    Dhara Rajput
</h1>
</div>

<div className='menu'>

<Link className='links' to = "/" > Global</Link>
<Link className='links' to = "/countries" >Countries</Link>
<Link className='links' to = "/graph" >Graph</Link>
<Link className='links' to = "/counter" >Counter</Link>
<Link className='links' to = "/login" >Login</Link>

</div>

    </div>


    {/* <button className='links'>login</button> */}


  </>)

}

export default Header;