import React from 'react';
import './search.css'

// function Search(props) {
//     return (
//         <form></form>
//     )
// }

const Search = (props) => (
    <form 
        className="Search"
        onSubmit={props.handleSubmit}
    >
        <input 
            ref={props.setRef}
            className="Search-input" 
            placeholder="Busca tu video"
            type="text"
            name="search"
            // defaultValue="Luis Fonsi"
            onChange={props.handleChange}
            value={props.value}
        />
    </form>
)

export default Search