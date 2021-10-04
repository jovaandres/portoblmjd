import React from 'react'
import { Layout } from '../../Layout/Layout'
import './General.scss'
import image from '../../Images/jova.jpg'

export const General = () => {
    return (
        <Layout>
            <div className="container">
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="container-1">
                            <h1>Hello, there!</h1>
                            <div className="underline"></div>
                            <p><b>I'm Jovaaaa,</b> an undergraduate informatics student at Institut Teknologi Bandung.</p>
                            <p>I am an experienced developer skilled in <strong>Mobile Development (Android, Flutter), Backend Development,</strong> and still love to explore a lot of tech related stuff.</p>
                        </div>
                        <div className="container-1-back">
                            <h1>Nothing, here!</h1>
                            <div className="underline"></div>
                            <p>I don't know why, but I love the pink color palette.</p>
                            <p><strong>Let me know if you like it too!</strong></p>
                        </div>
                    </div>
                </div>
                <div className="container-2">
                    <img src={image} alt="Jova" />
                </div>
            </div>
        </Layout>
    );
};
