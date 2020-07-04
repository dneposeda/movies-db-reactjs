import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
    <div className="logo">
        <Link to={{ pathname: '/'}} className="logo__link">
            <span className="logo__text"><span>netflix</span>roulette</span>
        </Link>
    </div>
)

export default Logo;
