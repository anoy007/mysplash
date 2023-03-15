import React from "react";
import Search from "../Shared/Search";
import "./Landing.css"

const Landing = () => {

    return <div className="landing">
        <div className="main-item">
            <h1>UnSplash</h1>
            <p>something about it</p>
            <Search />
        </div>
        <div className="footer-item">
            <div className="footer-initial">
                <a href="#h">photo</a>by
                <a href="#m">Self Name</a>
            </div>
            <div className="footer-last">
                <a href="#s">Powered</a>by 
                <a href="#d">Someone</a>
            </div>

        </div>
    </div>
}

export default Landing;

