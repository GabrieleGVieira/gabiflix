import "./ButtonLink.css"

function ButtonLink(props) {   
    return (
        <a className={props.className} href={props.link}>
         {props.children}
        </a>
    )
}
export default ButtonLink;