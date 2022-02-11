import axios from "axios";

const raydditApi = axios.create({
    baseURL: 'https://rayddit.herokuapp.com/api'
})

export const getUsers = () => {
    return raydditApi.get(`/users`).then((res) => {
        return res.data.users
    })
}

export const getArticles = (topic) => {
    return raydditApi.get(`/articles`, {params: {topic}}).then((res) => {
        return res.data.articles
    })
}

export const getTopics = () => {
    return raydditApi.get(`/topics`)
    .then ((res) => {
        return res.data.topics
    })
}

export const getSingleArticle = (article_id) => {
    return raydditApi.get(`/articles/${article_id}`)
    .then((res) => {
        return res.data.article
    })
}

export const voteArticle = (article_id) => {
    return raydditApi.patch(`/articles/${article_id}`, {inc_votes : 1})
    .then((res) => {
        return res.data.article
    })
}

export const getComments = (article_id) => {
    return raydditApi.get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data.comments
    })
}