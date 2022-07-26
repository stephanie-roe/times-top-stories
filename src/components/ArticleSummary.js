const ArticleSummary = ({details}) => {
    return (
        <section>
            <h2>{details.title}</h2>
            <p>{details.des_facet[0]}</p>
        </section>
    )
}

export default ArticleSummary