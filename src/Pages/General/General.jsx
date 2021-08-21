import React from 'react'
import { Layout } from '../../Layout/Layout'
import './General.scss'
import image from '../../Images/jova.jpg'

export const General = () => {
    return (
        <Layout>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                margin: '8rem 0 0 0',
                height: '80vh'
            }}>
                <div className="container-1">
                    <h1>Hello, there!</h1>
                    <div className="underline"></div>
                    <p><b>I'm Jova,</b> an undergraduate informatics student at Institut Teknologi Bandung.</p>
                </div>
                <div className="container-2">
                    <img src={image} alt="Jova" />
                </div>
            </div>
        </Layout>
    );
};
