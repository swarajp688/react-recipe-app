import styled from 'styled-components';
import { FaHamburger } from "react-icons/fa";


const Nav = styled.div`
    background-color: #a1c4fd;
    position:fixed;
    top:0px;
    margin:0px;
    width:100%;
    display:flex;
    justify-content:space-between;
    height:40px;
    
`;
const LeftDiv = styled.h3`
    font-size:1.8rem;
    margin:0px 0px 0px 30px;

    a {
        display:inline-block;
        height:100%;
        text-decoration:none;
        color:black;
        margin:0px
    }
    
`;


const Navbar = ()=> {
    return (
    <Nav>
        <LeftDiv>
            <FaHamburger ></FaHamburger>
            <a href="/">RECIPES</a>
        </LeftDiv>
        
    </Nav>);
}

export default Navbar;