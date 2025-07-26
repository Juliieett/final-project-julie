import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert('Signed up with email: ${email}');
    };

    const handleFacebookSignIn = () => {
        
        alert('Signing in with Facebook...');
    };

    const handleGmailSignIn = () => {
        
        alert('Signing in with Gmail...');
    };

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required 
                />
                <button className="signup-button" type="submit">Sign Up</button>
            </form>
            <button className="signup-button facebook" type="button" onClick={handleFacebookSignIn}>
                Sign In with Facebook
            </button>
            <button className="signup-button gmail" type="button" onClick={handleGmailSignIn}>
                Sign In with Gmail
            </button>
        </div>
    );
}

export default SignUp;