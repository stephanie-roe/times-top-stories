import styled from "styled-components";


const ArticleSummary = ({details}) => {
    if (!details.multimedia) {
        return (
            <SummarySection>
                 <ListImage src={require(`../assets/filler-image.jpg`)} alt="upclose image of newspapers" /> 
                <ContentContainer>
                    <h2>{details.title}</h2>
                    <p>{details.des_facet[0]}</p>
                </ContentContainer>
            </SummarySection>
        )
    } else {
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
}

export default ArticleSummary

const SummarySection = styled.section`
    width: 80vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    margin: 40px;
    margin-left: 0px;
`

const ListImage = styled.img`
    width: 350px;
    height: 300px;
    object-fit: cover;
    margin: 20px;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

