import { IconButton, Typography } from "@material-ui/core";
import { Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import "./Footer.scss";


export const Footer = () => {
    return (
        <footer>
            <div>
                <Typography variant="caption">
                </Typography>
            </div>
            <div>
                <IconButton href="" target="_blank" rel="noreferer">
                    <Instagram />
                </IconButton>
                <IconButton href="" target="_blank" rel="noreferer">
                    <LinkedIn />
                </IconButton>
            </div>
        </footer>
    )
}