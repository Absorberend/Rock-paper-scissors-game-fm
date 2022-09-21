import "./MakeYourPick.css";
import "./PickedScreen.css";
import iconPaper from "../assets/icon-paper.svg";
import iconRock from "../assets/icon-rock.svg";
import iconScissors from "../assets/icon-scissors.svg";
import drumRoll from "../assets/snare-roll-84943.mp3";
import React, { useState, useEffect } from "react";
import Confetti from 'react-confetti';
import useWindowSize from "../hooks/useWindowSize";
import tada from "../assets/tada.mp3";
import gameOver from "../assets/game-over.mp3";
import crickets from "../assets/crickets.mp3";

export default function PickedScreen({pickedValue, picked, housePick, condition, onConditionClick, onPlayAgainButtonClick}) {
    const [timer, setTimer] = useState(0);
    const { width, height } = useWindowSize();

    useEffect(() => {
        if (picked) {
            (() => {
                setTimeout(() => {
                setTimer(1);
                }, 0);
            
                setTimeout(() => {
                setTimer(2); 
                }, 1400);
            
                setTimeout(() => {
                setTimer(3);
                }, 2300);
            })()
        }
    }, [picked])

    useEffect(() => {
        onConditionClick();
    }, [condition])

    const handleIconLoad = () => {
        if (pickedValue === "paper") {
            return iconPaper;
        } else if (pickedValue === "rock") {
            return iconRock;
        } else if (pickedValue ==="scissors") {
            return iconScissors;
        }
    }

    const handleHousePickOnLoad = () => {
        if (housePick === 1) {
            return "paper";
        } else if (housePick === 2) {
            return "scissors";
        } else if (housePick === 3) {
            return "rock";
        }
    }

    const handleHouseIconOnLoad = () => {
        if (housePick === 1) {
            return iconPaper;
        } else if (housePick === 2) {
            return iconScissors;
        } else if (housePick === 3) {
            return iconRock;
        }
    }


    if (timer === 1) {
        return (
            <div className="picked__screen__container">
                <div className={`picked__option__default picked__${pickedValue}__wrapper picked__screen__player__grid`}>
                    <img src={handleIconLoad()} className="picked__default__img__size" alt={pickedValue}/>
                    <div className={`picked__${pickedValue}__bg`}></div>
                </div>
                <span className="picked__screen__player__subtext">You picked</span>
                <div className="picked__screen__house__grid">
                    <img src="" alt=""/>
                    <div className={`picked__screen__house__bg`}></div>
                </div>
                <span className="picked__screen__house__subtext">The house picked</span>
                <audio src={drumRoll} autoPlay />
            </div>
            );
            
    } else if (timer === 2) {
        return (
            <div className="picked__screen__container">
                <div className={`picked__option__default picked__${pickedValue}__wrapper picked__screen__player__grid`}>
                    <img src={handleIconLoad()} className="picked__default__img__size" alt={pickedValue}/>
                    <div className={`picked__${pickedValue}__bg`}></div>
                </div>
                <span className="picked__screen__player__subtext">You picked</span>
                <div className={`picked__option__default picked__${handleHousePickOnLoad()}__wrapper picked__screen__house__grid`}>
                    <img src={handleHouseIconOnLoad()} className="picked__default__img__size" alt="What the house picked"/>
                    <div className={`picked__screen__house__bg`}></div>
                    <div className={`picked__${handleHousePickOnLoad()}__bg`}></div>
                </div>
                <span className="picked__screen__house__subtext">The house picked</span>
            </div>
            );

    } else if (timer === 3) {
    return (
        <div className="picked__screen__container">
            <div className={`picked__option__default picked__${pickedValue}__wrapper picked__screen__player__grid`}>
                <img src={handleIconLoad()} className="picked__default__img__size" alt={pickedValue}/>
                <div className={`picked__${pickedValue}__bg`}></div>
            </div>
            <span className="picked__screen__player__subtext">You picked</span>
            <div className={`picked__option__default picked__${handleHousePickOnLoad()}__wrapper picked__screen__house__grid`}>
                <img src={handleHouseIconOnLoad()} className="picked__default__img__size" alt={pickedValue}/>
                <div className={`picked__screen__house__bg`}></div>
                <div className={`picked__${handleHousePickOnLoad()}__bg`}></div>
            </div>
            <span className="picked__screen__house__subtext">The house picked</span>
            <div className="picked__screen__header">
                {condition === "draw" && <h2>Draw</h2>}
                {condition === "draw" && <audio src={crickets} autoPlay />}
                {condition === "lose" && <h2>You Lose</h2>}
                {condition === "lose" && <audio src={gameOver} autoPlay />}
                {condition === "win" && <h2>You Win</h2>}
                {condition === "win" && <audio src={tada} autoPlay />}
                {condition === "win" && <Confetti width={width} height={height} />}
            </div>
            <div className="picked__screen__button">
                <button onClick={onPlayAgainButtonClick}>Play Again</button>
            </div>
        </div>
        );
    }
}


