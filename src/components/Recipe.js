import styled from "styled-components";

import RecipeDetail from "./RecipeDetail";
const RecipeContainer = styled.div`
    display:flex;
    flex-direction:column; 
    flex-wrap:wrap;   
    width:40%;
    margin:10px;
    border-radius:20px;
    background-image: linear-gradient(to right top, #a5c3e9, #bac9e7, #cad0e4, #d7d7e2, #e0e0e0);
    align-items: center;
    
    h1 {
        display:inline-block;
        margin:0px;
        color:black;
        
    }
    p {
        display:inline-block;
        font-weight:500;
        margin:5px;
        color:black;
        
    }
`;

const Ol = styled.ol`
    border:0px;
    display:inline-block;

    
`;
const Image = styled.img`
    width:400px;
    border-radius:0px 0px 20px 20px;

`;
const Button = styled.button`
    font-size:20px;
    background:blue;
    border:0px;
    border-radius:10px 10px;
    color:white;
    margin:20px;
    cursor:pointer;
    padding:4px 20px;
`;
const Recipe = ({title , calories , image , ingredientLines})=> {
    
    return(
    <RecipeContainer>
        <h1>{title}</h1>
        <p>Calories :{calories}</p>
        <Ol>Recipe :{ingredientLines.map(ingredient => (
            <li key={ingredient.id}>{ingredient}</li>
        ))}</Ol>
        <Image src={image} alt="recipe" />
        
        
    </RecipeContainer>)
}

export default Recipe;