import { useState } from "react";
import styles from "./BoxTrackList.module.css";
export default function BoxTrackList() {

    const [trackList, setTrackList] = useState([]);
    
    return (
        <section className={styles.container}>
        <h2>Track List</h2>
        <ol className={styles.album}>
            <li>Track</li>
            <li>Track</li>
            <li>Track</li>
        </ol>
        </section>
    );

};
