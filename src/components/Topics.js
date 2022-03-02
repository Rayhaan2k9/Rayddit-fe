import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { getTopics } from "../api"


export function Topics() {
    const [topics, setTopics] = useState([])
    const navigate = useNavigate();

    const clickTopic = (event) => {
        navigate(`/topics/${event.target.textContent}`)
    }

    useEffect(() => {
        getTopics()
        .then ((topicsFromApi) => {
            setTopics(topicsFromApi)
        })
    }, [])

    return (
        <>
        <div id="topics-container">
        <h1 className="page-title">Topics</h1>
            <ul>
                {topics.map((topic) => {
                    return <li key={topic.slug} className={topic.slug} >
                        <h2 className="topic-title" onClick={clickTopic}>{topic.slug}</h2>
                        <h3>{topic.description}</h3>
                    </li>
                })}
            </ul>
        </div>
        </>
    )
}