import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setcategories}) => {

    const [valueInput, setvalueInput] = useState('')
    
    const handleInput=(e)=>{
        setvalueInput(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (valueInput.trim().length>2) {
            setcategories( category=>[valueInput,...category]);
            setvalueInput('');
        }
    }


    return (
        <form onSubmit={handleSubmit}>
           <input
           type='text'
           value={valueInput}
           onChange={handleInput}
           >
           </input>
        </form>
    )
}

AddCategory.propTypes={
    setcategories: PropTypes.func.isRequired
}


export default AddCategory
