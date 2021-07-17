import React from 'react'

export default function Index() {
    return (
        <div className="login-page">
           <input type="text" placeholder="Enter Username"/> 
           <input type="password" placeholder="Enter Password"/> 
           <div className="submit-button" onClick={console.log("done")}>Submit</div>
        </div>
    )
}
