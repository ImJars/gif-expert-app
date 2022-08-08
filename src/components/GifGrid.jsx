import { useFetchGifs } from '../hooks/useFetchGifs';
import GifItem from './GifItem';

export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category );

    return ( 
        <>
            <h3 className='mx-4 font-bold text-xl mb-4
                            border-b border-black'>
                { category }
            </h3>

            {
                isLoading && (<p>Loading...</p>)
            }

            <div className='card-grid'>
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
     );
}
 
export default GifGrid;