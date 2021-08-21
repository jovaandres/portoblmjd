import React from 'react'
import { Layout } from '../../Layout/Layout'

export const Home = () => {
    return (
        <Layout>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}>
                <h1>Home</h1>
            </div>
        </Layout>
    );
};
