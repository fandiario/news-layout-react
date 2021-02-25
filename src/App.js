import React from "react"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import NewsLayout from "./Components/News_Layout"

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar></Navbar>

        

        <NewsLayout></NewsLayout>

        <Footer></Footer>
      </div>
     
      
    )
  }
}

export default App;
