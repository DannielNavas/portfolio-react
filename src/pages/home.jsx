import { useEffect, useState } from "react";
import { ArticleCard } from "../components/article-card";
import { ProjectCard } from "../components/project-card";
import { getAllArticles } from "../services/devto.service";
import { getAllProjects } from "../services/github.service";
import { getStatistics } from "../services/statistics.service";
import "./home.css";
export function Home() {
  const [articles, setArticles] = useState([]);
  const [projects, setProjects] = useState([]);
  const [statistics, setStatistics] = useState({});
  useEffect(() => {
    getAllArticles()
      .then((articles) => setArticles(articles))
      .catch((error) => console.log(error));
    getAllProjects()
      .then((projects) => setProjects(projects))
      .catch((error) => console.log(error));
    getStatistics();
  }, []);
  return (
    <>
      <h2>Articulos</h2>
      {articles
        .map((article) => <ArticleCard key={article.id} article={article} />)
        .slice(0, 3)}
      <h2>Proyectos</h2>
      {projects
        .map((project) => (
          <ProjectCard key={`project-${project.id}`} project={project} />
        ))
        .slice(0, 3)}
    </>
  );
}
