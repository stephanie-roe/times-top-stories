import { useState, useEffect } from 'react';
import '../App.css';
import ArticleList from './ArticleList';
import NavBar from "./NavBar";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import ArticleExpanded from './ArticleExpanded';
import Filter from "./Filter"

const App = () => {
  const [allArticles, setAllArticles] = useState([])
  const [section, setSection] = useState("home")

  const fetchArticles = async () => {
    const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=M6ABMiMVTvWgQutZetmU3W17rZz3HBge`

    try {
      const response = await fetch(url)
      const data = await response.json()
      setAllArticles(data.results)
    } catch (error) {
      console.log("error:", error)
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

  return (
    <main>
      <NavBar articles={allArticles} setSection={setSection}/>
      {/* <Filter setSection={setSection}/>  */}
      <Routes>
        <Route exact path="/" element={ <ArticleList setSection={setSection} articles={allArticles}/> }/>
        <Route exact path="/articles/:id" element={<ArticleExpanded findArticle={findArticle}/>} />
      </Routes>
     
    </main>
  )
}

export default App;


