import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading,setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {email, subject, message}
    console.log("this is data",data)

    const response = await fetch('/.netlify/functions/sendemail',{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    setLoading(true);
    const json = await response.json()

    if (!response.ok) {

      console.error('Error:', json);
      setLoading(false);

    }
    if (response.ok) {
      setEmail('')
      setMessage('')
      setSubject('')
      console.log('Message sent.', json);
      setEmailSubmitted(true);
      setLoading(false);


    }

  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-gray-900 my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-gray-900 mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/Esayas188" target="_blank" >
            <img src={GithubIcon} alt="Github Icon" />
          </a>
          
          
          <a href="https://www.linkedin.com/in/esayas-fekade-8b506b247/" target="_blank">
            <img src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-gray-900 block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                id="email"
                required
                className="bg-[#ffffff] border border-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-gray-900 block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                onChange={(e)=>setSubject(e.target.value)}
                id="subject"
                required
                className="bg-[#ffffff] border border-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-gray-900 block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                onChange={(e) => {
                  console.log('the target',e.target.value);
                  setMessage(e.target.value);
                }}

                className="bg-[#ffffff] border border-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
             {loading ? 'Sending' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
