import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue)
    }

    return ( 
        <>
            <form onSubmit={(event) => onSubmit(event)}>
                <input 
                    type="text"
                    placeholder="Search Gif" 
                    value={ inputValue }
                    onChange={ onInputChange }
                />
            </form>
        </>
     );
}
 
export default AddCategory;