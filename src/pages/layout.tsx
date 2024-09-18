import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return <div className="main">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add User</Link>
        </nav>
        <div style={{ padding: 10}}>
            <Outlet/>
        </div>
    </div>
}