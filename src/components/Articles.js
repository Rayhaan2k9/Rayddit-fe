import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getArticles, getNewArticles } from "../api";
import { UserContext } from "../contexts/User";

export function Articles() {
    const {topic_slug} = useParams()
const navigate = useNavigate();
const {loggedInUser, isLoggedIn} = useContext(UserContext);
const [articles, setArticles] = useState([]);

const clickArticle = (article_id) => {
    navigate(`/articles/${article_id}`)
}

useEffect(() => {
    getArticles(topic_slug).then((articlesFromApi) => {
        setArticles(articlesFromApi)
    })
}, [topic_slug])

return (
    <>
    <form>
    <h3 id="welcome-message">Welcome {isLoggedIn ? loggedInUser.username : "Guest"}! Check out all articles below or choose a topic above</h3>
   <label> Sort by <select></select> </label>
    </form>
    <div className="articles-container">
        <ul>
            {articles.map((article) => {
                return <li key={article.article_id} className={article.topic} onClick={() => clickArticle(article.article_id)}>
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