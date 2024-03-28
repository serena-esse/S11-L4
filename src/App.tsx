import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import { Container } from "react-bootstrap";
import ArticleCard from "./components/ArticleCard";

const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-center mt-5 mb-4">Ultimi Articoli</h1>
      <Container>
        <HomePage />
      </Container>
    </div>
  );
};

export default App;
