import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import email from "../assets/images/email.png";
import { useNavigate } from 'react-router-dom';

function Verify() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }

  return (
    <section>
        <Navbar />
        <div className="text-center font-normal py-10 mb-28 md:px-60 space-y-4 text-lg">
            <h1 className="text-4xl font-bold">Please verify your email...</h1>
            <div className="flex justify-center">
            <img className="h-32" src={email} alt='email'></img>
            </div>
            <p className="text-gray-500">
              Please verify your email address. We have sent a confirmation
              email to:
            </p>
            <p className="font-bold text-xl text-black-800">email id</p>
            <p className="text-gray-500">
              Click the confirmation link in the email to begin using Dribble
            </p>
            <p className="text-gray-500">
              Didn't receive the email? Check your Spam folder, it may have been
              caught by a filter. If you still don't see it, you can <span className="cursor-pointer text-pink-400 font-bold" onClick={()=>window.location.reload()}>resend the
              confirmation email</span>. 
            </p>
            <p className="text-gray-500">Wrong email address?<span className="cursor-pointer text-pink-400 font-bold" onClick={handleClick}> Change it.</span></p>
          </div>
        <Footer />
    </section>
  )
}

export default Verify