import React,{useState} from 'react'
// Here state concept is used 

export default function TextForm(props) {
    
    const handleUpClick= ()=>{
        // console.log("Upper case was clicked")
        let newText=text.toUpperCase();
        setText(newText)
        
    }
    const handleLoClick= ()=>{
        // console.log("Upper case was clicked")
        let newText=text.toLowerCase();
        setText(newText)
    }
    const speak= ()=>{
        // console.log("Upper case was clicked")
        // let newText=text.speak();
        // setText(newText)
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg)
    }
    const reverseText = () => {
      let splitWord = text.split(" ");
      let reverseWord = splitWord.reverse(" ");
      let joinedWords = reverseWord.join(" ");
      let newText = joinedWords
  
      setText(newText);
    }
    const downloadTxtFile = () => {
      const element = document.createElement("a");
      const file = new Blob([text], {
        type: "text/plain"
      });
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      element.click();
    }

    const handleCopy = ()=>{
      navigator.clipboard.writeText(text);
      // props.showAlert("Copied to clipboard","success")
    
    }

    const clear= ()=>{
      // console.log("Upper case was clicked")
      let newText=("")
      setText(newText)
  }

    const handleOnChange= (event)=>{
        setText(event.target.value)
    }
 
    const [text, setText]=useState('')
    // text="Enter your text"-------------This is wrong way to set the text in state
    // setText("Enter your text")-------------This is correct way to set the text in state

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        {/* How to handle event ----we write with help of this otherwise we cannot write there--------use onChange={handleOnChange} */}
        {/* Value={text} is a state  */}
        <textarea className="form-control" value={text} placeholder="Write something here" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
      color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={reverseText}>Reverse Text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={downloadTxtFile}>Download Text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={clear}>Clear</button>
    </div>
    
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text Summary </h2>
      {/* <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} number of words and {text.replace(/\s+/g, '').length} numbers of characters of text</p> */}
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} number of words and {text.length} numbers of characters of text</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes are time required to read the words</p>

      <h2>Preview of the text</h2>
      <p>{text.length>0? text: "Nothing to preview!"}</p>
    </div>
    </>
  )
}


