import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation Schema
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup
        .string()
        .matches(/^\d+$/, 'Phone must be only numbers')
        .min(10, 'Phone must be at least 10 digits')
        .required('Phone is required'),
    subject: yup.string().required('Please select a service'),
    message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

function Contact() {
    const [loading, setLoading] = useState(false);

    const services = [
        { value: '', label: 'Choose Our Service' },
        { value: 'uiux', label: 'UI/UX Design' },
        { value: 'workflow', label: 'Workflow Analysis' },
        { value: 'webdev', label: 'Web Developer' },
        { value: 'marketing', label: 'Marketing Manager' },
        { value: 'electrical', label: 'Electrical Engineer' },
        { value: 'webdesign', label: 'Web Designer' },
        { value: 'finance', label: 'Financial Advice' },
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
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            reset();
            alert('Your message has been sent!');
        }, 2000);
    };

    return (
        <section 
            id="contact-menu" 
            className="contact-area" 
            data-speed="0.5" 
            data-parallax="scroll" 
            style={{ backgroundImage: `url("assets/images/contact/contact-image.jpg")` }}
        >
            <div className="contact__wrp">
                <div className="contact__form">
                    <div className="section-header mb-50">
                        <h2 className="wow splt-txt" data-splitting>
                            Call us for any inquiry and <br /> get in touch with us 
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row g-4">
                            <div className="col-sm-6">
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
                            <div className="col-sm-6">
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
                            <div className="col-sm-6">
                                <label htmlFor="your-phone" className="sr-only">Phone</label>
                                <input 
                                    type="text" 
                                    id="your-phone" 
                                    name="phone"
                                    placeholder="Phone" 
                                    {...register('phone')}
                                />
                                {errors.phone && <p className="error">{errors.phone.message}</p>}
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="select-services" className="sr-only">Select Service</label>
                                <select id="select-services" name="subject" {...register('subject')}>
                                    {services.map((service, index) => (
                                    <option key={index} value={service.value}>{service.label}</option>
                                    ))}
                                </select>
                                {errors.subject && <p className="error">{errors.subject.message}</p>}
                            </div>
                        </div>
                        <label htmlFor="message" className="sr-only">Your Message</label>
                        <textarea className="mt-4 rounded-0" id="message" name="message" placeholder="Write a Message" {...register('message')}></textarea>
                        {errors.message && <p className="error">{errors.message.message}</p>}
                        <button type="submit" className="btn-one mt-50" data-splitting disabled={loading}>
                            {loading ? 'Sending...' : 'Submit Now'}
                        </button>
                    </form>
                </div>
            </div>
        </section>

        
    );
}

export default Contact;
