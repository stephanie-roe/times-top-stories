import { useState, useEffect } from 'react';
import './App.css';

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
}

export default App;
