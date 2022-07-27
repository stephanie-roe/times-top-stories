import styled from "styled-components";

const Filter = () => {
    const sections = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]

    const filterButtons = sections.map(section => {
        return <button key={sections.indexOf(section)}>{section}</button>
    })

    return (
        <aside>
            {filterButtons}
        </aside>
    )
}

export default Filter