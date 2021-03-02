import React from 'react';

const ListEx = (props) => {
    const listItems = props.data.map(
        (data, index) => {
            return <li>{index}:{data.text}</li>
        }
    )
    return <ul>{listItems}</ul>
}

export default ListEx;