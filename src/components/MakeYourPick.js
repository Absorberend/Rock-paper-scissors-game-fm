import "./MakeYourPick.css";
import React from "react";
import BgTriangle from "../assets/bg-triangle.svg";
import iconPaper from "../assets/icon-paper.svg";
import iconRock from "../assets/icon-rock.svg";
import iconScissors from "../assets/icon-scissors.svg";


export default function MakeYourPick({onPickClick}) {
    return (
    <div className="picking__container">
        <div className="picking__option__default picking__paper__wrapper pointer__cursor" data-pick="paper" onClick={onPickClick}>
            <img src={iconPaper} className="picking__default__img__size" alt="Paper"/>
            <div className="picking__paper__bg"></div>
        </div>
        <div className="picking__option__default picking__scissors__wrapper pointer__cursor" data-pick="scissors" onClick={onPickClick}>
            <img src={iconScissors} className="picking__default__img__size" alt="Scissors"/>
            <div className="picking__scissors__bg"></div>
        </div>
        <div className="picking__option__default picking__rock__wrapper pointer__cursor" data-pick="rock" onClick={onPickClick}>
            <img src={iconRock} className="picking__default__img__size" alt="Rock"/>
            <div className="picking__rock__bg"></div>
        </div>
        <img src={BgTriangle} className="picking__bg__image" alt="background triangle of pickings"/>
    </div>
    );
}