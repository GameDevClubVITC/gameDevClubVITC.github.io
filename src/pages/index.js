import * as React from "react"
import '../styles/global.scss'

import Home from "../components/Home"
import Navbar from "../components/Navbar"

const IndexPage = () => {
  return (
    <div>
      <Home />
      <div className="section"></div>
      <Navbar />
    </div>
  )
}

export default IndexPage