import React, { useState, Fragment } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'



const GiftExpertApp = () => {

    const [category, setCategory] = useState(["One Punch"])

    return <Fragment>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategory={setCategory}></AddCategory>
        <hr></hr>
        <ol>
            {
                category.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </ol>
    </Fragment>


}
export default GiftExpertApp