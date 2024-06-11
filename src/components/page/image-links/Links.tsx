import { FC } from "react"
import { ILinkItem } from "../../../server"

const Links:FC<{links:ILinkItem[]}> = ({links}) =>{
    return(
        <>
        <a href={links[0].link} target="_blank" >< img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia_Logo_1.0.png" className="logo"/></a>
        <a href={links[1].link} target="_blank" >< img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" className="logo"/></a>
        </>

    )

}

export default Links