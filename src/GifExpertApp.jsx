import { useState } from 'react'
import { AddCategory, GifGrid  } from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Gifs']);	

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        
        // categories.push(newCategory);
        setCategories([newCategory, ...categories]);
    }
    return ( 
        <>
            <header className='bg-blue-400 flex h-16'>
                <h1 className='bg-blue-400 font-bold text-white
                                text-2xl grid content-center ml-4'>
                    GifExpertApp
                </h1>
            </header>
                <AddCategory 
                    onNewCategory={ (value) => onAddCategory(value) }
                />
                {
                    categories.map( ( category ) => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    ))
                }
        </>
     );
}
 
export default GifExpertApp;