import Head from 'next/head';
import React from 'react';

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>{headTitle ? headTitle : "Stratify - Business Consulting React Next JS Template"}</title>
                <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon" />                
            </Head>
        </>
    );
};

export default PageHead;