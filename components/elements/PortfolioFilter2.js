import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function PortfolioFilter1() {
    const isotopeContainer = useRef(null);
    const [filterKey, setFilterKey] = useState("*");
    const [isotopeInstance, setIsotopeInstance] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('isotope-layout').then(({ default: Isotope }) => {
                if (isotopeContainer.current) {
                    const instance = new Isotope(isotopeContainer.current, {
                        itemSelector: ".masonry-item",
                        percentPosition: true,
                        masonry: {
                            columnWidth: ".masonry-item",
                        },
                        animationOptions: {
                            duration: 750,
                            easing: "linear",
                            queue: false,
                        },
                    });
                    setIsotopeInstance(instance);
                }
            }).catch(error => {
                console.error('Failed to load Isotope:', error);
            });
        }
    }, []);

    useEffect(() => {
        if (isotopeInstance) {
            isotopeInstance.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
        }
    }, [filterKey, isotopeInstance]);

    const handleFilterKeyChange = (key) => () => {
        setFilterKey(key);
    };

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter");

    return (
        <>
            <div className="filters clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All </li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Compass</li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Reel</li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Stearing</li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>Jacket</li>
                    <li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}>Binocular</li>
                </ul>
            </div>
            <div className="items-container row" ref={isotopeContainer}>
                {/* Your product blocks here */}
				<div className="product-block masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link href="/shop-product-details"><img className="w-100" src="assets/images/resource/products/1.jpg" alt="Image" /></Link></div>
						<div className="content">
							<h4><Link href="/shop-product-details">Fishing Reel</Link></h4>
							<span className="price">$32.00</span>
							<span className="rating">
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
							</span>
						</div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart" /></Link>
							<Link href="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart" /></Link>
						</div>
					</div>
				</div>
				<div className="product-block masonry-item all cat-1 cat-2 col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link href="/shop-product-details"><img className="w-100" src="assets/images/resource/products/2.jpg" alt="Image" /></Link></div>
						<div className="content">
							<h4><Link href="/shop-product-details">Leather Belt</Link></h4>
							<span className="price">$52.00</span>
							<span className="rating">
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
							</span>
						</div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart" /></Link>
							<Link href="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart" /></Link>
						</div>
					</div>
				</div>
				<div className="product-block masonry-item all cat-1 cat-2 cat-4 col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link href="/shop-product-details"><img className="w-100" src="assets/images/resource/products/3.jpg" alt="Image" /></Link></div>
						<div className="content">
							<h4><Link href="/shop-product-details">Sunglasses</Link></h4>
							<span className="price">$42.00</span>
							<span className="rating">
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
							</span>
						</div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart" /></Link>
							<Link href="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart" /></Link>
						</div>
					</div>
				</div>
				<div className="product-block masonry-item all cat-1 cat-3 col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link href="/shop-product-details"><img className="w-100" src="assets/images/resource/products/4.jpg" alt="Image" /></Link></div>
						<div className="content">
							<h4><Link href="/shop-product-details">Backpack</Link></h4>
							<span className="price">$22.00</span>
							<span className="rating">
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
							</span>
						</div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart" /></Link>
							<Link href="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart" /></Link>
						</div>
					</div>
				</div>
				<div className="product-block masonry-item all cat-1 cat-3 cat-5 col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link href="/shop-product-details"><img className="w-100" src="assets/images/resource/products/5.jpg" alt="Image" /></Link></div>
						<div className="content">
							<h4><Link href="/shop-product-details">Hand Watch</Link></h4>
							<span className="price">$34.00</span>
							<span className="rating">
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
							</span>
						</div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart" /></Link>
							<Link href="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart" /></Link>
						</div>
					</div>
				</div>
				<div className="product-block masonry-item all cat-2 cat-3 cat-4 col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link href="/shop-product-details"><img className="w-100" src="assets/images/resource/products/6.jpg" alt="Image" /></Link></div>
						<div className="content">
							<h4><Link href="/shop-product-details">Party Bag</Link></h4>
							<span className="price">$25.00</span>
							<span className="rating">
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
							</span>
						</div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart" /></Link>
							<Link href="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart" /></Link>
						</div>
					</div>
				</div>
				<div className="product-block masonry-item all cat-1 cat-2 cat-5 col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link href="/shop-product-details"><img className="w-100" src="assets/images/resource/products/7.jpg" alt="Image" /></Link></div>
						<div className="content">
							<h4><Link href="/shop-product-details">Coffee Mug</Link></h4>
							<span className="price">$20.00</span>
							<span className="rating">
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
							</span>
						</div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart" /></Link>
							<Link href="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart" /></Link>
						</div>
					</div>
				</div>
				<div className="product-block masonry-item all cat-1 cat-4 cat-5 col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link href="/shop-product-details"><img className="w-100" src="assets/images/resource/products/8.jpg" alt="Image" /></Link></div>
						<div className="content">
							<h4><Link href="/shop-product-details">Smart Watch</Link></h4>
							<span className="price">$40.00</span>
							<span className="rating">
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
								<i className="fa fa-star" />
							</span>
						</div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart" /></Link>
							<Link href="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart" /></Link>
						</div>
					</div>
				</div>
            </div>
        </>
    );
}

