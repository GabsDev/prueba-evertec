import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Alert, Button, TextField} from "@mui/material";

function App() {
const [ showAlert, setShowAlert] = useState("none");
const [ showButton, setShowButton] = useState(true);
const handleClick= () => {
    setShowAlert("")
}

const handleInputChange= (event) => {
    if(event.target.value.length>0){
        setShowButton(false);
        setShowAlert("none")
    }
    }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Prueba React Evertec</h1>
      <div className="card">
          <Alert  sx={{display:`${showAlert}`}} severity="success" onClose={() => { setShowAlert("none")}}>
              Here is a gentle confirmation that your action was successful.
          </Alert>
          <TextField onChange={handleInputChange} name="myInput" id="outlined-basic" label="Outlined" variant="filled"  />
          <Button disabled={`${showButton}`==="true"?true:false} onClick={handleClick} variant="contained">Click here to show alert</Button>


      </div>

    </>
  )
}

export default App
