import ListUser from "./ListUser";
import language from "../data/lg.json"
import { Link } from "react-router-dom";

function Home({ listImg, listUser }) {
    return (
        <div>Home

            {listImg.map((item, i) => <img src={item} key={i} />)}

            <ListUser listUser={listUser} />

            <ul>
                {language.map((item, i) => (
                    <li key={i} >
                        <Link to={`/language/${item.id}`}>
                            {item.name}
                        </Link>
                    </li>))}
            </ul>
        </div>
    )
}

export default Home