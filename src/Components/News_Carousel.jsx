import React from "react"
import Axios from "axios"

const linkAPI = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=68ff0e2425cc45d187460779587fea31"

class NewsCarousel extends React.Component {

    state = {
        data : null
    }

    getData = () => {
        Axios.get (linkAPI)

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
                    <div className="container mt-3">
                        <div className="d-flex col-12 flex-row align-content-center">
                            <p className="spinner-border mr-3" role="status">
                            </p>

                            <span className="font-weight-bold">
                                Loading ...
                            </span>

                        </div>

                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="container mt-3">
                    <h1>
                        Top News
                    </h1>
                    <hr/>
                    <div className="col-12">

                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            {/* <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol> */}
                                            
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval="2000">
                                    <img src={this.state.data[0].urlToImage} className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{this.state.data[0].title}</h5>
                                        <p>{this.state.data[0].description}</p>
                                    </div>
                                </div>

                                <div className="carousel-item" data-interval="2000">
                                    <img src={this.state.data[1].urlToImage} className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{this.state.data[1].title}</h5>
                                        <p>{this.state.data[1].description}</p>
                                    </div>
                                </div>

                                <div className="carousel-item" data-interval="2000">
                                    <img src={this.state.data[2].urlToImage} className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{this.state.data[2].title}</h5>
                                        <p>{this.state.data[2].description}</p>
                                    </div>
                                </div>

                            </div>

                            {/* <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a> */}

                        </div>
                                               

                    </div>
                </div>
            </div>
        )
    }

}

export default NewsCarousel