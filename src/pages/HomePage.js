import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
    return(
        <div className="container">
            <h1>Home Page</h1>
            <p>
                <Link to="/rnfsoft">RnfSoft</Link> on Github.
            </p>
        </div>
    )
}

export default HomePage