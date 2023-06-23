import React from 'react'

export default function About(props) {

//     const [myStyle,setMyStyle]=useState({

//         color:'black',
//         backgroundColor:'white'
// })

let myStyle={
  color: props.mode === 'dark'?'white':'#042743',
  backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)': 'white',
}

// const[btnTxt, setBtnTxt]=useState('Enable Dark Mode')

// Just for practice to enable dark mode on button

// const toggleStyle=()=>{
//     if(myStyle.color === 'black'){
//         setMyStyle({
//             color:'white',
//         backgroundColor:'black',
//         // border:'5px solid white'
//     })
//     setBtnTxt("Enable Light Mode")
//     }
//     else{
//         setMyStyle({
//             color:'black',
//         backgroundColor:'white'
        
//     })
//     setBtnTxt("Enable Dark Mode")
//     }
//     }
    

  return (
    <>
    
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2 className= 'my-3 mx-2'>About US</h2>
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong> 
                </button>
           </h2>
           <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Textytils gives you a free way to analyze your text quickly and efficiently. Be it word count, character count .    
                </div>
            </div>
        </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong> Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Textutils is free character counter tool that provides instant character count and word count statistics for a given text. Textutils reportsthe number of words and character. Thus it is suitable for writing text with words/ character limits.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This word counter software works in any web browser like a chrome, FireFox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blogs, books, excel document, pdf document etc.  
      </div>
    </div>
  </div>
  </div>
  {/* just for practice to enable dark mode on button  */}
    {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnTxt}</button>
    </div> */}
    </div>
</>

  )
}
