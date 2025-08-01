import Link from 'next/link';
import React from 'react';

function Error (){
    return (
        <>

        <section className="">
			<div className="auto-container pt-120 pb-70">
				<div className="blog__wrp">
					<div className="row">
						<div className="col-xl-12">
							<div className="error-page__inner">
								<div className="error-page__title-box">
									<img src="assets/images/resource/404.jpg" alt="" />
									<h3 className="error-page__sub-title">Page not found!</h3>
								</div>
								<p className="error-page__text">Sorry we can't find that page! The page you are looking <br />for was never existed.</p>
								<form className="error-page__form">
									<div className="error-page__form-input">
										<input type="search" placeholder="Search here" />
										<button type="submit"><i className="lnr lnr-icon-magnifier" /></button>
									</div>
								</form>
								<Link href="/" className="theme-btn btn-one shop-now">Back to Home</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

        </>
    );
};

export default Error;