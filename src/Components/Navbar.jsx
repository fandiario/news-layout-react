import React from "react"
import menu from "../Assets/menu.svg"
import search from "../Assets/search.svg"

class Navbar extends React.Component {
    render () {
        return (
            <div>
                <nav className="nav bg-dark text-light">
                    <div className="container d-flex justify-content-between">
                        <div className="d-flex align-content-center">
                            <img src={menu} alt=""/>
                        </div>

                        <div>
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/bbc-world-news-logo-png-transparent.png" alt="" style={{height:"60px"}}/>
                        </div>

                        <div className="d-flex align-items-center">
                            <input type="text" placeholder="Search" style={{height:"30px"}} className="mr-3"/>
                            <img src={search} alt=""/>
                        </div>

                    </div>
                </nav>
            </div>
        )
    }

}

export default Navbar