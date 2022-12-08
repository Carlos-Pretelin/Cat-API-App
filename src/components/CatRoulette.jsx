import React,{useEffect} from 'react'
import useGetData from '../hooks/useGetData'


const CatRoulette = () => {

    const { foto,
            foto2,
            foto3,
            picId,
            picId2,
            picId3,
            error,
            getPic2,
            saveFavoritePic,} = useGetData();


            useEffect(()=>{
                getPic2();
                
                
                
            }, [])        


  return (
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
  )
}

export default CatRoulette