import React,{useState} from 'react'
import AddCategory from './Components/AddCategory'
import GifGrid from './Components/GifGrid'

const GifExpertApp = () => {

    
    const [categories, setcategories] = useState(['kyoukai'])   

    return (
        <>
            <h2>
                Gif Aplication
            </h2>
                <AddCategory setcategories={setcategories}/>
            <ol>
                {
                   categories.map((category,index)=>{
                        return <GifGrid 
                        key={index}
                        category={category} 
                        />
                   })
                }
                
            </ol>
            <hr/>
        </>
    )
}

export default GifExpertApp

