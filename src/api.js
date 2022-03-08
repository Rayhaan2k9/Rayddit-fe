import axios from "axios";
const dayjs = require("dayjs")

const raydditApi = axios.create({
    baseURL: 'https://rayddit.herokuapp.com/api'
})

export const getUsers = () => {
    return raydditApi.get(`/users`).then((res) => {
        return res.data.users
    })
}

export const getArticles = (sortQry, topicQry) => {
    return raydditApi.get(`/articles`, {params: {topic: topicQry, sort_by: sortQry}})
    .then((res) => {
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

export const undoVote = (article_id) => {
    return raydditApi.patch(`/articles/${article_id}`, {inc_votes: -1})
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

export const postComment = (article_id, author, body) => {
    return raydditApi.post(`/articles/${article_id}/comments`, {username: author, body: body})
    .then((res) => {
        return res.data.comment
    })
}

export const deleteComment = (comment_id) => {
 raydditApi.delete(`/comments/${comment_id}`)
}

export const formatDate = (date) => {
    if (date) {
        return dayjs(date).$d.toString().substring(4, 15);
    }
}
