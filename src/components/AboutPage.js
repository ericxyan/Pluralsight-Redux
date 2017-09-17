import React from "react";
import {Link} from "react-router";

class AboutPage extends React.Component {
    render() {
        return (
            <div className="aboutPage">
                <h1>About</h1>
                <p>About Us</p>
                <Link to="home" className="btn btn-primary">Go Home</Link>
            </div>
        );
    }
}

export default AboutPage;