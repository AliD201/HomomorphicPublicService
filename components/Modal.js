import React from 'react';
import './Modal.scss'
import {useState, useEffect} from 'react';

const paillierBigint = require('paillier-bigint')


const Modal = (props) => {

  const [privateKey, setPrivateKey] = useState("")
  const [warnning, setwarnning] = useState(false)
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [animation, setAnimation] = useState("in")
  const [protection, setProtection] = useState(false)
  const server = props.server

  function stringify(value) {
    if (value !== undefined) {
        return JSON.stringify(value, (_, v) => typeof v === 'bigint' ? `${v}n` : v);
    }
}

  const GenerateKeys = async (e) =>{
    setProtection(true)
    e.preventDefault()

    if ( title.trim() == ""){
      return 
    }
    setMessage("Generating the keys & the file...")
    const { publicKey, privateKey } = await paillierBigint.generateRandomKeys(3072)
    for (const key in privateKey) {
      privateKey.[`${key}`] = stringify(privateKey.[`${key}`])
    }
    setPrivateKey(JSON.stringify(privateKey))
    setwarnning(true)

    const stringedPK = (stringify(publicKey))
    fetch(`${server}/id`,
  {
    method: 'post',
    headers :{ 'content-type':'application/json'},
    body : JSON.stringify({
      content: [],
      publicKey: stringedPK,
      title: title
    })
  })
  .then ( response => response.json())
  .then ( data => {
    // console.log(data)
    setMessage(data.message)
    setProtection(false)
  }).catch((error) => {
    setMessage("Failed to generate the file")
    setProtection(false)

    // console.log('Error:', error);
  });

  }


  const closeIt = (e) =>{
    e.preventDefault()

    setAnimation("out")
    setTimeout(function(){
      props.setshowModal(false) 
      window.location.reload(false);
    }, 2000);

    
  }
  let x = `modal ld ld-slide-ltr-${animation}`
  

  return (
    <div className={x}>
     <h2>Create new File </h2>
     <form onSubmit={GenerateKeys}>

     <div className="content">
       <div className="db center">
      <label>File Name</label>
      <input className="ma2 " type="text" onChange={(event)=> setTitle(event.target.value)} required></input>
      </div>
      <div className="db ">
      <label className="dib ma2">Your Private Key:
       </label>
       <textarea id="privatekey"className="privateField center fieldcontainer" disabled={true}
      value={privateKey}>
      </textarea>
      
      </div>
      
      {warnning ? <p style={{color:"red"}}> Make sure to save your private key,
      <br></br>
       you will use it to decrypt your file.
       </p>
       : ""}
       <p style={{color:"red"}}>{message}</p>

     </div>
     <div className="actions">
     <button  className="ma2 "
      disabled={protection? true:false}
      >Create File</button>
     <button onClick={closeIt}>close</button>

     </div>
     </form>
     </div>
   )

}

export default Modal
