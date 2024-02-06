// pages/api/news.tsx
"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './news.module.css'; // Import the CSS module
import Link from 'next/link'; // Import the Link component from next/link

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
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

        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const date = `${year}-${month}-${day}`;

        const apiUrl = `https://newsapi.org/v2/everything?q=technology&publishedAt=${date}&apiKey=${apiKey}`;
        const response = await axios.get(apiUrl);

        // Filter articles that have both a non-empty description and a non-null urlToImage, then limit to 4 articles
        const filteredAndLimitedArticles = response.data.articles.filter(
          (article: Article) => article.description && article.description.trim() !== '' && article.urlToImage
        ).slice(0, 4);

        setArticles(filteredAndLimitedArticles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [apiKey]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Top News Related to Technology</h1>
      <ul className={styles.articleList}>
        {articles.map((article, index) => (
          <li key={index} className={styles.articleItem}>
            <span className={styles.articleTitle}>{article.title}</span>
            <p className={styles.articleDescription}>{article.description}</p>
            {article.urlToImage && (
              <Link href={article.url}>
              <span className={styles.imageLink}>
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className={styles.articleImage}
                />
              </span>
            </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
