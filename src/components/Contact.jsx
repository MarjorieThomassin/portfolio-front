import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <>
    <section className="contactTitle">
        <h1 className="contactText">Any questions ?</h1>
        </section>
        <div className="contactContainer">
            <form id="form">
                <input className="inputContact" type="pseudo" placeholder="Name" />
                <input className="inputContact" type="pseudo" placeholder="Last Name" />
                <input className="inputContact" type="email" placeholder="Email" />
                <input className="inputQuestion" type="pseudo" placeholder="Question(s)" />
                <div className="btnLogin">
                <button
            className="loginButton"
            value="submit"
            type="submit"
            onClick={() => alert('question send!')}
          >
            Submit
          </button>
          </div>
            </form>
        </div>
    </>
  );
}

export default Contact;
