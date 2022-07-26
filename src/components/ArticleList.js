import ArticleSummary from "./ArticleSummary";


const ArticleList = ({articles}) => {
    const listItems = articles.map(article => {
        return <ArticleSummary details={article} key={articles.indexOf(article)}/> 
    })
    return (
        <section>
            {listItems}
        </section>
    )
}

export default ArticleList; 