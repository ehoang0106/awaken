const aboutImage = require("../../public/img/about.jpg");

const About = () => {
    return (  
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <img src={{aboutImage}} className="img-responsive" alt="" />{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
