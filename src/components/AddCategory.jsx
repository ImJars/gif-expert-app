import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [ inputValue, ...categories ])
        onNewCategory(inputValue.trim());
        setInputValue('')

    }

    return ( 
        <>
            <form
                className='mt-4 mx-4 mb-12' 
                onSubmit={onSubmit}
            >
                <input 
                    className='w-full py-2 outline-0 border-2 border-gray-300 rounded-lg
                             hover:border-blue-500 duration-300'
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