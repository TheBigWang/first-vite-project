import { FC } from "react";
import "./Button.css";


export interface IButton {
    //harry: id
    id: string;
    label: string;
    onSelect: (id: string) => void;
}

const Button: FC<IButton> = ({id,label, onSelect }) => {
    return (
        <button className="button" onClick={() => {
            onSelect(id)//harry: pass the id instead
        }}>{label}</button>
    )
}

export default Button