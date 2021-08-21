import { IconButton } from "@material-ui/core";
import React from "react";
import "./Footer.scss";


export const Footer = () => {
    return (
        <footer>
            <div>
                Reach Me
            </div>
            <div>
                <IconButton href="https://www.instagram.com/jov.andrs/" target="_blank" rel="noreferer">
                    <i class="fab fa-instagram"></i>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/jova-andres-riski-b0b232200/" target="_blank" rel="noreferer">
                    <i class="fab fa-linkedin"></i>
                </IconButton>
                <IconButton href="https://open.spotify.com/user/389di68eunjgi5z3q680y7y87" target="_blank" rel="noreferer">
                    <i class="fab fa-spotify"></i>
                </IconButton>
            </div>
            <div className="credit">
                <p>&copy; 2021 by Jova Andreas</p>
            </div>
        </footer>
    )
}