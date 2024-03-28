import React from "react";
import { Card, Col, Button } from "react-bootstrap";

// Definizione dell'interfaccia per l'articolo
interface Article {
  id: string;
  title: string;
  summary: string;
  image_url: string;
  // altre proprietà dell'articolo
}

// Componente ArticleCard per visualizzare un singolo articolo

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Col style={{ width: "18rem" }}>
      <Card>
        <Card.Img variant="top" src={article.image_url} style={{ width: "18rem" }} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>Data di pubblicazione: {article.summary}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleCard;
