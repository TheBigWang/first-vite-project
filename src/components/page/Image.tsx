import "./Image.css"

const Image = ({image}: {image:string}) =>{
    return(
        <img className="image" src={image}></img>
    )

}

export default Image