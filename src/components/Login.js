import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { getUsers } from "../api"
import {UserContext} from "../contexts/User"

export function Login() {
    const [users, setUsers] = useState([]);
    const {setLoggedInUser} = useContext(UserContext)
    const navigate = useNavigate();

    const clickUser = (newUser) => {
        setLoggedInUser(newUser)
        navigate(`/`)
    }

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
                return <li className="user-card" key={user.username} onClick={() => clickUser(user)}>
                    <img id="user-avatar" src={user.avatar_url} alt={user.username}/>
                    <h5>{user.username}</h5>
                </li>
            })}
            </ul>
        </div>
    )
}