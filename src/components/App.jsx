import React, { useState, useEffect } from 'react'

const App = () => {



    const API = "https://api.thecatapi.com/v1/images/search";
    const [foto, setFoto] = useState("")

    useEffect(()=>{
        fetch(API)
        .then(res => res.json())
        .then(data => {
            setFoto(data[0].url)
        })
    }, [])
  return (
    <div>
        <img src={foto} alt="" />
    </div>
  )
}

export default App