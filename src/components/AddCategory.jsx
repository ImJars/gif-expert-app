import React, { useState } from 'react'

const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return;

        onAddCategory(categories => [ inputValue, ...categories ])
        setInputValue('')

    }

    return ( 
        <>
            <form onSubmit={onSubmit}>
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