import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation Schema
const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	email: yup.string().email('Invalid email').required('Email is required'),
	subject: yup.string(),
	phone: yup
		.string()
		.matches(/^\d+$/, 'Phone must be only numbers')
		.min(10, 'Phone must be at least 10 digits')
		.required('Phone is required'),
	message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

function TeamDetails() {
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
		// Simulate API call
		setTimeout(() => {
			setLoading(false);
			reset();
			alert('Your message has been sent!');
		}, 2000);
	};
	return (
		<>

			<section className="team-details">
				<div className="container-lg pt-130 pb-100">
					<div className="team-five__wrp">
						<div className="team-details__top pb-70">
							<div className="row align-items-lg-center">
								<div className="col-xl-6 col-lg-6">
									<div className="team-details__top-left">
										<div className="team-details__top-img">
											<img src="assets/images/resource/team-details.jpg"alt="" />
											<div className="team-details__big-text"></div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6">
									<div className="team-details__top-right">
										<div className="team-details__top-content">
											<h3 className="team-details__top-name">Alen Hispro</h3>
											<p className="team-details__top-title">Chief Attorney</p>
											<p className="team-details__top-text-1 mt-5">I help my clients stand out and they
												help me grow.</p>
											<div className="team-details-contact mb-30">
												<h5 className="mb-0">Email Address</h5>
												<div><span>needhelp@yourdomain.com</span></div>
											</div>
											<div className="team-details-contact mb-30">
												<h5 className="mb-0">Phone Number</h5>
												<div><span>+012-3456-789</span></div>
											</div>
											<div className="team-details-contact">
												<h5 className="mb-0">Web Address</h5>
												<div><span>www.yourdomain.com</span></div>
											</div>
											<div className="team-details__social">
												<Link className="text-white" href="/"><i className="fab fa-twitter"></i></Link>
												<Link className="text-white" href="/"><i className="fab fa-facebook"></i></Link>
												<Link className="text-white" href="/"><i className="fab fa-pinterest-p"></i></Link>
												<Link className="text-white" href="/"><i className="fab fa-instagram"></i></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="team-details__bottom pt-100">
							<div className="row">
								<div className="col-xl-6 col-lg-6">
									<div className="team-details__bottom-left">
										<h4 className="team-details__bottom-left-title">Personal Experience</h4>
										<p className="team-details__bottom-left-text">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia</p>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6">
									<div className="team-details__bottom-right">
										<div className="team-details__progress">
											<div className="team-details__progress-single">
												<h4 className="team-details__progress-title">Expertise & Experience</h4>
												<div className="bar">
													<div className="bar-inner count-bar"  data-width={80} style={{width: `80%`}}>
														<div className="count-text" data-speed={3000} data-stop={80}>80%</div>
													</div>
												</div>
											</div>
											<div className="team-details__progress-single">
												<h4 className="team-details__progress-title">Innovative Solutions</h4>
												<div className="bar">
													<div className="bar-inner count-bar"  data-width={70} style={{width: `70%`}}>
														<div className="count-text" data-speed={3000} data-stop={70}>70%</div>
													</div>
												</div>
											</div>
											<div className="team-details__progress-single">
												<h4 className="team-details__progress-title">Cost Efficiency</h4>
												<div className="bar marb-0">
													<div className="bar-inner count-bar"  data-width={55} style={{width: `55%`}}>
														<div className="count-text" data-speed={3000} data-stop={55}>55%</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="team-contact-form">
				<div className="container pb-100 pt-100">
					<div className="sec-title mb-50 text-center">
						<span className="sub-title">Contact With Us Now</span>
						<h2 className="section-title__title">Feel Free to Write Our <br /> Alen Hispro</h2>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<form id='contact_form' onSubmit={handleSubmit(onSubmit)}>
								<div className="row">
									<div className="col-sm-6">
										<div className="mb-3">
											<label htmlFor="your-name" className="sr-only">Your Name</label>
											<input 
												type="text" 
												id="your-name"
												name="name"
												className='form-control'
												placeholder="Your Name" 
												{...register('name')}
											/>
											{errors.name && <p className="error">{errors.name.message}</p>}
										</div>
									</div>
									<div className="col-sm-6">
										<div className="mb-3">
											<label htmlFor="your-email" className="sr-only">Email Address</label>
											<input 
												type="email" 
												id="your-email" 
												name="email"
												className='form-control'
												placeholder="Email Address" 
												{...register('email')}
											/>
											{errors.email && <p className="error">{errors.email.message}</p>}
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<div className="mb-3">
											<label htmlFor="your-subject" className="sr-only">subject</label>
											<input 
												type="text" 
												id="your-subject" 
												name="subject"
												className='form-control'
												placeholder="subject" 
												{...register('subject')}
											/>
											{errors.subject && <p className="error">{errors.subject.message}</p>}
										</div>
									</div>
									<div className="col-sm-6">
										<div className="mb-3">
											<label htmlFor="your-phone" className="sr-only">Phone</label>
											<input 
												type="text" 
												id="your-phone" 
												name="phone"
												className='form-control'
												placeholder="Phone" 
												{...register('phone')}
											/>
											{errors.phone && <p className="error">{errors.phone.message}</p>}
										</div>
									</div>
								</div>
								<div className="mb-3">
									<label htmlFor="message" className="sr-only">Your Message</label>
									<textarea
										id="message" 
										name="message"
										rows="5"
										className='form-control'
										placeholder="Write a Message" 
										{...register('message')}
									></textarea>
									{errors.message && <p className="error">{errors.message.message}</p>}
								</div>
								<div className="mb-3 text-center">						
									<button type="submit" className="theme-btn btn-one me-2" data-splitting disabled={loading}>
										{loading ? 'Sending...' : 'Send Message'}
									</button>
									<button type="reset" className="theme-btn btn-one" data-splitting disabled={loading}>
										{loading ? 'Reseting...' : 'Reset'}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

		</>
	);
};

export default TeamDetails;