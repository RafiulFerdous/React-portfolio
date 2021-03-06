import React from "react"
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">

        <div className= "main-info">
            <h1>I am Rafiul Ferdous</h1>
            <Typed 

                className="typed-text"
                strings={["web design", "development", "lots of things"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <a href="#" className={"btn-main-offer"}>Contact me</a>

            
        </div>
            
        </div>
    )
}

export default Header
