import React from "react"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import NewsCarousel from "./Components/News_Carousel"
import NewsLayout from "./Components/News_Layout"

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar></Navbar>

        <NewsCarousel></NewsCarousel>        

        <NewsLayout></NewsLayout>

        <Footer></Footer>
      </div>
     
      
    )
  }
}

export default App;
