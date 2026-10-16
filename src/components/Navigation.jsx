import React from 'react'
import Hero from './Hero'
const Navigation = () => {
  return (
    <div>
  
         <nav className='logo'>
        <img className='h-20 w-10' src="https://img.freepik.com/premium-vector/phone-icon-logo-vector-design-template_827767-1199.jpg?w=2000" alt="" />

        <ul>
            <li href="#">Menu</li>
             <li href="#">Location</li>
              <li href="#">Content</li>
               <li href="#">About</li>
            
        </ul>

        <button id="btn1">Login</button>
      </nav>

      <Hero/>
    </div>
  )
}

export default Navigation