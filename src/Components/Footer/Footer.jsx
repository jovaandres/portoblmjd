import { IconButton } from "@material-ui/core";
import React from "react";
import "./Footer.scss";


export const Footer = () => {
    return (
        <footer>
            <div>
                follow me
            </div>
            <div>
                <IconButton className="social" href="https://www.instagram.com/jov.andrs/" target="_blank" rel="noreferer">
                    <i style={{ color: '#f16d' }} class="fab fa-instagram"></i>
                </IconButton>
                <IconButton className="social" href="https://www.linkedin.com/in/jova-andres-riski-b0b232200/" target="_blank" rel="noreferer">
                    <i style={{ color: '#1a9ddb' }} class="fab fa-linkedin"></i>
                </IconButton>
                <IconButton className="social" href="https://open.spotify.com/user/389di68eunjgi5z3q680y7y87" target="_blank" rel="noreferer">
                    <i style={{ color: '#17e660' }} class="fab fa-spotify"></i>
                </IconButton>
            </div>
            <div className="credit">
                <span></span>
            </div>
        </footer>
    )
}