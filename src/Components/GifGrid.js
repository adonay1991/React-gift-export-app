import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifts'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {


    // importando hooks y desetruturando los datos que estan en el hook
    const { data, loading } = useFetchGifs(category);

    console.log(loading);
    console.log(data);

    // ----------------------------------------------------------------------------------------------------------------//

    // usando el use Efect hacemos que las peticiones en el caso de este componente se haga una vez
    // debemos llamar a la funcion donde hacemos la peticion y luego como segundo parametro pasarle la lista de dependencias vacia
    // para que no ejecuto la funcion nuevamente.
    // useEffect(() => {
    //     getGifs(category).then(imgs => {
    //         setImages(imgs)
    //     })
    // }, [category])

    // ----------------------------------------------------------------------------------------------------------------//


    return (
        <>
            <h3 animate__animated animate__fadeIn>{category}</h3>
            {loading && <p>Loading</p>}

            <div className='card-grid'>
                {
                    data.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    )
}
