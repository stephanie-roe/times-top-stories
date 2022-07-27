import { useState, useEffect } from 'react';
import '../App.css';
import ArticleList from './ArticleList';
import NavBar from "./NavBar";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import ArticleExpanded from './ArticleExpanded';

const App = () => {
  const [allArticles, setAllArticles] = useState([])

  useEffect(() => {
    const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=M6ABMiMVTvWgQutZetmU3W17rZz3HBge"

    const fetchArticles = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setAllArticles(data.results)
      } catch (error) {
        console.log("error:", error)
      }
    }

    fetchArticles()
  }, [])

  const findArticle = (id) => {
    return allArticles.find(article => {
      console.log(allArticles.indexOf(article))
      console.log(id)
      return allArticles.indexOf(article) === id
    } )
  }

  return (
    <main>
      <Header>Times Top Stories</Header>
      <NavBar articles={allArticles} />
      <Routes>
        <Route exact path="/" element={ <ArticleList articles={allArticles} /> } />
        <Route exact path="articles/:id" element={<ArticleExpanded findArticle={findArticle}/>} />
      </Routes>
     
    </main>
  )
}

export default App;

const Header = styled.h1`
  text-align: center;
  font-size: 50px;
`
