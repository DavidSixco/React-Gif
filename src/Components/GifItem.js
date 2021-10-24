import React from 'react'

const GifItem = ({id,tittle,url}) => {

    // console.log('Datos de los gif',id,tittle,url)
    return (
        <>
        <div className='card'>

            <p>
                {tittle}
            </p>
            <img src={url} alt={tittle}/>

        </div>
        </>
    )
}

export default GifItem
