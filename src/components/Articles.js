import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getArticles } from "../api";

export function Articles() {
const navigate = useNavigate();
const [articles, setArticles] = useState([]);

useEffect(() => {
    getArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi)
    })
}, [])

return (
    <>
    <nav></nav>
    <div className="articles-container">
        <ul>
            {articles.map((article) => {
                return <li key={article.article_id} className='article-card'>
                    <h2>{article.title}</h2>
                    <h3>Author: {article.author}</h3>
                    <h3>Topic: {article.topic}</h3>
                    <h3>{article.comment_count} comments</h3>
                    <h3>{article.votes} votes</h3>
                    <h3>Created: {article.created_at}</h3>

                </li>
            })}
        </ul>
    </div>
    </>
)
}