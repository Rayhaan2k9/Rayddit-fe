import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getArticles, getNewArticles } from "../api";
import { UserContext } from "../contexts/User";

export function Articles() {
    const {topic_slug} = useParams()
const navigate = useNavigate();
const {loggedInUser, isLoggedIn} = useContext(UserContext);
const [articles, setArticles] = useState([]);
const [sortBy, setSortBy] = useState('created_at')

const clickArticle = (article_id) => {
    navigate(`/articles/${article_id}`)
}

const sortByDate = () => {
    setSortBy('created_at')
}

const sortByComments = () => {
    setSortBy('comment_count')
}

const sortByVotes = () => {
    setSortBy('votes')
}



useEffect(() => {
    getArticles(sortBy, topic_slug).then((articlesFromApi) => {
        setArticles(articlesFromApi)
    })
}, [sortBy, topic_slug])

return (
    <>
    <form>
    <h3 id="welcome-message">Welcome {isLoggedIn ? loggedInUser.username : "Guest"}! Check out all articles below or choose a topic above</h3>
   <label> Sort by <select>
       <option onChange={sortByDate}>Date created</option>
       <option onChange={sortByComments}>Number of comments</option>
       <option onChange={sortByVotes}>Number of votes</option>
       </select> </label>
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