import { useEffect, useState } from "react";
import { ArticleCard } from "../components/article-card";
import { getAllArticles } from "../services/devto.service";
import "./home.css";
export function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getAllArticles()
      .then((articles) => setArticles(articles))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h2>Articulos</h2>
      {articles
        .map((article) => <ArticleCard key={article.id} article={article} />)
        .slice(0, 3)}
    </>
  );
}
