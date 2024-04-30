import React from "react";
import "./card-style.css";

export const Card = (locale) => {
    return (
        <div className="box">
            <div className="CARD">
                <div className="overlap-group">
                    <img className="unsplash" alt="Unsplash" src="unsplash-y5pxvs1lpy4.png" />
                    <div className="nome-locale">{locale.nome}</div>
                    <p className="text-wrapper">
                        {locale.descrizione}
                    </p>
                    <div className="div">{locale.prezzo}</div>
                </div>
            </div>
        </div>
    );
};
