import React from "react"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar></Navbar>

        <h1>
          Hello World
        </h1>

        <Footer></Footer>
      </div>
     
      
    )
  }
}

export default App;
