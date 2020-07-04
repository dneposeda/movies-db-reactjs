import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const NotFound = () => (
    <>
        <div className="wrapper-header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="h1 text-center not-found">Not Found</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
);

export default NotFound;
