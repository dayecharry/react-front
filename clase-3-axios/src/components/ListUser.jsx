import { Link } from "react-router-dom"


function ListUser({ listUser }) {
    return (
        <div>
            {listUser.map((item, i) => (
                <Link key={i} to={`/profile/${item.id}`}>
                    <h4>{item.name}</h4>
                </Link>
            ))}
        </div>
    )
}

export default ListUser