import Image from "./Image"

import { FC } from "react";
import "./Logo.css"
import Links from "./Links";
import { ILinkItem } from "../../../server";

export interface IImageDisplay {
    img: string;
    links: ILinkItem[];
    
}

const ImageLinks: FC<IImageDisplay> = ({img,links}) => {
    return (
        <>
        <Image image={img}/>
        <Links links={links}/>

        </>
        
       
    )
}
      
export default ImageLinks
