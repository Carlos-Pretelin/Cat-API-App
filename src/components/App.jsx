import React, { useState, useEffect } from 'react'

const App = () => {

    const API = "https://api.thecatapi.com/v1/images/search?limit=3&api_key=izBVEXhb2XYhw6WFg9Qo2OXUgpfe0Nvq2NWDs7yFTAj53WgNvxlDhBBpHgSKt2Bf ";
    const API_KEY = "&api_key=live_izBVEXhb2XYhw6WFg9Qo2OXUgpfe0Nvq2NWDs7yFTAj53WgNvxlDhBBpHgSKt2Bf "
    const API_FAVORITES = `https://api.thecatapi.com/v1/favourites?${API_KEY}`;
    

    //CatPics
    const [foto, setFoto] = useState("")
    const [foto2, setFoto2] = useState("")
    const [foto3, setFoto3] = useState("")
    //CatPicsID
    const [picId, setPicId] = useState("")
    const [picId2, setPicId2] = useState("")
    const [picId3, setPicId3] = useState("")

    const [favorites, setFavorites] = useState([])

    const [error, setError] = useState(false);

    useEffect(()=>{
        getPic2();
        getFavoritePic();
        getFavoritePic();
        //console.log(API_FAVORITES)
    }, [])


    const getPic = () =>{
        fetch(API)
        .then(res => {
            res.json();
            //console.log(res)
            // en este console log se ve lo del video donde puedo ver el status de la llamada 
        })
        .then(data => {
        
            setFoto(data[0].url)
            setFoto2(data[1].url)
            setFoto3(data[2].url)
        })
    }


    // GetPic async await version
    const getPic2 = async () =>{
        const res = await fetch(API)
        const data = await res.json()
        if(res.status !== 200){
            setError(!error)
        }else {
            
            setFoto(data[0].url)
            setFoto2(data[1].url)
            setFoto3(data[2].url)

            setPicId(data[0].id)
            setPicId2(data[1].id)
            setPicId3(data[2].id)
            console.log("Get pic")
            console.log(data)
            //Con este Id yo podria identificar el gato que necesito meter a favoritos y decirle a los botones que tendran un
            //onclick de la funcion que agregara a mi array de favoritos aquel gato qeu tenga el estado de setPicId el cual recibira como argumento
            // seria algo asi como onClick={() => funcionFavorito(setPicId)} Aqui pues le digo que agregue el gato con ese id  y ya

        }
        
    }

    //loads the favorite pics 
    const getFavoritePic = async () =>{
        const res = await fetch(API_FAVORITES)
        const data = await res.json()
        console.log("Favoritos");
        console.log(data);
        if(res.status !== 200){
            setError(!error)
        }else {
            setFavorites(data)
        }
        
    }
    // i can send 2 arguments to fetch() the second one is an object in wich i´ll specify the methods and headers 
    const saveFavoritePic = async (id)=>{
        const res = await fetch(API_FAVORITES, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image_id: id
            })
                });

        const data = await res.json();
        console.log("save")
        console.log(res)

        if(res.status !== 200){
            setError(!error)
        }
    }




    // const addFavorites = (currentPic) => {
    //     setFavorites(state => {
    //         state = [...state, currentPic]
    //     } )
    // }

    
  return (
    <div>
        <h1>Cat API App</h1>
        <span id='error'>{error ? "Hubo un error" : null}</span>



        <section>
            <img height={150} width={150} src={foto} alt="" />
            <button onClick={() => saveFavoritePic(picId)}>Add to Favorites</button>
        </section>

        <section>
            <img height={150} width={150} src={foto2} alt="" />
            <button onClick={() => saveFavoritePic(picId2)}>Add to Favorites</button>
        </section>

        <section>
            <img height={150} width={150} src={foto3} alt="" />
            <button onClick={() => saveFavoritePic(picId3)}>Add to Favorites</button>
        </section>
        
       
        
        <button onClick={getPic2}
        >Refresh Pics
        </button>

        <section>
            <h1>Favorites</h1>
            <div className='pics-wrapper'>
                
                <div>
                    {favorites.map((item) => (
                        <img height={150} width={150} src={item.image.url} key={item.id}></img>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default App