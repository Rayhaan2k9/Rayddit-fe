import {useState, useEffect} from 'react'
import {useParams} from "react-router"
import {getComments} from "../api"

export function Comments() {
    const {article_id} = useParams()
const [comments, setComments] = useState([]);



useEffect(() => {
    getComments(article_id)
    .then((commentsFromApi) => {
        setComments(commentsFromApi)
    })
}, [article_id])

    return (
        <div>
            <ul>
                {comments.map((comment) => {
                    return <li className="main-article"><h4>{comment.author}</h4>
                    <p>{comment.body}</p></li>
                })}
                
            </ul>
            <form>
                <textarea rows='4' cols='50'/>
                <button>Post</button>
            </form>
        </div>
    )
}