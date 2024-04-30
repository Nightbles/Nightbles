import React from "react";
import { Card } from "../components/homepage/Card";

export const Homepage = () => {
    let data = require("../discoteche.json")
    console.log(data);
    const discoteche = data.discoteche;
    return(
        <Card nome = {discoteche[0].nome} descrizione = {discoteche[0].descrizione} prezzo = {discoteche[0].prezzo_medio}/>
        
    )
  
}