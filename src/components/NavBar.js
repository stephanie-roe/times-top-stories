import styled from "styled-components";
import {Link} from "react-router-dom";

const NavBar = ({articles, setSection}) => {
    return (
        <Nav>
            <Link to="/">
                <button onClick={() => setSection("home")}>home</button>
            </Link>
        </Nav>
    )
}

export default NavBar

const Nav = styled.nav`
    width: 100vw;
    display: grid;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const FilterButton = styled.button`
    margin: 10px;
    padding: 10px;
    border: none;
    background: none;
    font-size: 20px;
`