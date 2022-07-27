import styled from "styled-components";

const NavBar = ({articles}) => {
    // const sections = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]

    // const filterButtons = sections.map(section => {
    //     return <FilterButton key={sections.indexOf(section)}>{section}</FilterButton>
    // })

    return (
        <Nav>
            <button>home</button>
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