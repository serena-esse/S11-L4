import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { Article } from "../interfaces/article";
import { Container, Row, Col } from "react-bootstrap";

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      const data = await response.json();
      setArticles(data.results); // Assegna solo l'array di risultati
    } catch (error) {
      console.error("Errore nel recupero degli articoli:", error);
    }
  };

  return <Row>{Array.isArray(articles) && articles.map((article) => <ArticleCard article={article} />)}</Row>;
};

export default HomePage;
