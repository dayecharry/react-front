import { useParams } from "react-router-dom"


function Profile({ userList }) {
    const { iduser } = useParams();

    const findUser = userList.find((item) => item.id === parseInt(iduser))
    return (
        <div>
            <h2>{findUser.name}</h2>
            <h3>{findUser.email}</h3>
            <h3>{findUser.bootcamp}</h3>
            <h3>{findUser.role}</h3>
        </div>
    )
}

export default Profile