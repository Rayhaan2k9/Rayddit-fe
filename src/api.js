import axios from "axios";

const raydditApi = axios.create({
    baseURL: 'https://rayddit.herokuapp.com/api'
})

export const getUsers = () => {
    return raydditApi.get(`/users`).then((res) => {
        return res.data.users
    })
}

export const getArticles = () => {
    return raydditApi.get(`/articles`).then((res) => {
        return res.data.articles
    })
}

export const getTopics = () => {
    return raydditApi.get(`/topics`)
    .then ((res) => {
        return res.data.topics
    })
}