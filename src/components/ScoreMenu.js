import "./ScoreMenu.css";
import Logo from "../assets/logo.svg";
import React, { useState, useEffect } from "react";

export default function ScoreMenu({condition}) {
    const [count, setCount] = useState(0);

    const handleScoreCount = () => {
        if (condition === "win" ) {
            setCount(prevCount => prevCount + 1);
        } else if (condition === "lose" ) {
            if (count !== 0) {
            setCount(prevCount => prevCount - 1);
            }
        } 
    }

    useEffect(() => {
        if (condition !== "" ) {
            setTimeout(() => {
                handleScoreCount();
            }, 2300);
        }
    }, [condition])


    return (
        <div className="scoreMenu__container">
            <img src={Logo} className="app__logo" alt="app logo"/>
            <div className="scoreMenu__scores__wrapper">
                <span className="scoreMenu__scores__header">{`Score`.toLocaleUpperCase()}</span>
                <span className="scoreMenu__scores">{count}</span>
            </div>
        </div>
    );
}