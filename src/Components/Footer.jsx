import React from "react"

class Footer extends React.Component {
    render () {
        return (
            <div>
                <nav className="nav bg-danger text-light fixed-bottom">
                    <div className="container d-flex pt-3">
                        <div className="mx-auto">
                            <p>
                                Copyright : Purwadhika Digital School 2021
                            </p>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Footer