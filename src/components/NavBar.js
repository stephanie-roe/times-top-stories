import styled from "styled-components";

const NavBar = ({articles}) => {
    const filters = articles.reduce((acc, article) => {
        if (!acc.includes(article.section)) {
            acc.push(article.section)
        }
        return acc
    }, [])

    const filterButtons = filters.map(filter => {
        return <FilterButton key={filters.indexOf(filter)}>{filter}</FilterButton>
    })

    return (
        <Nav>
            {filterButtons}
        </Nav>
    )
}

export default NavBar

const Nav = styled.nav`
    width: 100vw;
    display: flex;
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