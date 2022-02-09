import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { getTopics } from "../api"


export function Topics() {
    const [topics, setTopics] = useState([])
    const [selectedTopic, setSelectedTopic] = useState('')
    const navigate = useNavigate();

    const clickTopic = (topic) => {
        setSelectedTopic(topic)
        navigate(`/articles/${topic}`)
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
                    return <li key={topic.slug} className="topic-card" id={topic.slug}>
                        <h2>{topic.slug}</h2>
                        <h3>{topic.description}</h3>
                    </li>
                })}
            </ul>
        </div>
        </>
    )
}