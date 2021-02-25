import React from "react"
import Axios from "axios"

const linkApi = "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=68ff0e2425cc45d187460779587fea31"


class NewsLayout extends React.Component {

    state = {
        data: null
    }

    getData = () => {
        Axios.get (linkApi)

        .then ((res) => {
            // console.log (res.data.articles)
            this.setState ({data: res.data.articles})
        })

        .catch ((err) => {
            console.log (err)
        })
    }

    componentDidMount () {
        this.getData ()
    }

    render () {
        
        if (this.state.data === null) {
            return (
                <div>
                    <div className="container">
                        <h3 className="mt-5">
                            Latest News
                        </h3>

                        <hr/>

                        <div className="d-flex col-6 flex-row align-content-center">
                            <p className="spinner-border mr-3" role="status">
                                <span className="sr-only">Loading...</span>
                            </p>

                            {/* <span className="font-weight-bold">
                                Loading ...
                            </span> */}

                        </div>
                        
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className = "container">

                    <h3 className="mt-5">
                        Latest News
                    </h3>

                    <hr/>

                    <div className="col-12 d-flex flex-row flex-wrap">
                        {
                            this.state.data.map ((el, i) => {
                                return (
                                    <div key = {i}>
                                        <div className="card m-3 border-dark" style={{width: "18rem"}}>
                                            <img src={el.urlToImage} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">{el.title}</h5>
                                                <p className="card-text">{el.content}</p>
                                                <a href={el.url} className="btn btn-primary mt-1">Continue...</a>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>
                    
                    

                </div>
            </div>
        )
    }

}

export default NewsLayout