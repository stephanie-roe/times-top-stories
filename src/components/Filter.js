import styled from "styled-components";
import {Link} from "react-router-dom"

const Filter = ({setSection}) => {
    const sections = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]

    const filterButtons = sections.map(section => {
        return (
            
                <button onClick={() => setSection(section)} key={sections.indexOf(section)}>{section}</button>
         
        )
    })

    return (
        <aside>
            {filterButtons}
        </aside>
    )
}

export default Filter