import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getArticles, getNewArticles } from "../api";
import { UserContext } from "../contexts/User";

export function Articles() {
const navigate = useNavigate();
const {loggedInUser, isLoggedIn} = useContext(UserContext);
const [articles, setArticles] = useState([]);

useEffect(() => {
    getArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi)
    })
}, [])

return (
    <>
    <h3 id="welcome-message">Welcome {isLoggedIn ? loggedInUser.username : "Guest"}! Check out all articles below or choose a topic above</h3>
    <div className="articles-container">
        <ul>
            {articles.map((article) => {
                return <li key={article.article_id} className={article.topic}>
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