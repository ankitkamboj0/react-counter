import React from "react"
import ReactDom from "react-dom/client"

const AppLayout = ()=>{
    return(
        <> 
            This is my component
        </>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />)