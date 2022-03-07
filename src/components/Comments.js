import {useState, useEffect, useContext} from 'react'
import {useParams} from "react-router"
import {deleteComment, getComments, postComment, formatDate} from "../api"
import { UserContext } from '../contexts/User';


export function Comments() {
    const {article_id} = useParams()
const [comments, setComments] = useState([]);
const [commentBody, setCommentBody] = useState('')
const {loggedInUser, isLoggedIn} = useContext(UserContext)
const [loginPrompt, setLoginPrompt] = useState(null)
const [deleting, setDeleting] = useState(false)

const handleTextChange = (event) => {
setCommentBody(event.target.value)
}

const handlePostSubmit = (event) => {
    if(isLoggedIn) {
        event.preventDefault();
    setCommentBody('')
    postComment(article_id, loggedInUser.username, commentBody)
    } else {
        event.preventDefault();
        setCommentBody('')
        setLoginPrompt('Please log in to post a comment!')
    } 
}

const handleDelete = (value) => () => {
    setDeleting(true)
     deleteComment(value).then(() => {
    setTimeout(() => {     
     setDeleting(false) 
    }, 2000);  
    });  
    
    
    
}


useEffect(() => {
    getComments(article_id)
    .then((commentsFromApi) => {
        setComments([...commentsFromApi])
    })
}, [comments, article_id])

    return (
        <div>
            <p className='prompt'>{loginPrompt}</p>
            <form id='comment-form' onSubmit={handlePostSubmit}>
                <textarea placeholder='Type your comment here' onChange={handleTextChange}rows='4' cols='50' value={commentBody} required/>
                <button>Post</button>
            </form>
            <ul id='comment-list'>
                {comments.map((comment) => {
                    return <li key={comment.comment_id} className="main-article"><h4>{comment.author}</h4>
                    <h5>Posted on {formatDate(comment.created_at)}</h5>
                   <p>{comment.body}</p> 
                   
                    {loggedInUser.username === comment.author && !deleting ? <button onClick={handleDelete(comment.comment_id)}>{deleting ? 'Deleting comment...' : 'Delete'}</button> : loggedInUser.username === comment.author && deleting ? <p className='prompt'>Deleting comment...</p> : null}</li>
                })}
                
            </ul>
            
        </div>
    )
}