import ArticleSummary from "./ArticleSummary";
import styled from "styled-components";
import { Link } from "react-router-dom";


const ArticleList = ({articles}) => {
    const listItems = articles.map((article, index) => {
        return(
            <Link to={`/articles/${index}`} key={articles.indexOf(article)}>
                 <ArticleSummary details={article} key={articles.indexOf(article)}/> 
            </Link>
        ) 
    })
    return (
        <ArticleListSection>
            {listItems}
        </ArticleListSection>
    )
}

export default ArticleList; 

const ArticleListSection = styled.section`
    width: 90vw;
    display: flex;
    flex-direction: column;
`