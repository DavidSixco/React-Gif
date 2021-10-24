import React, { useEffect, useState } from 'react'
import { useGetGif } from '../hooks/useGetGif';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {

    const {data,loanding}= useGetGif(category);

    // const [images, setimages] = useState([]);

    // useEffect(() => {
    //     getFifs(category).then(setimages);
    // }, [category]);

    return (
        <>
         {loanding&&<div>Loanding.....</div>}
            <ol>
                <li>
                    {
                        data.map((gif)=>{
                        return <GifItem 
                        key={gif.id}
                        {...gif}
                        />
         
                        })
                    }
                </li>
            </ol>
        </>
    )
}

export default GifGrid
