import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import latestNews from '../components/backend-data/latestNews'
import { Link } from 'react-router-dom'

function Article() {
  const url = +document.URL.split('').slice(document.URL.slice('').lastIndexOf('/') + 1)
  console.log(url)

  return (
    <>
    <Navbar/>
    <Link to='/news'> Return to News</Link>
    {latestNews.map(news => 
    news.id === url ? 
      <>
      <h1 key={news.id}> {news.title} </h1>
      <img src={news.image} alt="no img"/>
      <h1> {news.text} </h1>
      </>
    : console.log('page correctly rendering')
    )}
    <Footer/>
    </>
  )
}

export default Article;