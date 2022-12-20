import React from 'react'
import Style from "./recipe.css";

const Recipe = ({title, calories, img,ingredients,cautions}) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <ol>{ingredients.map(ingredients => (
                <li>{ingredients.text}</li>
            ))}</ol>
            <p>{calories}</p>
            <p>{cautions}</p>
            <img src={img} alt="" />
        </div>
        
    );
}
export default Recipe;