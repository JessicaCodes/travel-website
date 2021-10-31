import * as React from "react"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {


  return (
    <>
      <Heade />
      
        <main>{children}</main>
       
    </>
  )
}



export default Layout
