import "../styles/button.css"

function Button(props) {


    return (
        <button className={props.color}>
            {props.valueButton}
        </button>
    )

}
export default Button