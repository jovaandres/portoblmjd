import React from 'react'
import { Layout } from '../../Layout/Layout'

export const About = () => {
    return (
        <Layout>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}>
                <h1>About</h1>
            </div>
        </Layout>
    );
};
