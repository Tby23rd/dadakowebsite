// pages/api/news.tsx
"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './News.module.css';
import Image from 'next/image';

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  // Add more fields as needed based on the NewsAPI response structure
}

const NewsComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        if (!apiKey) {
          console.error('NewsAPI key is not available.');
          return;
        }

        const apiUrl = `https://newsapi.org/v2/everything?q=women&apiKey=${apiKey}`;
        const response = await axios.get(apiUrl);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [apiKey]);

  return (
    <div className={styles.gridContainer}>
      {articles.map((article, index) => (
        <div key={index} className={styles.gridItem}>
          {article.urlToImage && (
            <Image 
            src={article.urlToImage} alt={article.title} 
            className={styles.articleImage}
            width={300}
            height={200} />
          )}
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;