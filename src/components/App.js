import { useState, useEffect } from 'react';
import '../App.css';
import ArticleList from './ArticleList';
import NavBar from "./NavBar";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import ArticleExpanded from './ArticleExpanded';


const App = () => {
  const [allArticles, setAllArticles] = useState([])
  const [section, setSection] = useState("home")
  const [error, setError] = useState(false)

  const fetchArticles = async () => {
    const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=M6ABMiMVTvWgQutZetmU3W17rZz3HBge`

    try {
      const response = await fetch(url)
      if (response.statusText !== "OK") {
        throw Error(response.statusText)
      } else {
        const data = await response.json()
        setAllArticles(data.results)
      }
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
      fetchArticles()
  }, [section])

  const findArticle = (id) => {
    const result = allArticles.find((article, index) => {
      return index === parseInt(id)
      })
    return result
  }

  if (error) {
    return (
      <h1>Oh no! Something's gone wrong</h1>
    )
  } else {
    return (
      <Main>
        <NavBar setSection={setSection}/>
        <Routes>
          <Route exact path="/" element={ <ArticleList setSection={setSection} articles={allArticles}/> }/>
          <Route exact path="/articles/:id" element={<ArticleExpanded findArticle={findArticle}/>} />
        </Routes>
       
      </Main>
    )
  }
}

export default App;


const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`