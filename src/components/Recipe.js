import styled from "styled-components";

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
        border-bottom: 1px solid grey;
    }
`;
const Image = styled.img`
    width:100%;
    border-radius:0px 0px 20px 20px;
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