import React from 'react'
function Navbar(){
    return(
        <nav className={"nav-wrapper grey darken-3"} >
            <div className={"container"}>
                <a href={"/"} className="brand-logo">My TodoList</a>
            </div>
        </nav>
    )
}
export default Navbar