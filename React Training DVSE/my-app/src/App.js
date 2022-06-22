import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import style from './style.css';

export default function App() {
    return (
        <div className={style.container}>
            <Navbar />
            <Main />
        </div>
    )
}