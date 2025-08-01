import React from 'react';

const ContactForm = () => {

    return (
        <>

            <form action="/">
                <div className="row g-3">
                    <div className="col-sm-6">
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-sm-6">
                        <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" placeholder="Enter Subject" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" placeholder="Enter Phone" />
                    </div>
                </div>
                <textarea className="my-3" name="masage" id="masage" placeholder="Write a Message"></textarea>
                <button className="submit">SEND A MESSAGE</button>
            </form>
            
        </>
    );
};

export default ContactForm;