import Link from "next/link";
import PortfolioFilter2 from "../elements/PortfolioFilter2";
import PriceFilter from "../elements/PriceFilter";

function ShopSidebar() { 
    return (
        <>

            <section className="featured-products overflow-hidden pt-0 mt-80">
                <div className="auto-container">
                    <div className="team-five__wrp">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-sm-12 px-3">
                                <div className="shop-sidebar">
                                    <div className="sidebar-search">
                                        <form action="shop-products.html" method="post" className="search-form">
                                            <div className="form-group">
                                                <input type="search" name="search-field" placeholder="Search..." required="" />
                                                <button><i className="far fa-search" /></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="sidebar-widget category-widget">
                                        <div className="widget-title">
                                            <h5 className="widget-title">Categories</h5>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                <li><Link href="/shop-product-details">Corporate Law</Link></li>
                                                <li><Link href="/shop-product-details">Criminal Law</Link></li>
                                                <li><Link href="/shop-product-details">Family Lawyer</Link></li>
                                                <li><Link href="/shop-product-details">House Lawyer</Link></li>
                                                <li><Link href="/shop-product-details">International Law</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget price-filters">
                                        <div className="widget-title">
                                            <h5 className="widget-title">Filter by Price</h5>
                                        </div>
                                        <PriceFilter/>                                        
                                    </div>
                                    <div className="sidebar-widget post-widget">
                                        <div className="widget-title">
                                            <h5 className="widget-title">Popular Products</h5>
                                        </div>
                                        <div className="post-inner">
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/shop-details"><img src="assets/images/resource/products/thumb-1.jpg" alt="Image" /></Link></figure>
                                                <Link href="/shop-product-details">Best Headset</Link>
                                                <span className="price">$45.00</span>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/shop-details"><img src="assets/images/resource/products/thumb-2.jpg" alt="Image" /></Link></figure>
                                                <Link href="/shop-product-details">Quality Battery</Link>
                                                <span className="price">$34.00</span>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/shop-details"><img src="assets/images/resource/products/thumb-3.jpg" alt="Image" /></Link></figure>
                                                <Link href="/shop-product-details">Smart Watch</Link>
                                                <span className="price">$29.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 content-side mt-md-60">
                                <div className="mixitup-gallery">
                                    <PortfolioFilter2 /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default ShopSidebar