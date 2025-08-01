import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

function Contact() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data) => {
        setLoading(true);
        console.log('Form Submitted:', data);
        setTimeout(() => {
            setLoading(false);
            reset();
            alert('Your message has been sent!');
        }, 2000);
    };


    return (
        <>
            <section id='contact-menu' className="contact-two-area pt-130 pb-130 bg-sub">
                <div className="container">
                    <div className="row g-4 g-xl-0 align-items-center">
                        <div className="col-xl-6 order-2 order-xl-1">
                            <div className="contact-two-left">
                                <div className="contact-two__content">
                                    <div className="section-header mb-20">
                                        <h2 className="wow splt-txt" data-splitting>Contact Us or Visit Us</h2>
                                    </div>
                                    <ul>
                                        <li className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.50079 0C4.50533 0 2.06836 2.43697 2.06836 5.4324C2.06836 9.14982 6.92985 14.6072 7.13684 14.8377C7.33125 15.0543 7.67068 15.0539 7.86475 14.8377C8.07173 14.6072 12.9332 9.14982 12.9332 5.4324C12.9332 2.43697 10.4962 0 7.50079 0ZM7.50079 8.1656C5.9937 8.1656 4.76763 6.93949 4.76763 5.4324C4.76763 3.92531 5.99373 2.69924 7.50079 2.69924C9.00785 2.69924 10.2339 3.92534 10.2339 5.43243C10.2339 6.93952 9.00785 8.1656 7.50079 8.1656Z"
                                                    fill="#121C27" />
                                            </svg>
                                            <Link href="/">4140 Parker Rd. Allentown, New Mexico 31134</Link>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.71865 8.12305L8.46237 9.38357C7.95293 9.8948 7.05656 9.90582 6.5361 9.38357L5.27977 8.12305L0.767578 12.6499C0.935537 12.7275 1.12072 12.7739 1.3176 12.7739H13.6809C13.8778 12.7739 14.0629 12.7276 14.2308 12.6499L9.71865 8.12305Z"
                                                    fill="#121C27" />
                                                <path
                                                    d="M13.6808 2.22656H1.31754C1.12066 2.22656 0.935479 2.27291 0.767578 2.35058L5.58917 7.18816C5.58949 7.18849 5.58987 7.18855 5.5902 7.18887C5.59052 7.18919 5.59058 7.18963 5.59058 7.18963L7.15834 8.76258C7.32486 8.9291 7.67355 8.9291 7.84008 8.76258L9.40752 7.18989C9.40752 7.18989 9.4079 7.18919 9.40822 7.18887C9.40822 7.18887 9.40893 7.18849 9.40925 7.18816L14.2307 2.35055C14.0628 2.27285 13.8777 2.22656 13.6808 2.22656Z"
                                                    fill="#121C27" />
                                                <path
                                                    d="M0.140215 2.96484C0.0533203 3.14057 0 3.33563 0 3.54457V11.4547C0 11.6637 0.0532617 11.8587 0.140186 12.0345L4.6602 7.49979L0.140215 2.96484Z"
                                                    fill="#121C27" />
                                                <path
                                                    d="M14.8598 2.96484L10.3398 7.49985L14.8598 12.0346C14.9467 11.8588 15 11.6638 15 11.4548V3.54463C15 3.33563 14.9467 3.14057 14.8598 2.96484Z"
                                                    fill="#121C27" />
                                            </svg>
                                            <Link href="/">needhelp@example.com, 0123 4463 745</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="contact-two__form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="row g-4 mb-4">
                                            <div class="col-6">
                                                <div class="input">
                                                    <label htmlFor="your-name" className="sr-only">Your Name</label>
                                                    <input 
                                                        type="text" 
                                                        id="your-name" 
                                                        name="name"
                                                        placeholder="Your Name" 
                                                        {...register('name')}
                                                    />
                                                    {errors.name && <p className="error">{errors.name.message}</p>}
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="input">
                                                    <label htmlFor="your-email" className="sr-only">Email Address</label>
                                                    <input 
                                                        type="email" 
                                                        id="your-email" 
                                                        name="email"
                                                        placeholder="Email Address" 
                                                        {...register('email')}
                                                    />
                                                    {errors.email && <p className="error">{errors.email.message}</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="textarea">
                                            <label htmlFor="message" className="sr-only">Your Message</label>
                                            <textarea
                                                id="message" 
                                                name="message"
                                                placeholder="Write a Message" 
                                                {...register('message')}
                                            ></textarea>
                                            {errors.message && <p className="error">{errors.message.message}</p>}
                                        </div>                                        
                                        <button type="submit" className="btn-one mt-50" data-splitting disabled={loading}>
                                            {loading ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 order-1 order-xl-2">
                            <div className="contact-two__map">
                                <img src="assets/images/contact/map.png" alt="image" />
                                <div className="location">
                                    <img className="wow bounceIn" src="assets/images/contact/map-location.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
