import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  const blue = () => {
    document.body.style.backgroundColor = "rgb(134,183,254,0.85)"
  }
  const red = () => {
    document.body.style.backgroundColor = "#e44e5d6b"
  }
  const yellow = () => {
    document.body.style.backgroundColor = "#ffc10775"
  }
  return (
    <div >
        <nav className={`navbar navbar-expand-lg bg-success text-${props.mode === 'light'? "white":"dark"}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.mode === 'light'? "white":"dark"}`}  to="/">{props.title}</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode === 'light'? "white":"dark"}`} aria-current="page" to="/">Home</Link>  
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode === 'light'? "white":"dark"}`} to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            <div class="form-check form-switch mx-2">
              <input class="form-check-input" type="checkbox" onClick = {props.func} role="switch" id="flexSwitchCheckDefault"/>
              <label class="form-check-label" for="flexSwitchCheckDefault">{props.mode === "light"? "Dark":"Light"} Mode</label>
              <button className="light-blue" onClick={blue}></button>
              <button className="light-red" onClick={red}></button>
              <button className="light-yellow" onClick={yellow}></button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title : propTypes.string,
  aboutText : propTypes.string
}

Navbar.defaultProps = {
  title : 'Textwiz',
  aboutText : 'About'
}