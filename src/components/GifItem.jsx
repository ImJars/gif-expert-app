const GifItem = ({ title, url, id }) => {    
    return ( 
        <div className='card'>
            <img src={url} alt={title} />
            <p className="font-thin">
                {title}
            </p>
        </div>
     );
}
 
export default GifItem;