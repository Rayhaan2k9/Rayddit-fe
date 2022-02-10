import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router";
import { getSingleArticle } from "../api";
import { UserContext } from "../contexts/User"


export function SingleArticle() {
const {loggedInUser, isLoggedIn} = useContext(UserContext)
const [article, setArticle] = useState({});
const {article_id} = useParams()

useEffect(() => {
    getSingleArticle(article_id).then((articleFromApi) => {
        setArticle(articleFromApi)
    })
}, [])
console.log(article)

    return <div className="single-article">
        <article className="main-article">
            <h1>{article.title}</h1>
            <h4>Posted by {article.author}</h4>
            <p>{article.body}</p>
        </article>
            
    </div>
}