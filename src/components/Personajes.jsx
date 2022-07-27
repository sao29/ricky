import React from 'react'

const Personajes = ({personajes,setPersonaje}) => {

    const resetPersonajes = ()=> {
        setPersonaje(null)
    }
  return (
   <div className='characters'>
     <div>Personajes</div>
     <span onClick={resetPersonajes} className='back-home'>volver a la home</span>
     <div className='container-characters'>
        {
            personajes.map((datos,index )=>
            (
                <div className='character-container' key={index} >
                    <div>
                        <img src={datos.image} alt={datos.name}/>
                    </div>
                    <div> 
                        <h3>{datos.name}</h3>
                        <h6>
                            {datos.status === "Alive"?(
                            <>
                            <span className='alive'></span>
                            Alive
                            </>    
                        
                        ):(
                           <>
                            <span className='dead' />
                            Dead
                           </>
                        )}
                        </h6>
                        <p>
                            <span  className='text-grey'>Episodios :</span>
                            <span>{datos.episode.length}</span> 
                        </p>

                        <p>
                            <span className='text-grey'>Especies :</span>
                            <span>{datos.species}</span>
                        </p>
                    </div>
                </div>
            )
            )}
     </div>
     <span onClick={resetPersonajes} className='back-home'>Volver a la home</span>
   </div>
  )
}

export default Personajes