import './Rules.css';
import rulesImage from "../assets/image-rules.svg";
import closeIcon from "../assets/icon-close.svg"
import React, { useEffect } from "react";

export default function Rules({viewRules, onViewRulesClick}) {


    useEffect(() => {
        const close = (e) => {
          if(e.key === 'Escape'){
            onViewRulesClick()
          }
        }
        window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    },[])

    const handleRulesOutsideClick = e => {
        if (e.target === e.currentTarget ) {
            onViewRulesClick()
        }
    }

    return (
        <>
            {!viewRules && (
                <button className="button rules__button" onClick={onViewRulesClick}>
                    {`Rules`.toUpperCase()}
                </button>
            )}
            {viewRules && (
                <div className="rules__modal__bg" onClick={handleRulesOutsideClick}>
                    <div className="rules__modal">
                        <h2 className="rules__modal__header">{`Rules`.toLocaleUpperCase()}</h2>
                        <div className="rules__modal__image">
                            <img src={rulesImage} alt="shows the rules"/>
                        </div>
                        <div className="rules__modal__close__button__wrapper">
                            <button className="button rules__modal_close__button" onClick={onViewRulesClick}>
                                <img src={closeIcon} alt="close modal icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

}