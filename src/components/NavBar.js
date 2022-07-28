import styled from "styled-components";
import {Link} from "react-router-dom";

const NavBar = ({articles, setSection}) => {
    return (
        <Nav>
            <Header>Times Top Stories</Header>
            <Link to="/">
                <HomeButton onClick={() => setSection("home")}>home</HomeButton>
            </Link>
        </Nav>
    )
}

export default NavBar

const Nav = styled.nav`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const FilterButton = styled.button`
    margin: 10px;
    padding: 10px;
    border: none;
    background: none;
    font-size: 20px;
`

const Header = styled.h1`
  font-size: 50px;
  margin-left: 30px;
`

const HomeButton = styled.button`
    margin-right: 100px;
    padding: 10px 40px;
    border-radius: 30px;
    border: none;
    background: #36454F;
    color: #fbfbf8;
`
