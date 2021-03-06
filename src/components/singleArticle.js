import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router";
import { getSingleArticle, undoVote, voteArticle, formatDate } from "../api";
import { UserContext } from "../contexts/User"
import {AiOutlineLike, AiFillLike} from 'react-icons/ai'
import { Comments } from "./Comments";
import { Expandable } from "./Expandable";
import { Error } from "./Error";



export function SingleArticle() {
const { isLoggedIn } = useContext(UserContext)
const [article, setArticle] = useState({});
const {article_id} = useParams();
const [votes, setVotes] =useState(0)
const [haveVoted, setHaveVoted] = useState(false)
const [loginPrompt, setLoginPrompt] = useState(null)
const [error, setError] = useState(null)




const like = () => {
    if (isLoggedIn) {
    setVotes((currVotes) => currVotes + 1)
    voteArticle(article_id)
    setHaveVoted(true)
    } else {
        setLoginPrompt('Please log in to vote!')
    }  
}

const undoLike = () => {
    if (isLoggedIn) {
        setVotes((currVotes) => currVotes - 1)
        undoVote(article_id)
        setHaveVoted(false)
    }
}


useEffect(() => {
    getSingleArticle(article_id)
    .then((articleFromApi) => {
        setArticle(articleFromApi)
    })
    .catch ((err) => {
       
        setError(err.response)
    })
}, [article, votes, article_id])

    return error ? <Error error={error}/> : <div className="single-article">
        <article className="main-article">
            <h1>{article.title}</h1>
            <h4>Posted by {article.author} on {formatDate(article.created_at)}</h4>
            <p>{article.body}</p>
            
            <div className="article-footer">
            <div className='votes'>{haveVoted ? <button id="undo-like-button" onClick={() => undoLike()}><AiFillLike /></button> : <button id="like-button" onClick={() => like()}><AiOutlineLike /></button>}
            {article.votes}
            <p className="prompt">{loginPrompt}</p>
            </div>

            <div id="comments"><h5>{article.comment_count} comments</h5>
            </div>
         </div>
            
        </article>
        <Expandable>
        <div> <Comments /></div> 
        </Expandable>
    </div>
}