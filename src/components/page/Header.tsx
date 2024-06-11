import "./Header.css"

const Header = ({header}: {header:string}) =>{
    return(
        <h1 className="header">{header}</h1>
    )

}

export default Header