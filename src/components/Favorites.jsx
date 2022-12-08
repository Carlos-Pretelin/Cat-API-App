import React, {useEffect} from 'react'
import useGetData from '../hooks/useGetData';


const Favorites = () => {

    const { 
        favorites,
        getFavoritePic,
        deleteFavoritePic} = useGetData();

        useEffect(()=>{           
            getFavoritePic();  
        }, [])

       

  return (
    
    <section className='FavoritePics'>
            <h1>Favorites</h1>
            <div className='pics-wrapper'>
                
                
                    {favorites.map((item) => (
                       
                        <div key={item.id}>
                        
                        <img height={150} width={150} src={item.image.url} ></img>
                        <button onClick={() => deleteFavoritePic(item.id)}  >Eliminar de Favoritos</button>

                        </div>
                    ))}
                
            </div>
        </section>

  )
}

export default Favorites