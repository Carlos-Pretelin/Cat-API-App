import React, { useState, useEffect } from 'react'
import useGetData from '../hooks/useGetData';

const App = () => {

    
    
    const {foto,
        foto2,
        foto3,
        picId,
        picId2,
        picId3,
        favorites,
        error,
        getPic2,
        getFavoritePic,
        saveFavoritePic,
        deleteFavoritePic} = useGetData();

    useEffect(()=>{
        getPic2();
        getFavoritePic();
        
        
    }, [])

  return (
    <div>
       <div className='CatRoulette'>

       <h1>Cat API App</h1>
        <span id='error'>{error ? "Hubo un error" : ""}</span>



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

       

       </div>
















        <section>
            <h1>Favorites</h1>
            <div className='pics-wrapper'>
                
                
                    {favorites.map((item) => (
                       
                        <React.Fragment key={item.id}>
                        
                        <img height={150} width={150} src={item.image.url} ></img>
                        <button onClick={() => deleteFavoritePic(item.id)}  >Eliminar de Favoritos</button>

                        </React.Fragment>
                    ))}
                
            </div>
        </section>
    </div>
  )
}

export default App