import ArticleSummary from "./ArticleSummary";
import styled from "styled-components";



const ArticleList = ({articles}) => {
    const listItems = articles.map(article => {
        return <ArticleSummary details={article} key={articles.indexOf(article)}/> 
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