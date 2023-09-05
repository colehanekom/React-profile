import { data } from 'autoprefixer';
import React, {useState, useRef} from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';

const Contact = () => {

 // Ref for the form element
const form = useRef();

// State to manage CAPTCHA verification
const [verified, setVerified] = useState(false);
  
// State to manage form input data
const [userData, setUserData] = useState(
  {
    name: '', email: '', mobile: '', message: ''
  }
);

// State to manage form validation errors
  const [formErrors, setFormErrors] = useState(
    {
      name: '', email: '', mobile: '', message: '',
    }
  );

   // Function to validate form inputs
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    if (!userData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    } else {
      newErrors.name = '';
    }

    if (!userData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (!userData.mobile) {
      newErrors.mobile = 'Mobile number is required';
      valid = false;
    } else if (!/^[0-9]+$/.test(userData.mobile)) {
      newErrors.mobile = 'Please enter only numbers';
      valid = false;
    } else {
      newErrors.mobile = '';
    }

    if (!userData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    } else {
      newErrors.message = '';
    }

    setFormErrors(newErrors);
    return valid;
  };

   // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async(e) =>
  {
    e.preventDefault();

    if (validateForm()) {
    const {name, email, mobile, message} = userData;
    const option = {
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name, email, mobile, message
      })
    };

    const res = await fetch('https://online-portfolio-e07e9-default-rtdb.firebaseio.com/Messages.json', option)


    emailjs.sendForm('service_939f4oe', 'template_0iwq4hp', form.current, 'LGd88-0X30fvnrdRS')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      console.log("form sent");


    console.log(res)

    if(res)
    {
      alert('Message Sent')

      // Reset the form fields after successful submission
      setUserData({
        name: '',
        email: '',
        mobile: '',
        message: '',
      });
    };
  };

  console.log("handle submit form sent");
};

  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  return (
    <div name="contact" className="w-full min-h-screen bg-[#111111] flex justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center w-full h-full text-white">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-4 pt-11 pl-4">
            <p className="text-4xl font-bold">Contact <span className="text-[#10C623]">Me</span></p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="text-3xl pb-2">If You Have Any Project In Mind</p>
            <p>
              I would be delighted to hear from you! Please don't hesitate to reach out using the contact information provided below. Whether you have a question, a potential collaboration in mind, or simply want to connect, I am always open to new opportunities. Feel free to email me or connect with me on LinkedIn. I strive to be responsive and will do my best to get back to you promptly. Let's connect and explore how we can work together to create amazing things in the world of technology. I look forward to hearing from you!
            </p>
            <div className="flex justify-start space-x-4 my-4">
              <a href="https://github.com/colehanekom" target="_blank" rel="noopener noreferrer" className="text-[#10C623] hover:text-white">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/mwlite/in/cole-hanekom-63a4a813b" target="_blank" rel="noopener noreferrer" className="text-[#10C623] hover:text-white">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
          <div>
          <form ref={form} method="POST" className="flex flex-col max-w-[600px] w-full">
          <input
            className={`bg-white text-[#111111] p-2 rounded-md ${formErrors.name && 'border-red-500'}`}
            type="text"
            placeholder="Your Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
          <input
            className={`my-3 p-2 bg-white text-[#111111] rounded-md ${formErrors.email && 'border-red-500'}`}
            type="email"
            placeholder="Your Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          <input
            className={`p-2 bg-white text-[#111111] rounded-md ${formErrors.mobile && 'border-red-500'}`}
            type="text"
            placeholder="Your Mobile Number"
            name="mobile"
            value={userData.mobile}
            onChange={handleChange}
            required
          />
          {formErrors.mobile && <p className="text-red-500">{formErrors.mobile}</p>}
          <textarea
            className={`my-3 bg-white p-2 rounded-md text-[#111111] ${formErrors.message && 'border-red-500'}`}
            name="message"
            rows="8"
            placeholder="How can I help you?"
            value={userData.message}
            onChange={handleChange}
            required
          />
          {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}
          <ReCAPTCHA
              sitekey="6LcrJesnAAAAAPccA8VQm5d4FugGfXRp_WBv-s3M"
              onChange={onChange}
            />
          <button type='submit' onClick={handleSubmit} className="text-white border-2 bg-[#10C623] px-4 py-3 my-2 mr-auto rounded-md flex items-center transition-all transform hover:scale-110" disabled={!verified}>
            Submit
          </button>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;