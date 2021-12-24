import React from "react";
import styledComponents from "styled-components";

const Navbar = () => {
    return (

        <header>

            <a href="#" class="logo">YourChallenge</a>

            <nav class="navbar">
                <ul>
                    <li><a class="active" href="/">Product</a></li>
                    <li><a href="/">Download</a></li>
                    <li><a href="/">Pricing</a></li>
                </ul>
            </nav>

        </header>

    );
};

export default Navbar;
