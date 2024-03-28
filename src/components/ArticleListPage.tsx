import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Article {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  // altre proprietà dell'articolo
}

const ArticleListPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Errore nel recupero degli articoli:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="article-list">
      <h1>Spaceflight News</h1>
      {articles.map((article) => (
        <div key={article.id} className="article">
          <Link to={`/article/${article.id}`}>
            <h2>{article.title}</h2>
            <p>Data di pubblicazione: {article.date}</p>
            <img src={article.imageUrl} alt={article.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleListPage;
