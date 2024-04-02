const Brands = (props) => {
    return (
        <div id="brands">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title text-center">
                    <h2>Brands</h2>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-6 m-0 p-0">
                        {" "}
                        <img src="img/nw.jpg" className="img-responsive" alt="" />{" "}
                    </div>
                    <div className="col-xs-12 col-md-6 m-0 p-0">
                        <div className="about-text">
                    <h2>Nature Wise</h2>
                            <p>{props.data ? props.data.paragraph : "loading..."}</p>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-6 m-0 p-0">
                        <div className="about-text">
                            <h2>Smarter Nutrition</h2>
                            <p>{props.data ? props.data.paragraph : "loading..."}</p>
                        </div>                        
                    </div>

                    <div className="col-xs-12 col-md-6 m-0 p-0">
                        {" "}
                        <img src="img/sn.jpg" className="img-responsive" alt="" />{" "}
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-6 m-0 p-0">
                        {" "}
                        <img src="img/usdc.jpg" className="img-responsive" alt="" />{" "}
                    </div>
                    <div className="col-xs-12 col-md-6 m-0 p-0">
                        <div className="about-text">
                    <h2>US Doctors' Clinical</h2>
                            <p>{props.data ? props.data.paragraph : "loading..."}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Brands;