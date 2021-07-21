
import React from 'react';
import couronne from "./images/couronnewps.png";
import cles from "./images/cle.png";
// import { options } from '../../Back/routes';


export const Contact = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');


    function handleSubmit(event) {
        event.preventDefault();

        const options = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            }),
        }

        fetch("http://localhost:3000/contactSubmit", options)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setForms(false)
            });
    }
    return (
        <div>
            {
                forms ?
                    <form onSubmit={handleSubmit} className="contact">
                        <img src={couronne} width='200px' height='150px' />
                        <div className="tocontact" >
                            <h2>Contact-Us</h2>
                            <p> You can join us by phone 24h/24: +337-674-424-18</p>
                            <div>
                                <label htmlFor="name">Name </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder='Your Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />

                                <div>
                                    <br />
                                    <label htmlFor="email">E-mail  </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Your E-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <br />
                                    <label htmlFor="message">Message  </label>
                                    <textarea
                                        id="message"
                                        placeholder="Your Message, we will respond you as soon as possible"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)} />
                                    <br />

                                    <button type="envoyer">Send</button>

                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div />
                        <hr />

                        <li>< img src={cles} width='150px' height='100px' /></li>

                    </form>
                    :

                    <p className='reponse'>Request sended</p>
            }
        </div>
    );
}
