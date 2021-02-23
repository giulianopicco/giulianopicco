import React, { useState, useRef } from "react";
import svgEmail from "../assets/email.svg";

const ContactForm = () => {
  const contactForm = useRef();

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Send Message!",
  });
  const [submitted, setSubmitted] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setData({
      ...data,
      buttonText: "Sending...",
    });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    })
      .then(() => {
        setData({
          ...data,
          buttonText: "Send Message!",
        });
        setSubmitted(true);
      })
      .catch((error) => alert(error));
    console.log("message submitted");
  };

  const closeAlert = () => {
    setSubmitted((oldState) => !oldState);
    contactForm.current.reset();
  };

  return (
    <div
      id="contactForm"
      className="max-w-screen-xl mt-20 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-4 md:mx-auto bg-glass-color1 text-gray-200 rounded-lg shadow-lg"
    >
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Let's talk about everything!
          </h2>
        </div>
        <div className="mt-6 text-center p-6">
          <img src={svgEmail} alt="" srcset="" />
        </div>
      </div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={submitForm}
        ref={contactForm}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <span className="uppercase text-sm text-gray-300 font-bold">
            Name
          </span>
          <input
            onChange={handleChange}
            required
            id="standard-basic"
            className="w-full bg-glass-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            placeholder=""
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-300 font-bold">
            Email
          </span>
          <input
            onChange={handleChange}
            required
            id="standard-basic"
            className="w-full bg-glass-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-300 font-bold">
            Message
          </span>
          <textarea
            onChange={handleChange}
            required
            id="standard-basic"
            name="message"
            className="w-full h-32 bg-glass-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mt-8">
          {/* <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Send Message
                </button> */}

          {!submitted ? (
            <button
              type="submit"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              {data.buttonText}
            </button>
          ) : (
            <div className="flex justify-center mt-8 items-center font-medium py-4 px-2 bg-white rounded-md text-green-700 bg-green-100 border border-green-300 ">
              <div slot="avatar">
                <svg
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-check-circle w-5 h-5 mx-2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="text-xl font-normal  max-w-full flex-initial">
                Your message has been submitted
              </div>
              <div
                className="flex flex-auto flex-row-reverse"
                onClick={closeAlert}
              >
                <div>
                  <svg
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-x cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
