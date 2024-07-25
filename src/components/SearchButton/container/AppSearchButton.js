import React from 'react';
import SearchButton from '../SearchButton';



function AppSearchButton() {

    // aqui se recoge input useState y se  manda la solicitud a la API
    function handleClick() {
        alert('mensage was sent succesfully')
    };

    return (
        <SearchButton onClick={handleClick} />
 );
};

export default AppSearchButton;
