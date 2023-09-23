import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';

import HeroCommon from "../components/HeroCommon";

import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import Footer from "../components/Footer";


const defaultFormFields = {
  user_name: "",
  user_email: "",
  message: ""
}


const Contact = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { user_name, user_email, message } = formFields;
  const form  = useRef();

  useEffect(() => {
    window.scrollTo({left: 0, top: 0, behavior: "smooth"});
  }, []);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kjzbt1o', 'template_fzs60lq', form.current, 'PR2AJn2Uj-oCCxPqq')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    resetFormFields();
  }

  const resetFormFields = () => setFormFields(defaultFormFields);

  return (
    <main className="contact">
      <HeroCommon page="Contact Us" />
      <div className="contact-info">
        <div className="contact-card">
          <MdLocationOn className="icon"/>
          <p className="location">Lahore Pakistan</p>
          <p className="location-desc">2nd Floor, Commercial Market,<span>134 DD, DHA Phase 4, Lahore</span></p>
        </div>
        <div className="contact-card">
          <BsFillTelephoneFill className="icon"/>
          <p className="location">Phones</p>
          <p className="location-desc">+92 300 6372110 <span>+92 301 9068155</span></p>
        </div>
        <div className="contact-card">
          <MdMail className="icon"/>
          <p className="location">Email</p>
          <p className="location-desc">info@gamescraftstudios.com</p>
        </div>
      </div>
      <div className="contact-form">
        <div class="background">
          <div class="container">
              <div class="screen">
                  <div class="screen-body">
                      <div class="screen-body-item left">
                      <div class="app-title">
                          <span>CONTACT</span>
                          <span>US</span>
                      </div>
                      <div class="app-contact">CONTACT INFO : <span className="gr-txt">+92 300 6372110</span></div>
                      </div>
                      <div class="screen-body-item">
                      <form ref={form} class="app-form">
                          <div class="app-form-group">
                          <input class="app-form-control gr-txt" placeholder="NAME" value="Gamescraft Studios" />
                          </div>
                          <div class="app-form-group">
                          <input class="app-form-control" placeholder="EMAIL" name="user_email" value={user_email} onChange={(e) => handleChange(e)} />
                          </div>
                          <div class="app-form-group">
                          <input class="app-form-control" placeholder="Name" name="user_name" value={user_name} onChange={(e) => handleChange(e)} />
                          </div>
                          <div class="app-form-group message">
                          <input class="app-form-control" placeholder="MESSAGE" name="message" value={message} onChange={(e) => handleChange(e)} />
                          </div>
                          <div class="app-form-group buttons">
                          <button class="app-form-button" onClick={(e) => handleSubmit(e)}>SEND</button>
                          </div>
                      </form>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
