import "./App.css";

import React,{useState,useRef, useEffect, Fragment} from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import DOMPurify from "dompurify";

// import {Route, BrowserRouter as Router} from 'react-router-dom'
import Card from "./components/Card";

const paillierBigint = require('paillier-bigint')



function Editor(props) {
    const [server ,setServer] = useState("https://homomorphic-server.herokuapp.com");

    const [selectionStart, setSelectionStart]= useState()
    // const [orValue, setorValue] = useState({__html: `This <span className="aka">is a</span> demonstration.`});
    const [orValue, setorValue] = useState(`This is a demonstration.`);
    const [areaOrValue, setareaOrValue] = useState(`This is a demonstration.`);

    // const [orValueEditable, setorValueEditable] = useState(`This is a demonstration.`);
    const [orValueEditable, setorValueEditable] = useState({__html:`This <span class="aka">is a</span> demonstration.`});
    const [prevValueEditable, setprevValueEditable] = useState(`This <span class="aka">is a</span> demonstration.`);


    const [areaOrValueEditable, setareaOrValueEditable] = useState(`This is a demonstration.`);

    const [originalPlainText, setoriginalPlainText] = useState([]);
    const [currentSelection, setcurrentSelection] = useState([0,0]);

    const [disable, setDisable] = useState(false)

    const [originalText, setoriginalText] = useState([]);

    const [reloadFile, setreloadFile] = useState(false);


    const fileId = props.location.pathname.replace("/","")
    var [myPublicKey, setmyPublicKey] =  useState();
    var [myPrivateKey, setmyPrivateKey] = useState();
    // console.log(fileId);
    const textInput = useRef(null); 

    const setAreas = (text) =>{
      setorValue(text)
      setareaOrValue(text)
    }
    const setAreas2 = (text) =>{
      setprevValueEditable(text)
      setorValueEditable({__html:text})
      setareaOrValueEditable(text)
    }

    const onAreaChange = (event) =>{
        //location of the cursur 
        console.log(textInput);
        // console.log(textInput.current.selectionStart);
        console.log(event.target.value); 
        let passedValue =      event.target.value  
        passedValue = passedValue.replace("<","◄")
        passedValue = passedValue.replace(">","►")
        console.log(passedValue);

        
        // DOMPurify.addHook("beforeSanitizeAttributes", function (node, data) {
        //   // Set text node content to uppercase
        //   console.log(node.textContent);

        //   if (node.nodeName && node.nodeName === "#text") {
            
        //     // let textnode = document.createTextNode("<")
        //     // console.log(typeof(textnode));
        //     node.textContent = node.textContent.replace("<","◄")
        //     node.textContent = node.textContent.replace(">","►")

        //     // console.log ( node.textContent)
        //     // node.textContent = node.textContent.toUpperCase();
        //   }
        // });

        let changeTo = DOMPurify.sanitize(passedValue
          , {
          ALLOWED_TAGS: ["span"],
          ALLOWED_ATTR: ["class","className"]
        }
        )
        // let changeTo = event.target.value
        // setorValue({__html: changeTo})
        setorValue(changeTo)
        setareaOrValue(changeTo)
    }

    const onAreaChangeEditable = (event) =>{
      console.log("area change", currentSelection)
      console.log(event)
      //location of the cursur 
      console.log(textInput);
      // console.log(textInput.current.selectionStart);
      let passedValue =      event.target.value
        passedValue = passedValue.replace("<","◄")
        passedValue = passedValue.replace(">","►")
        event.target.value = event.target.value.replace("<","◄")
        event.target.value = event.target.value.replace(">","►")
      console.log(passedValue);


      // if((currentSelection[0] === currentSelection[1]) && currentSelection[0]>originalPlainText.length){
      //   let temp = prevValueEditable
      //   let holder = DOMPurify.sanitize(temp, {
      //     ALLOWED_TAGS: [""],
      //     ALLOWED_ATTR: [""]
      //   }).length

      //   console.log(temp , "temp" , holder ,temp.length, passedValue.length)
      //   passedValue = `${temp}<span class="midori">${passedValue.slice(holder)}</span>`
      //   console.log(passedValue , "temp2222")
      // }
      // setprevValueEditable(passedValue)
      // DOMPurify.addHook("beforeSanitizeAttributes", function (node, data) {
      //   // Set text node content to uppercase
      //   console.log(node.textContent);

      //   if (node.nodeName && node.nodeName === "#text") {
          
      //     // let textnode = document.createTextNode("<")
      //     // console.log(typeof(textnode));
      //     node.textContent = node.textContent.replace("<","◄")
      //     node.textContent = node.textContent.replace(">","►")

      //     // console.log ( node.textContent)
      //     // node.textContent = node.textContent.toUpperCase();
      //   }
      // });

      let changeTo = DOMPurify.sanitize(passedValue
        , {
        ALLOWED_TAGS: ["span"],
        ALLOWED_ATTR: ["class","className"]
      }
      )
      console.log(changeTo , "temp222")

      let changeTo2 = DOMPurify.sanitize(passedValue
        
      )
      // let changeTo = event.target.value
      // setorValue({__html: changeTo})
      // setorValueEditable(changeTo)
      setorValueEditable({__html: passedValue})
      setareaOrValueEditable(event.target.value)
  }

    const SubmitToServer = async () =>{
      setDisable(true)
      setTimeout(function(){
      let text = areaOrValueEditable
      console.log("-----------")
      console.log(text)
      let textArray = text.split("")
      console.log(textArray)
      console.log(myPublicKey)
      let zero = myPublicKey.encrypt(0)
      let t0 = console.time('encryption');
      for (let i = 0; i < textArray.length; i++) {
        let letter = Number(textArray[i].charCodeAt(0));
        if ( letter === 9668){
          console.log("yes")
          letter = 16
        }else if (letter === 9658){
          letter = 6
        }

        if ( i < originalText.length){
          if(originalText[i] < letter){
            letter = letter - originalText[i]
          }else if (originalText[i] > letter){
            let temp = 127 - originalText[i]
            letter = letter + temp 
          }
          else{
            letter = 0;
            textArray[i] = stringify(zero)
            continue
          }
        }
        textArray[i] = stringify(myPublicKey.encrypt(letter))
      }
      let t1 = console.timeEnd('encryption');
      // textArray = JSON.stringify(textArray)
      console.log("the text array",textArray);
      console.log("Time to encrypt: ",t1);
      fetch(`${server}/update/${fileId}`,
      {
        method: 'post',
        headers :{ 'content-type':'application/json'},
        body : JSON.stringify({
          content : textArray
        })
      })
      .then ( response => {
        console.log(response)
        // console.log(window.location.origin)
        setDisable(false)
      })
      console.log(4)
    }, 3000);
    }


    const onKeyPress = (event) =>{
      console.log(event.keyCode, event.key);
      console.log("keypress ", textInput.current.value);
    }

    const onClick = (event) =>{
      console.log(event)
      
      let allowed = false
      if (event.keyCode >= 48 && event.keyCode <= 57) {
        // Number
        allowed =true
    } else if (event.keyCode >= 65 && event.keyCode <= 90) {
        // Alphabet upper case
        allowed =true
    } else if (event.keyCode >= 97 && event.keyCode <= 122) {
        // Alphabet lower case
        allowed =true
    }else if ( event.keyCode >= 186 && event.keyCode <= 192){
      // special characters
      allowed = true
    }else if ( event.keyCode >= 219 && event.keyCode <= 222){
      // special characters
      allowed = true
    }
      
      
      console.log(event.keyCode, event.key);
      event = event.target
      console.log("keypress ", textInput.current.value);
      console.log(event.selectionStart," " ,event.selectionEnd);
      // if we got a letter 
      // if(allowed){
        // console.log(originalPlainText , "here")
        setcurrentSelection([event.selectionStart,event.selectionEnd])
      // }
    }
 
    function stringify(value) {
      if (value !== undefined) {
          return JSON.stringify(value, (_, v) => typeof v === 'bigint' ? `${v}n` : v);
      }
  }
  function parse(text) {
    return JSON.parse(text, (_, value) => {
        if (typeof value === 'string') {
            const m = value.match(/(-?\d+)n/);
            if (m && m[0] === value) {
                value = BigInt(m[1]);
            }
        }
        return value;
    });

   
  }
  const reload = () =>{
    setDisable(true)
    setTimeout(function(){
    fetch(`${server}/${fileId}`)
    .then ( response => response.json())
    .then(data => {

      let content = parse(data.content)
        console.log(content)
      let myText = ""
      let originalText = []
      for (let i = 0; i < content.length; i++) {
        let element = Number(myPrivateKey.decrypt(content[i]))
        element = element%127
        originalText.push(element)
        if( element === 16){
          element = 9668
        } else if ( element === 6) {
          element = 9658
        }

        myText = myText + String.fromCharCode(element)
      }
      setoriginalText(originalText)
      setAreas(myText)
      // if (data.content != []){
        
      // }
      

      setDisable(false)
      
      // new PrivateKey(lambda, mu, publicKey, [p], [q])
    })
    .catch((error) => {
      // (window.location.href = window.location.origin);
      console.error('Error:', error);
      setDisable(false)
    });
  }, 3000);
    
  }

   //fetch the file 
   useEffect( async () => {
    

    fetch(`${server}/${fileId}`)
    .then ( response => response.json())
    .then(data => {
      console.log(data)
      data.publicKey = parse(data.publicKey)
      setmyPublicKey (new paillierBigint.PublicKey(data.publicKey.n,data.publicKey.g))
      let publicKey = new paillierBigint.PublicKey(data.publicKey.n,data.publicKey.g)
      let foo = prompt(`Enter the given private key for file ID: ${fileId}`);
      try {
        var privateKey = JSON.parse( foo)
      for (const key in privateKey) {
          // console.log(privateKey.[`${key}`])
          privateKey.[`${key}`] = parse(privateKey.[`${key}`])
    
        }
        privateKey = new paillierBigint.PrivateKey(privateKey.lambda, privateKey.mu, privateKey.publicKey ,privateKey._p , privateKey._q)
        setmyPrivateKey(privateKey)
        let verify = "a".charCodeAt(0)
        let verify2 = publicKey.encrypt(verify)
        let verify3 = Number(privateKey.decrypt(verify2))
        if (  verify3 !== verify){
          // alert(verify + " "+  verify3)
          throw "wrong private public pairs";
        }
        console.log(privateKey)
        if ( privateKey.lambda === undefined) {
          throw 'bad Key';
        }
      } catch (error) {
        alert("Bad Key")
        // alert(error)
        (window.location.href = window.location.origin);
      }
      let content = parse(data.content)
        console.log(content)
      let myText = ""
      let originalText = []
      for (let i = 0; i < content.length; i++) {
        let element = Number(privateKey.decrypt(content[i]))
        element = element%127
        originalText.push(element)
        if( element === 16){
          element = 9668
        } else if ( element === 6) {
          element = 9658
        }

        myText = myText + String.fromCharCode(element)
      }
      setoriginalText(originalText)
      setoriginalPlainText(myText)
      setAreas(myText)
      setAreas2(myText)
      // if (data.content != []){
        
      // }
      

      
      
      // new PrivateKey(lambda, mu, publicKey, [p], [q])
    })
    .catch((error) => {
      (window.location.href = window.location.origin);
      console.error('Error:', error);
    });
    
    }, []);
    // create public private keys 
  useEffect( async () => {
    
    // const { publicKey, privateKey } = await paillierBigint.generateRandomKeys(3072)
    // console.log("public", publicKey)
    // console.log("private")
    // for (const key in privateKey) {
    //   // console.log(privateKey.[`${key}`])
    //   privateKey.[`${key}`] = stringify(privateKey.[`${key}`])

    // }
    // let x = JSON.stringify( privateKey)
    // console.log(x)
    // console.log(JSON.parse( x))
  //   const m1 = "t".charCodeAt(0)
  //   const c1 = publicKey.encrypt(m1)
  //   const stringed = (stringify(c1))
  //   const stringedPK = (stringify(publicKey))
  //   console.log(typeof(c1))
  //   fetch('http://localhost:4000/id',
  // {
  //   method: 'post',
  //   headers :{ 'content-type':'application/json'},
  //   body : JSON.stringify({
  //     message: stringed,
  //     publicKey: stringedPK
  //   })
  // })
  // .then ( response => response.json())
  // .then(data => {
  //   data = privateKey.decrypt(parse(data))
  //   console.log(data)
  //   console.log(String.fromCharCode(Number(data)%127))
  // })
  console.log("keep alive")
  }, []);

  return (
    <div className="App">
      <div>
        <div></div>
      <ScrollSync>
        <div className="textAreas">
            <h2> Server-side text : </h2>
           
            <div className="container">
              <ScrollSyncPane>
              <div className="textHigh" 
              // dangerouslySetInnerHTML={orValue}
              >
              {orValue}
              </div>
              </ScrollSyncPane>
              <ScrollSyncPane>

              <textarea className="textArea shadow-2" value={areaOrValue} onChange={onAreaChange} disabled={true}>
                
                {/* This is a demonstration. */}
              </textarea>
              </ScrollSyncPane>

            </div>
            {/* </ScrollSync> */}

            {/* <HighlightWithinTextarea
            className="textArea tl"
            containerClassName="textArea textAreaCont tl"
            value={value}
            highlight={/[XYZ]/g}
            onChange= { onAreaChange }
            textAreaRef={textInput}
    /> */}
            {/* <textarea className="db  textArea shadow-2" ref={textInput} onChange={onAreaChange} onClick={onAreaChange} onKeyDown={onKeyPress}></textarea> */}
          


          <h2 className="H2sizeFixing"> Editable text : </h2>
          {/* <ScrollSync> */}

          <div className="container">
              <ScrollSyncPane>
              <div className="textHigh"
                            dangerouslySetInnerHTML={orValueEditable}
              >
                {/* {orValueEditable} */}
              </div>
              </ScrollSyncPane>
              <ScrollSyncPane>

              <textarea className="textArea shadow-2" value={areaOrValueEditable} onChange={onAreaChangeEditable}
              ref={textInput}
              // onClick={onClick}
              // onKeyDown={onClick}
              // onKeyUp={onClick}
              onKeyPress={onClick}
              >
              </textarea>
              </ScrollSyncPane>

            </div>
            {/* </ScrollSync> */}

        </div>
        </ScrollSync>
        {/* <button className="center shadow-5   br3 mybutton" onClick={SubmitToServer}> Update and send to server</button> */}
        {
          disable? 
          <div className="dib button center shadow-5   mybutton" ><span>Updating... <span className="ld ld-spinner ld-clock"></span></span></div>
          :
        <Fragment>
          <div className="dib button center shadow-5   mybutton"  onClick={ async () => {return await SubmitToServer()}} ><span>Update and send to server</span></div>

        <div className="dib button shadow-5     mybutton" onClick={async () => {return await reload()}}><span>Update current content</span></div>
        </Fragment>
        }
        {/* <button className="button shadow-5  ma4   mybutton" onClick={reload}> Update current content</button> */}

      </div>
    </div>
  );
}

export default Editor;
