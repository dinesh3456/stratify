import React from 'react';

function Brand() {
    const brands = Array.from({ length: 6 }, (_, i) => i + 1);

    return (
        <div className="brand-area">
            <div className="row g-0">
                {brands.map((num) => (
                    <div className="col-6 col-lg-2" key={num}>
                        <div className="brand__item">
                            <img 
                                src={`assets/images/brand/brand-image${num}-dark.png`} 
                                alt={`Brand image ${num}`} 
                                loading="lazy" 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brand;
