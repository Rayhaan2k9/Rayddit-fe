import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router";
import { getSingleArticle, voteArticle } from "../api";
import { UserContext } from "../contexts/User"
import {AiOutlineLike} from 'react-icons/ai'
import { Comments } from "./Comments";
import { Expandable } from "./Expandable";


export function SingleArticle() {
const {loggedInUser, isLoggedIn} = useContext(UserContext)
const [article, setArticle] = useState({});
const {article_id} = useParams();
const [votes, setVotes] =useState(0)


const like = () => {
    if (isLoggedIn) {
    setVotes((currVotes) => currVotes + 1)
    voteArticle(article_id)
    } else {
        alert('Please log in to vote!')
    }
    
}

useEffect(() => {
    getSingleArticle(article_id).then((articleFromApi) => {
        setArticle(articleFromApi)
    })
}, [votes])

    return <div className="single-article">
        <article className="main-article">
            <h1>{article.title}</h1>
            <h4>Posted by {article.author} on {article.created_at}</h4>
            <p>{article.body}</p>
            
            <div className="article-footer">
            <div className='votes'><button id="like-button" onClick={() => like()}><AiOutlineLike /></button>
            {article.votes}
            </div>

            <div id="comments"><h5>{article.comment_count} comments</h5>
            </div>
         </div>
            
        </article>
        <Expandable>
        <div> <Comments /></div> </Expandable>
            
    </div>
}