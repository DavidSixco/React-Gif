import { useEffect, useState } from "react"
import { getFifs } from '../Helpers/getGifs';

export const useGetGif = (category) => {
  
const [state, setstate] = useState({
    data:[],
    loanding:true
})

useEffect(() => {

    getFifs(category).
    then(imgs=>{
        // setTimeout(() => {
            setstate({
                data:imgs,
                loanding:false
            })
        // }, 3000);
    })
    
}, [category])

return state


}
