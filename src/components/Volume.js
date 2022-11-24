import React from "react";
import volumeON from "../assets/volume.svg";
import volumeOff from "../assets/volume-off.svg";
import "./Volume.css";

export default function Volume({volume, onVolumeClick}) {

    return (
        <div className="volume__container" onClick={onVolumeClick} >
            {volume && (
                <img src={volumeON} alt="volume on" />
            )}
            {!volume && (
                <img src={volumeOff} alt="volume off" />
            )}
        </div>
    )
}