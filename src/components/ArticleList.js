import ArticleSummary from "./ArticleSummary";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Filter from "./Filter";


const ArticleList = ({articles, setSection}) => {
    const listItems = articles.map((article, index) => {
        return(
            <ArticleSummaryLink to={`/articles/${index}`} key={articles.indexOf(article)}>
                 <ArticleSummary details={article} key={articles.indexOf(article)}/> 
            </ArticleSummaryLink>
        ) 
    })
    return (
        <ArticleListSection>
            <ArticlesList className="article-list">
                {listItems}
            </ArticlesList>
            <Filter setSection={setSection}/>
        </ArticleListSection>
    )
}

export default ArticleList; 

const ArticleListSection = styled.section`
    width: 90vw;
    display: flex;
    flex-direction: row;
`

const ArticlesList = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
`

const ArticleSummaryLink = styled(Link)`
    text-decoration: none;
`