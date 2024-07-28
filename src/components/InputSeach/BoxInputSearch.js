import { useState } from "react";
import styles from './BoxInputSearch.module.css';

export default function BoxInputSearh() {

    const [userSearch, setUserSearch]= useState('');
      
    function handleUserSearch(e) {
        setUserSearch(e.target.value)
    };

    function handleClick() {
        

        
    };


    return (
        <form className={styles.Bar} >
            
            <input value={userSearch} onChange={handleUserSearch}id='search' type='text' placeholder="Escribe algo" required />
           
            <br />
            <input type="submit" value="Search" onClick={handleClick}/>
        </form>
    )
};