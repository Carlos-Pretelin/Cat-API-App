import React, { useState, useEffect } from 'react'

const App = () => {

    const API = "https://api.thecatapi.com/v1/images/search?limit=3&api_key=izBVEXhb2XYhw6WFg9Qo2OXUgpfe0Nvq2NWDs7yFTAj53WgNvxlDhBBpHgSKt2Bf ";
    const API_KEY = "&api_key=live_izBVEXhb2XYhw6WFg9Qo2OXUgpfe0Nvq2NWDs7yFTAj53WgNvxlDhBBpHgSKt2Bf "
    const API_FAVORITES = `https://api.thecatapi.com/v1/favourites?limit=3${API_KEY}`;
    


    const [foto, setFoto] = useState("")
    const [foto2, setFoto2] = useState("")
    const [foto3, setFoto3] = useState("")
    const [favorites, setFavorites] = useState([])

    useEffect(()=>{
        getPic();
        getFavoritePic();
        //console.log(API_FAVORITES)
    }, [])


    const getPic = () =>{
        fetch(API)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFoto(data[0].url)
            setFoto2(data[1].url)
            setFoto3(data[2].url)
        })
    }


    // GetPic async await version
    const getPic2 = async () =>{
        const res = await fetch(API)
        const data = await res.json()
        
        setFoto(data[0].url)
        setFoto2(data[1].url)
        setFoto3(data[2].url)
    }


    const getFavoritePic = async () =>{
        const res = await fetch(API_FAVORITES)
        const data = await res.json()
      
        console.log(data)
    }

    // const addFavorites = (currentPic) => {
    //     setFavorites(state => {
    //         state = [...state, currentPic]
    //     } )
    // }

    
  return (
    <div>
        <section>
            <img height={150} width={150} src={foto} alt="" />
            <button onClick={() => addFavorites(foto)}>Add to Favorites</button>
        </section>

        <section>
            <img height={150} width={150} src={foto2} alt="" />
            <button>Add to Favorites</button>
        </section>

        <section>
            <img height={150} width={150} src={foto3} alt="" />
            <button>Add to Favorites</button>
        </section>
        
       
        
        <button onClick={getPic2}
        >Refresh Pics</button>

        <section>
            <h1>Favorites</h1>
            <div className='pics-wrapper'>
                {favorites.map((item) => (
                    <img src={item} alt="Favorite-Pic" />
                ) )}
            </div>
        </section>
    </div>
  )
}

export default App