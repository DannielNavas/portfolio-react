import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Article } from "./pages/article";
import { Blog } from "./pages/blog";
import { Certificates } from "./pages/certificates";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";

import { NavBar } from "./components/navbar";

function App() {
  return (
    <>
      <main className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="articles/:idArticle" element={<Article />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certificates" element={<Certificates />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
