import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (authUser) => {
  return (
    <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
      <div className="container">
        <div className="topbar-left">
          <button className="topbar-toggler">☰</button>
          <Link className="topbar-brand" to="/">
            <img className="logo-default" src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="logo" />
            <img className="logo-inverse" src={`${process.env.PUBLIC_URL}/assets/img/logo-light.png`} alt="logo" />
          </Link>
        </div>
        <div className="topbar-right">
          <ul className="topbar-nav nav">
            <li className="nav-item">
              <Link className="nav-link" to="/"></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/articles/create">Write new article</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">Hey {authUser.authUser && authUser.authUser.name} !
                  <i className="fa fa-caret-down" />
              </a>
              <div className="nav-submenu">
                <a className="nav-link" style={{color: 'black'}}>My articles</a>
                <a className="nav-link" style={{color: 'black'}}>Logout</a>
              </div>
            </li>
            {
              !authUser.authUser && <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
              </li>
            }

            {
              !authUser.authUser &&  <li className="nav-item">
              <Link className="nav-link" to="/register">Signup</Link>
            </li>
            }
            
           
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;