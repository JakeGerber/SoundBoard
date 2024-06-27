import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <div>
        <Link to='/'>Home</Link>
        <Link to='/new-card'>Dashboard</Link>
        <Link to='/test'>Contact</Link>
    </div>
    )
}

export default Navbar