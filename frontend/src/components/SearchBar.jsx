import React from "react";

export const SearchBar = ({ handleChange, handleSubmit }) => {
    return <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange}/>
    <input type="submit" value='Search'/>
    </form>;
};

export default SearchBar;