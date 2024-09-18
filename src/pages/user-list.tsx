import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IUser } from "../lib/types"
import { getUsers, deleteUser } from "../lib/Api"

export const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    getUsers().then((data) => setUsers(data))
  }, [])

  const handleDelete = (id:number | string) => {
    deleteUser(id).then(() => setUsers(users.filter((user) => user.id !== id)))
  }

  return <div>
      <h2 className="list">User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.surname} - {user.age} years, {user.salary} AMD
            <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
            <button className="edit"><Link to={`/user/${user.id}`}>Edit</Link></button>
          </li>
        ))}
      </ul>
    </div>
}
