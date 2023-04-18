import React from "react";
import './HomePage.css'

const HomePage: React.FunctionComponent = (): React.ReactElement => {
    return(
        <div className="HomePage">
            <h1>This is home page for my project</h1>
            <p>You can see and add quotes. For this you have special menu at the top of screen</p>
            <p>Have fun using it!</p>
        </div>
    )
}

export default HomePage