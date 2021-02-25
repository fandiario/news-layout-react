import React from "react"

class Footer extends React.Component {
    render () {
        return (
            <div>
                <nav className="nav bg-dark text-light fixed-bottom">
                    <div className="container d-flex pt-3">
                        <div className="mx-auto">
                            <p>
                                Purwadhika Digital School 2021
                            </p>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Footer