import React, { useState } from 'react';
import './Register.css';
import { useNavigate, Link } from "react-router-dom";
import { assets } from '../../assets/assets';

const Register = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  const isSubmitDisabled = !name || !email;

  return (
    <div>
      {submitted ? (
        <div className='success'>
          <div>
            <img src={assets.greenTick} alt="" />
            <p className='special-font'>Success Submitted</p>
            <h1>Congratulations</h1>
            <p className='desc'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
          </div>
          <div className="foot"><p>Redirecting you to HomePage in <span>5 Seconds</span></p></div>
        </div>
      ) : (
        <div className='register'>
          <div>
            <Link to='/'><img src={assets.close} alt="" /></Link>
            <p className='special-font'>Registration From</p>
            <h1>Start Your Success Journey here!</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required/>
              <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button type="submit" className={isSubmitDisabled ? 'disabled' : ''} disabled={isSubmitDisabled}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
