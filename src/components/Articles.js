import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getArticles, formatDate } from "../api";
import { UserContext } from "../contexts/User";
import { Footer } from "./Footer";


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
    
    
    
    <div className="articles-container">
        <h4 id="welcome-message">Welcome {isLoggedIn ? loggedInUser.username : "Guest"}! Check out all articles below or choose a topic above</h4>
    
    {/* <form>
   <label> Sort by <select>
       <option onChange={() => sortByDate()}>Date created</option>
       <option onChange={() => sortByComments()}>Number of comments</option>
       <option onChange={() => sortByVotes()}>Number of votes</option>
       </select> </label>
    </form> */}

    <div className="sort-buttons-container">
        Sort by <button className="sort-button" onClick={() => sortByDate()}>Date created</button> <button className="sort-button"  onClick={() => sortByComments()}>Number of comments</button> <button className="sort-button"  onClick={() => sortByVotes()}>Number of votes</button>
    </div><ul>
            {articles.map((article) => {
                return <li key={article.article_id} className={article.topic} onClick={() => clickArticle(article.article_id)}>
                    <h2>{article.title}</h2>
                    <h3>Author: {article.author}</h3>
                    <h3>Topic: {article.topic}</h3>
                    <h3>{article.comment_count} comments</h3>
                    <h3>{article.votes} votes</h3>
                    <h3>Created: {formatDate(article.created_at)}</h3>

                </li>
            })}
        </ul>
    </div>
    </>
)
}