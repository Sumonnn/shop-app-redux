import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-between'>

        <NavLink to="/">
          <div>
            <img className='w-32' src="https://imgs.search.brave.com/P61MxCih4aUsHyOcizS5rAwTJamHRUCPoql4m6wXWr0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzM0LzUzLzUx/LzM2MF9GXzMzNDUz/NTEzNl92dmJXYUtF/cHNISU1TNGRwSlV4/Z1haTDZjbFFYN1ZH/cy5qcGc" alt="" />
          </div>
        </NavLink>


        <div>

          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>

        </div>
      </div>
    </div>
  )
}

export default Navbar