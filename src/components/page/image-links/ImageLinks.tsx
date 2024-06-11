import Image from "./Image"

import { FC } from "react";
import "./Logo.css"

export interface Idisplay {
    img: string;
    link: string;
    link2: string;
    // links: string[];
    
}

const Display: FC<Idisplay> = ({img,link,link2}) => {
    return (
        <>
        <Image image={img}></Image>
        <a href={link} target="_blank" >< img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia_Logo_1.0.png" className="logo"/></a>
        <a href={link2} target="_blank" >< img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" className="logo"/></a>

        </>
        
       
    )
}
        

export default Display
