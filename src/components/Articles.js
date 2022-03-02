import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getArticles, formatDate } from "../api";
import { UserContext } from "../contexts/User";
import Loader from "react-js-loader"


export function Articles() {
    const {topic_slug} = useParams()
const navigate = useNavigate();
const {loggedInUser, isLoggedIn} = useContext(UserContext);
const [articles, setArticles] = useState([]);
const [sortBy, setSortBy] = useState('created_at')
const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
    getArticles(sortBy, topic_slug)
    .then((articlesFromApi) => {
        setArticles(articlesFromApi)
        setIsLoading(false)
    })
}, [sortBy, topic_slug])

return (
    <>
    
    
    <div className="articles-container">
        <h4 id="welcome-message">Welcome {isLoggedIn ? loggedInUser.username : "Guest"}! Check out all articles below or choose a topic above</h4>
    
   

    {isLoading ? <div id="loader"><Loader type="bubble-top" bgColor={"red"} title={"loading-articles"} color={'red'} size={100} /> </div>: <div className="sort-buttons-container">
        Sort by <button className="sort-button" onClick={() => sortByDate()}>Date created</button> <button className="sort-button"  onClick={() => sortByComments()}>Number of comments</button> <button className="sort-button"  onClick={() => sortByVotes()}>Number of votes</button>
    </div>}
    <ul>
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