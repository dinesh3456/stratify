import Link from 'next/link';
import React from 'react';


const PageTitle = (props) => {
    return (

        <section className="breadcrumb-area" style={{ backgroundImage: 'url(assets/images/banner/banner-inner.jpg)' }}>
            <div className="container">
                <div className="breadcrumb__wrp">
                    <div className="breadcrumb__item">
                        <h1 className="title">{props.pageName}</h1>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><i className="fa-light fa-angle-right"></i></li>
                            <li>{props.pageName}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default PageTitle;