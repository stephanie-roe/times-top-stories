import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ArticleExpanded = ({findArticle}) => {
    const {id} = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        setDetails(findArticle(id))
    }, [details])

    if(details && details.multimedia) {
        return (
            <ArticleExpandedSection>
                <ArticleTitle className="expanded-title">{details.title}</ArticleTitle>
                <Byline className="byline">{details.byline}</Byline>
                <ArticleImage src={details.multimedia[0].url} alt={details.multimedia[0].caption} /> 
                <Caption>{details.multimedia[0].caption}</Caption>
                <ReadMoreButton><ShortURL href={details.short_url} target="_blank">Read More on NYT.com</ShortURL></ReadMoreButton>
            </ArticleExpandedSection>
        )
    } else if (details && details.title) {
        return (
            <ArticleExpandedSection>
                <ArticleTitle className="expanded-title">{details.title}</ArticleTitle>
                <Byline className="byline">{details.byline}</Byline>
                 <ArticleImage src={require(`../assets/filler-image.jpg`)} alt="upclose image of newspapers" /> 
                <ReadMoreButton><ShortURL href={details.short_url} target="_blank">Read More on NYT.com</ShortURL></ReadMoreButton>
            </ArticleExpandedSection>
        )
    }
    
}

export default ArticleExpanded;

const ArticleExpandedSection = styled.section`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ArticleTitle = styled.h2`
   text-align: center; 
   font-size: 35px;
`

const Byline = styled.p`
    font-size: 30px;
    text-align: center;
    margin-top: 0px;
`

const ArticleImage = styled.img`
    width: 700px;
    height: auto;
    margin-top: 20px;
`

const Caption = styled.p`
    font-size: 15px;
    margin-bottom: 40px;
`

const ReadMoreButton = styled.button`
    padding: 10px 60px;
    border-radius: 30px;
    border: none;
    background: #D3D3D3;
`

const ShortURL = styled.a`
    text-decoration: none;
    color: #36454F;
`