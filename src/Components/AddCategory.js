import React, { Fragment, useState } from 'react'
import PropsTypes from 'prop-types'

export const AddCategory = ({ setCategory }) => {

    const [inputValue, setinputValue] = useState('')
    const inputChange = (e) => {
        // capturamos le valor del imput
        setinputValue(e.target.value)
    }

    const handelSubmit = (e) => {
        //prevenimos el comportamiento por defecto de alguna etiqueta p.e el input
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategory(cast => [inputValue, ...cast]);
            setinputValue('')
        }
    }

    return (
        <Fragment>
            <form onSubmit={handelSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    // cambiamos elñ estado del input mediante el onChange
                    onChange={inputChange}></input>
            </form>

        </Fragment>
    )
}

AddCategory.propsTypes = {
    setCategory: PropsTypes.func.isRequired
}
