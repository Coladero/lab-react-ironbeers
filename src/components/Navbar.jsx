import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
      <div>
    <div className='navbar'>
        <Link to="/beers">All Beers</Link><br />
        <Link to="/beers/random-beer">Random Beer</Link><br />
        <Link to="/beer/new-beer">New Beer</Link>
    </div>
    </div>
  )
}

export default Navbar