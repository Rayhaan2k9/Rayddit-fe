import {useState, useEffect, useContext} from 'react'
import {useParams} from "react-router"
import {deleteComment, getComments, postComment} from "../api"
import { UserContext } from '../contexts/User';


export function Comments() {
    const {article_id} = useParams()
const [comments, setComments] = useState([]);
const [commentBody, setCommentBody] = useState('')
const {loggedInUser, isLoggedIn} = useContext(UserContext)

const handleTextChange = (event) => {
setCommentBody(event.target.value)
}

const handlePostSubmit = (event) => {
    if(isLoggedIn) {
        event.preventDefault();
    setCommentBody('')
    postComment(article_id, loggedInUser.username, commentBody)
    } else {
        alert('Please log in to post a comment!')
    } 
}

const handleDelete = (value) => () => {
    deleteComment(value)
    alert('comment deleted')
}


useEffect(() => {
    getComments(article_id)
    .then((commentsFromApi) => {
        setComments(commentsFromApi)
    })
}, [comments])

    return (
        <div>
            <ul>
                {comments.map((comment) => {
                    return <li key={comment.comment_id} className="main-article"><h4>{comment.author}</h4>
                    <p>{comment.body}</p>
                    {loggedInUser.username === comment.author ? <button onClick={handleDelete(comment.comment_id)}>Delete</button> : null}</li>
                })}
                
            </ul>
            <form onSubmit={handlePostSubmit}>
                <textarea onChange={handleTextChange}rows='4' cols='50' value={commentBody} required/>
                <button>Post</button>
            </form>
        </div>
    )
}