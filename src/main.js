import React from "react"
import ReactDom from "react-dom/client"
import Counter from "./components/Counter"
const AppLayout = ()=>{
    return (
        <Counter />
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />)