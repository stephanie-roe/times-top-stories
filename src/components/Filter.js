import styled from "styled-components";

const Filter = ({setSection}) => {
    const sections = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]

    const filterButtons = sections.map(section => {
        return (
            
                <FilterButton onClick={() => setSection(section)} key={sections.indexOf(section)}>{section}</FilterButton>
         
        )
    })

    return (
        <FilterContainer>
            {filterButtons}
        </FilterContainer>
    )
}

export default Filter

const FilterContainer = styled.aside`
    display: flex;
    flex-direction: column;
    width: 10vw;
`

const FilterButton = styled.button`
    border: none;
    padding: 10px 50px;
    margin: 20px;
    border-radius: 30px;
    color: #36454F;
    background: #D3D3D3;
`