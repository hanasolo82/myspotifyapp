import React from 'react';
import SearchButton from '../SearchButton';



function AppSearchButton() {
    function handleClick() {
        alert('mensage was sent succesfully')
    };

    return (
        <SearchButton onClick={handleClick} />
 );
};

export default AppSearchButton;
