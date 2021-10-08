import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        } else if (!name) {
            setErrorMessage('Name is required');
        } else if (!message) {
            setErrorMessage('Message is required')
        }
        alert(`Thanks ${name}, your message has been sent`);

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div className="row">
            <form className="col s6 offset-s3 center-align">
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <input
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                            required
                            className="validate"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="email"
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <input
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Message"
                            required
                        />
                    </div>
                </div >

                <button className="waves-effect waves-light btn" type="button" onClick={handleFormSubmit}>Submit</button>
            </form >
            {errorMessage && (
                <div className="col s12 center">
                    <p className="error-text">{errorMessage}</p>
                </div>
            )
            }
        </div >
    );
}

export default Contact;
