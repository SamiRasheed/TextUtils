// rfc shortcut for React Functio base Component

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    // first i can make it java variable and whole statement is object
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">TextUtils</a> */}

{/* ---------------------Routing Tip 1-------------------------------------------------- */}

    {/* ---------Agr hm page ko relaoad howay bgair next page open krna chahtay hyn to hmmay a ko link say or href ko to sy replace krna hy */}

 {/* --------------------------------------------------------------------------------------------------------    */}
    {/* <a className="navbar-brand" href="/">{props.title}</a> */}  
    <Link className="navbar-brand" to="/">{props.title}</Link>    {/* Use routing tip 1 */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
        
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          <Link className="nav-link" aria-current="page" to="/">Home</Link> {/* Use routing tip 1 */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">About</a> */}

          {/* <a className="nav-link" href="/">{props.about}</a> */}
          <Link className="nav-link" to="/about">{props.about}</Link> {/* Use routing tip 1 */}
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">
        
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* Success------------green color
            Primary------------Blue
            Danger ------------Red
        */}
        {/* <button className="btn btn-outline-primary" type="submit">Search</button> */}
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
      {/* Adding switches in navbar */}
      {/* first div we make it java class  */}
      <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}> {/* ==='light'?'dark':'light'------ternary operator*/}
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
      </div>
    </div>
  </div>
</nav>  
  )
}
// pts shortcut for proptypes string

// Adding security in other words
Navbar.propTypes = {
  // title:  PropTypes.string

  // agr app.js may props na b pass hn to hm default props ka use krryn gay ta k error na aye koi
  title:  PropTypes.string.isRequired,
  about:  PropTypes.string.isRequired
}

//Agr koi app.js may value pass nai hogi then default props ki value howa ho gi  

Navbar.defaultProps = {
  title : 'Set title here',
  about: 'About text here'
}