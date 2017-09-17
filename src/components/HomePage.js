import React from "react";
import {Link} from "react-router";

class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage">
                <h1>Home</h1>
                <p>This is home page. Welcome!</p>
                <Link to="about" className="btn btn-primary">About</Link>
            </div>
        );
    }
}

export default HomePage;