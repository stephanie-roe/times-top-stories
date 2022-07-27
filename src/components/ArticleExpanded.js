import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ArticleExpanded = ({findArticle}) => {
    const {id} = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        setDetails(findArticle(id))
    }, [details])

    return (
        <ArticleExpandedSection>
            <h2>{details.title}</h2>
            <p>{details.byline}</p>
            <img src={details.multimedia[0].url} alt={details.multimedia[0].caption} /> 
            <p>{details.multimedia[0].caption}</p>
            <button><a href={details.short_url} target="_blank">Read More on NYT.com</a></button>
        </ArticleExpandedSection>
    )
}

export default ArticleExpanded;

const ArticleExpandedSection = styled.section`

`