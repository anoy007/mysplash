import React from "react";
import "./PictureItem.css"

const PictureItem :React.FC<{url:string,desc:string,name:string}>= (props) => {
    
    return <div className="card-item">
        <div className="card-item-img">
            <img src={props.url} alt={props.desc} />
        </div>
        <div className="card-item-text">
            {props.name}
        </div>

    </div>


}

export default PictureItem;