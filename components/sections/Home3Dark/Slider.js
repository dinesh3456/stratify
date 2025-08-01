import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    subject: yup.string().required('Please select a date'),
    message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

function Slider() {
    const [loading, setLoading] = useState(false);

    const dates = [
        { value: '', label: 'Select Date' },
        { value: 'Monday', label: 'Monday' },
        { value: 'Tuesday', label: 'Tuesday' },
        { value: 'Wednesday', label: 'Wednesday' },
        { value: 'Thursday', label: 'Thursday' },
        { value: 'Friday', label: 'Friday' },
        { value: 'Saturday', label: 'Saturday' },
        { value: 'Sunday', label: 'Sunday' },
    ];

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
            <section id="home-menu" className="banner-three-area light-area" style={{ backgroundImage: `url(assets/images/banner/banner-three-image.jpg)` }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-7">
                            <div className="banner-three__content">
                                <h1 className="title wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">Secure the Future with Expert Financial Guidance!</h1>
                                <p className="text wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    We a group of design company that amplify creativity from brands and design to marketing and digital strategies.
                                </p>
                                <Link href="/page-about" className="arry-btn">
                                    <i className="fa-thin fa-arrow-right wow fadeInLeft" data-wow-delay="500ms" data-wow-duration="1500ms" />
                                </Link>
                                <div className="arry">
                                    <img className="animation__arryUpDown" src="assets/images/banner/banner-three-arry.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5">
                            <div className="banner-three__form">
                                <h3 className="title">Booking For Consultation</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor="your-name" className="sr-only">Your Name</label>
                                    <input
                                        type="text"
                                        id="your-name"
                                        placeholder="Your Name"
                                        {...register('name')}
                                    />
                                    {errors.name && <p className="error">{errors.name.message}</p>}

                                    <label htmlFor="your-email" className="sr-only">Email Address</label>
                                    <input
                                        type="email"
                                        id="your-email"
                                        placeholder="Email Address"
                                        {...register('email')}
                                    />
                                    {errors.email && <p className="error">{errors.email.message}</p>}
                                    <label htmlFor="select-dates" className="sr-only">Select Date</label>
                                    <select id="select-dates" {...register('subject')}>
                                        {dates.map((date, index) => (
                                            <option key={index} value={date.value}>{date.label}</option>
                                        ))}
                                    </select>
                                    {errors.subject && <p className="error">{errors.subject.message}</p>}

                                    <label htmlFor="message" className="sr-only">Your Message</label>
                                    <textarea
                                        className="mt-4 rounded-0"
                                        id="message"
                                        placeholder="Write a Message"
                                        {...register('message')}
                                    ></textarea>
                                    {errors.message && <p className="error">{errors.message.message}</p>}

                                    <button
                                        type="submit"
                                        className="btn-one-light rounded-0 w-100 mt-20"
                                        data-splitting
                                        disabled={loading}
                                    >
                                        {loading ? 'Sending...' : 'Submit Now'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-three__text wow imageUpToDown">
                    <img src="assets/images/banner/banner-three-text.png" alt="image" />
                </div>
            </section>
        </>
    );
}

export default Slider;