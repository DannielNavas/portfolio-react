import "./article-card.css";
export function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <div className="article-card__image">
        <img
          src={article.cover_image}
          alt={article.title}
          width="250"
          height="150"
          loading="lazy"
        />
      </div>
      <div className="article-card__content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noreferrer">
          Leer más
        </a>
      </div>
    </article>
  );
}
