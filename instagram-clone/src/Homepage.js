import React from 'react'
import "./Homepage.css"
import Sidenav from "./navigation/SideNav"
import Timeline from "./timeline/Timeline"

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav/>
      </div>
      <div className="homepage__timeline">
        <Timeline/>
      </div>
    </div>
  )
}

export default Homepage