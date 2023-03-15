import React from "react";
import { useSelector } from "react-redux";
import PictureItem from "./PictureItem";
import "./PictureItem.css";
const PictureList = () => {
    const ctx = useSelector((state) => state.picture.items)
    const list = ctx?.map((item, i) => {
        return <PictureItem url={item.urls.small} desc={item.alt_description} key={item.id} name={item.user.name} />
    })
    return <div className="card">
        {list}
    </div>
}

export default PictureList