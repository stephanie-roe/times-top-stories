import styled from "styled-components";


const ArticleSummary = ({details}) => {
    return (
        <SummarySection>
            <ListImage src={details.multimedia[0].url} alt={details.multimedia[0].caption} /> 
            <ContentContainer>
                <h2>{details.title}</h2>
                <p>{details.des_facet[0]}</p>
            </ContentContainer>
        </SummarySection>
    )
}

export default ArticleSummary

const SummarySection = styled.section`
    width: 90vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    margin: 20px;
`

const ListImage = styled.img`
    width: 250px;
    height: 200px;
    object-fit: cover;
    margin: 10px;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

