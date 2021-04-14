import React, {useContext, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import './CSS-files/News.css'
import latestNews from '../components/backend-data/latestNews';


  function News() {
    
    return (
      <>
      <Navbar/>
      <div className="news-headline">
        Read The Latest News!
      </div>
      <section>
        {latestNews.map((news) => {
          return <NewsList key={news.id} {...news}></NewsList>
        })}
      </section>
      <Footer/>
      </>
    );
  }



  const NewsList = ({id, title, date, publishedBy, image, text}) => {
    return (
      <>
        <div className="news--article-container">
          <div className="news-article">
            <Link to={"/" + id} className="news-article-title">
              {title}
            </Link>
            <div className="news-article-text"> {text} </div>
            <div className="news-article-info">
              <div className="news-article-date">
                <h4>{date.month} {date.day}, {date.year}</h4>
              </div>
              <div className="news-article-author">
                Written by: {publishedBy}
              </div>
            </div>
          </div>
          <div className="news-article-photo">
            <img className="photo" src={image} alt=""/>
          </div>
        </div>
      </>
    )
  }



export default News;
