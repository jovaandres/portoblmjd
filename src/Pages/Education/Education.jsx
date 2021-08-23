import React from 'react'
import { Layout } from '../../Layout/Layout'
import './Education.scss'

export const Education = () => {
    return (
        <Layout>
            <div className="edu-container">
                <div className="line-track">
                    <div className="underline"></div>
                    <div className="year-button">
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className="edu-card-list">
                    <div className="edu-card">
                        <div className="card-header"><b>I</b>nstitut <b>T</b>eknologi <b>B</b>andung</div>
                        <div className="card-detail">
                            <p>Undergraduate Student</p>
                            <p>2020-Now</p>
                            <p>Informatics Engineering</p>
                        </div>
                    </div>
                    <div className="edu-card">
                        <div className="card-header"><b>SMA</b> <b>U</b>nggul <b>D</b>el</div>
                        <div className="card-detail">
                            <p>Graduated</p>
                            <p>2017-2020</p>
                            <p>Science</p>
                        </div>
                    </div>
                    <div className="edu-card">
                        <div className="card-header"><b>SMPN 1</b> <b>L</b>umban <b>J</b>ulu</div>
                        <div className="card-detail">
                            <p>Graduated</p>
                            <p>2014-2017</p>
                            <p>-</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
