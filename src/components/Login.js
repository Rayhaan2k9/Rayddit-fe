import { useEffect, useState } from "react"
import { getUsers } from "../api"

export function Login() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then((usersFromApi) => {
            setUsers(usersFromApi)
        })
    }, [])
    return (
        <div className="user-container">
            <h2>Please select your username</h2>
            <ul id="user-list">
            {users.map((user) => {
                return <li className="user-card" key={user.username}>
                    <img id="user-avatar" src={user.avatar_url} alt={user.username}/>
                    <h5>{user.username}</h5>
                </li>
            })}
            </ul>
        </div>
    )
}