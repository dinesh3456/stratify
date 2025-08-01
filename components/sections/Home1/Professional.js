import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import CounterUp from '../../elements/CounterUp';
import Link from 'next/link';


function Professionals() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

          <section className="professional-area pt-130 pb-130">
            <div className="container">
                <div className="row g-0">
                    <div className="col-xl-6">
                        <div className="professional__image imageLeftToRight wow">
                            <img src="assets/images/professional/professional-image.jpg" alt="image" />
                            <div className="content">
                                <ul>
                                    <li className="icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.64714 6.41667C6.64714 4.01592 8.60055 2.0625 11.0013 2.0625C13.4021 2.0625 15.3555 4.01592 15.3555 6.41667C15.3555 8.81742 13.4021 10.7708 11.0013 10.7708C8.60055 10.7708 6.64714 8.81742 6.64714 6.41667ZM13.7513 12.1458H8.2513C5.34547 12.1458 2.98047 14.5108 2.98047 17.4167C2.98047 18.8073 4.11072 19.9375 5.5013 19.9375H16.5013C17.8919 19.9375 19.0221 18.8073 19.0221 17.4167C19.0221 14.5108 16.6571 12.1458 13.7513 12.1458Z"
                                                fill="#121C27" />
                                        </svg>
                                    </li>
                                    <li className="info">
                                        <h3><span className="count"><CounterUp end={20} /></span>k+</h3>
                                        <p>Happy User</p>
                                    </li>
                                </ul>
                                <ul className="last-item">
                                    <li className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M11.9799 1.5C7.57997 1.5 4.00781 5.07216 4.00781 9.47208C4.00781 13.872 7.57997 17.4442 11.9799 17.4442C16.3798 17.4442 19.952 13.872 19.952 9.47208C19.952 5.07216 16.3798 1.5 11.9799 1.5ZM11.9799 6.7692C11.7574 6.51816 11.5196 6.33192 11.2808 6.19776C10.3431 5.67096 9.33029 5.89152 8.69669 6.42264C7.76453 7.20408 7.59485 8.76168 8.52269 10.3243C9.07061 11.298 10.4391 12.2988 11.6005 12.9478C11.8364 13.0795 12.1234 13.0795 12.3593 12.9478C13.5248 12.2964 14.899 11.2908 15.4431 10.3138C16.3649 8.76168 16.1953 7.20408 15.2631 6.42264C14.6295 5.89152 13.6167 5.67096 12.679 6.19776C12.4402 6.33192 12.2024 6.51816 11.9799 6.76944V6.7692Z"
                                                fill="#121C27" />
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M17.0331 16.5996C15.608 17.6208 13.8624 18.222 11.9775 18.222C10.0925 18.222 8.347 17.6208 6.92188 16.5996V21.7219C6.92188 22.0145 7.08603 22.2823 7.34692 22.4151C7.60755 22.5478 7.92052 22.523 8.15716 22.351L11.9775 19.5727L15.7978 22.351C16.0344 22.523 16.3474 22.5478 16.6083 22.4151C16.8689 22.2823 17.0331 22.0145 17.0331 21.7219V16.5996Z"
                                                fill="#121C27" />
                                        </svg>
                                    </li>
                                    <li className="info">
                                        <h3><span className="count"><CounterUp end={100} /></span>+</h3>
                                        <p>Award Winer</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="professional__content">
                            <div className="section-header">
                                <h2 className="wow splt-txt" data-splitting>A flourishing business run by genuine professionals.</h2>
                            </div>
                            <div>
                                <ul className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <li><i className="fa-solid fa-check" /> A Strong and Resilient Brand Identity</li>
                                    <li><i className="fa-solid fa-check" /> Retail Search Engine Optimization (SEO)</li>
                                    <li><i className="fa-solid fa-check" /> Proven Strategies for Effective Retail Marketing </li>
                                </ul>
                                <Link href="/page-about" className="btn-one mt-50 wow fadeInUp" data-wow-delay="200ms"
                                    data-wow-duration="1500ms" data-splitting data-text="Discover More">Discover
                                    More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="professional__wrp">
                    <div className="row g-5 g-xl-4">
                        <div className="col-xl-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="professional__item">
                                <div className="icon">
                                    <svg width="87" height="87" viewBox="0 0 87 87" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1349_9549)">
                                            <path
                                                d="M42.8093 0.499427C51.2595 0.43147 59.5393 2.87514 66.5984 7.52039C73.6576 12.1656 79.1777 18.8031 82.4585 26.5906C85.7394 34.3781 86.633 42.9647 85.026 51.2609C83.4191 59.5571 79.384 67.189 73.4327 73.1883C67.4814 79.1875 59.8821 83.2838 51.5991 84.9573C43.316 86.6308 34.7226 85.8061 26.9089 82.5879C19.0953 79.3697 12.4138 73.903 7.71203 66.8814C3.01027 59.8598 0.500215 51.5998 0.500338 43.1494C0.455426 31.8833 4.88766 21.0606 12.8221 13.0623C20.7565 5.06392 31.5432 0.544953 42.8093 0.499427Z"
                                                stroke="#121C27" />
                                            <path
                                                d="M42.3597 0.5C65.7537 0.5 83.8947 20.656 83.8947 36.366C83.8947 52.076 65.7547 63.166 42.3597 63.166C18.9647 63.166 2.67969 50.015 2.67969 34.305C2.67969 18.595 18.9657 0.5 42.3597 0.5Z"
                                                stroke="#121C27" />
                                            <path
                                                d="M84.8071 38.1698C86.1721 56.5438 70.6671 76.2497 48.7421 76.2497C26.8171 76.2497 13.7941 61.8307 14.5271 42.7687C15.2601 23.7067 35.8161 12.4688 49.7471 12.4688C63.6781 12.4688 83.4461 19.7957 84.8071 38.1698Z"
                                                stroke="#121C27" />
                                            <path
                                                d="M84.8449 42.3146C85.2531 65.705 65.4168 84.194 49.7092 84.4682C34.0016 84.7424 22.5967 66.7987 22.1884 43.4073C21.7801 20.0158 34.6449 3.50478 50.3525 3.2306C66.0601 2.95643 84.4366 18.9231 84.8449 42.3146Z"
                                                stroke="#121C27" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1349_9549">
                                                <rect width="86.079" height="86.301" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h4 className="title">Workflow Management</h4>
                                    <p className="text">We take pride in staying ahead of the curve by offering innovative solutions that tomorrow’s challenges</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="professional__item">
                                <div className="icon">
                                    <svg width="91" height="89" viewBox="0 0 91 89" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1349_9544)">
                                            <path d="M16.457 0.967773H90.0315V72.5547H16.457V0.967773Z"
                                                stroke="#121C27" />
                                            <path d="M0.96875 14.5117H74.5432V88.0335H0.96875V14.5117Z"
                                                stroke="#121C27" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1349_9544">
                                                <rect width="91" height="89" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h4 className="title">Workflow Analysis</h4>
                                    <p className="text">We provide the best services, ensuring your outstanding growth of
                                        your business
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xxl-3 wow fadeInLeft" data-wow-delay="400ms"
                            data-wow-duration="1500ms">
                            <div className="professional__item-last">
                                <div className="icon">
                                <svg width="91" height="89" viewBox="0 0 91 89" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1349_9544)">
                                            <path d="M16.457 0.967773H90.0315V72.5547H16.457V0.967773Z"
                                                stroke="#121C27" />
                                            <path d="M0.96875 14.5117H74.5432V88.0335H0.96875V14.5117Z"
                                                stroke="#121C27" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1349_9544">
                                                <rect width="91" height="89" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h3 className="title">We strongly help business growth</h3>
                                    <a onClick={() => setOpen(true)} className="item-btn video-popup">COMPANY VALUES
                                        <svg width="8"
                                            height="11" viewBox="0 0 8 11" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 10.5V0L8 4.5L0 10.5Z" fill="#121C27" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="oKu4GAeGjp8" onClose={() => setOpen(false)} />

        </>
    )
}
export default Professionals;