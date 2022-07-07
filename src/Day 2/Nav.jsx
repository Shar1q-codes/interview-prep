import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
         <ul typeof='none'>

<NavLink to='/home'>
<li className="topListItem">Home </li></NavLink>

<NavLink  to='/about'>
<li className="topListItem">About </li></NavLink> 
</ul>
    </div>
  )
}

export default Nav