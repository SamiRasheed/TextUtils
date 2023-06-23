// default logo code

// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
// Routing topic start here
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// ----------------------------

/**************** Practice code********
let name="Sami Rasheed";
let user={
  firstname: "And Sheraz",
  lastname: "Khan"
}
*******************************/
// function base component
function App() {
  // JSX synyax from return bracket to close bracket
  
   const[mode,setMode] = useState('light'); // tells whethher dark mode is enable or disabled
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#042743'
      document.title='TextUtils-Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      document.title='TextUtils-Light Mode'
   }
  }



  return (
    
    /*-----------------Default code-----------------------------------
    // <></> tag is JSX fragment used for adding extra lines
    <>
    <h1>This is me</h1>
    
    <div classNameName="App">
    <header classNameName="App-header">
    <img src={logo} classNameName="App-logo" alt="logo" />
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <p>Its working in react js </p>
    <a
    classNameName="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Learn React With Sami Dev
    </a>
    </header>
    </div>
    </>
    ----------------------------------------------------------------*/
    
    <>
    
    {/************* Practice code****************
    <nav>
    <li>Home</li>
    <li>About</li>
    <li>Conatact Us</li>
    </nav>
    <div classNameName="container">
    <h1>Hello, {name}  {user.firstname} {user.lastname}</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, ad fugiat. Debitis blanditiis dolore optio porro cum saepe quae. Dolor impedit officia dicta minus, minima maiores blanditiis repellendus nobis dignissimos et explicabo, excepturi nam?</p>
    </div> 
  **************************************************/}

{/* ((((((((((((((((((((((((((((((((This is our first component)))))))))))))))))))))))))))))))) */}

    <Router>
    <Navbar title="TEXTUTILlS" about="About US" mode={mode} toggleMode={toggleMode}/>

    {/*Agr yahan meray props pass nai howay then jo Navbar.js may default props bnaye wo show hn gy  */}
    
    {/* <Navbar/> */}
{/* -----------------------------------------------------------For routing -------------------------------------------- */}

        <Routes>
          
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode}/>}></Route>

        </Routes>
    </Router>
    {/* (((((((((((((((((((((((((((((((((((This is our 2nd component))))))))))))))))))))))))))))))))))) */}

    {/* <div className="container my-3">
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    </div> */}

    {/* ((((((((((((((((((((((((((((((((((((((((This is our 3rd component)))))))))))))))))))))))))))))))))))))))) */}
    
    {/* <div className="container my-5">
    <About/>
    </div> */}
    
    </>
  );
}

export default App;
