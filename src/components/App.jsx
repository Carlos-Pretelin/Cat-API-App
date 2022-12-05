import React, { useState, useEffect } from 'react'

const App = () => {



    const API = "https://api.thecatapi.com/v1/images/search?limit=3";
    const [foto, setFoto] = useState("")
    const [foto2, setFoto2] = useState("")
    const [foto3, setFoto3] = useState("")

    useEffect(()=>{
        fetch(API)
        .then(res => res.json())
        .then(data => {
            setFoto(data[0].url)
            setFoto2(data[1].url)
            setFoto3(data[2].url)
        })
    }, [])


    const getPic = () =>{
        fetch(API)
        .then(res => res.json())
        .then(data => {
            setFoto(data[0].url)
            setFoto2(data[1].url)
            setFoto3(data[2].url)
        })
    }


  return (
    <div>
        <img width={150} src={foto} alt="" />
        <img width={150} src={foto2} alt="" />
        <img width={150} src={foto3} alt="" />
        <button onClick={getPic}
        >Change Pic</button>
    </div>
  )
}

export default App