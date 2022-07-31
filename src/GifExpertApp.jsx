import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);	

    const onAddCategory = (newCategory) => {
        // categories.push(newCategory);
        setCategories([newCategory, ...categories]);
    }
    return ( 
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
                <AddCategory 
                    // onAddCategory={setCategories}
                    onNewCategory={ (value) => onAddCategory(value) }
                />
            {/* Listado de Gif */}
            <ol>
                {
                categories.map(category => {
                    return <li key={category}>{category}</li>
                    })
                }
            </ol>

                {/* Gif Item */}
        </>
     );
}
 
export default GifExpertApp;