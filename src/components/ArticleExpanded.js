import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ArticleExpanded = ({findArticle}) => {
    const {id} = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        console.log(id)
        setDetails(findArticle(id))
    }, [details])
    return (
        <ArticleExpandedSection>
            <h2>TITLE</h2>
        </ArticleExpandedSection>
    )
}

export default ArticleExpanded;

const ArticleExpandedSection = styled.section`

`