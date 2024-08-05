import React, { useState } from "react";
import styles from './App.module.css';
import InformationCalls from "./api/InformationCalls";
export default function App() {
  return (
    <div className={styles.app}>
        Jammming
        <InformationCalls />
    </div>
  );
};
