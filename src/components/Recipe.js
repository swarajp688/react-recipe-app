import { useEffect } from "react";
import styled from "styled-components";



const RecipeContainer = styled.div`
    display:flex;
    flex-direction:column; 
    flex-wrap:wrap;   
    width:40%;
    margin:10px;
    border-radius:20px;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
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

const Image = styled.img`
    width:400px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    margin-bottom:40px;
    border-radius:20px;
    
`;
const Recipe = ({title , calories , image})=> {
    
    return(
    <RecipeContainer>
        <h1>{title}</h1>
        <p>Calories :{calories}</p>
        <Image src={image} alt="recipe" />
    </RecipeContainer>)
}

export default Recipe;