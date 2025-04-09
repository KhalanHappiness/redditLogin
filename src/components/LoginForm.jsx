import { useState } from 'react';
import SocialButton from './SocialButton';
import InputField from './InputField';
import LinkText from './LinkText';
import SubmitButton from './SubmitButton';
import Divider from './Divider';
import googleLogo from '../assets/google.svg';
import appleLogo from '../assets/apple.png';
import './LoginForm.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.username.trim() !== '' && formData.password.trim() !== '';

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="form-title">Log In</h2>
        <p className="form-description">
          By continuing, you agree to our <LinkText href="#">User Agreement</LinkText> and 
          acknowledge that you understand the <LinkText href="#">Privacy Policy</LinkText>.
        </p>
        
        <SocialButton 
          logo={googleLogo} 
          logoAlt="Google" 
          text="Continue with Google" 
        />
        
        <SocialButton 
          logo={appleLogo} 
          logoAlt="Apple" 
          text="Continue with Apple" 
        />
        
        <Divider text="OR" />
        
        <InputField 
          type="text"
          name="username"
          placeholder="Email or username *"
          value={formData.username}
          onChange={handleChange}
          required
        />
        
        <InputField 
          type="password"
          name="password"
          placeholder="Password *"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <div className="forgot-password">
          <LinkText href="#">Forgot password?</LinkText>
        </div>
        
        <div className="signup-prompt">
          New to Reddit? <LinkText href="#">Sign Up</LinkText>
        </div>
        
        <SubmitButton 
          text="Log In"
          disabled={!isFormValid}
        />
      </form>
    </div>
  );
}

export default LoginForm;