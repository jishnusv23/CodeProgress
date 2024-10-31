import React from 'react'
import UpdateComponent from './UpdateComponent'
const Child = ({increment,count}) => {
    return (
        <button onMouseOver={increment}>MouseEnter:{count}</button>
    )
}

export default UpdateComponent(Child);
