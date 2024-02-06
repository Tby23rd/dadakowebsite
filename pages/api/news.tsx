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
          <div className=" p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">
          Top News Related to Technology</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2  gap-4">
          {articles.map((article, index) => (
            <li key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-inner">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{article.title}</h2>
              <p className="text-gray-700 dark:text-gray-400 mb-2">{article.description}</p>
              {article.urlToImage && (
                <Link href={article.url}>
                  <span className="block mt-2">
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-auto rounded-lg shadow-sm"
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
