import '../App.css';

function SocialButton({ logo, logoAlt, text, onClick }) {
  return (
    <button 
      type="button" 
      className="social-button" 
      onClick={onClick}
    >
      <img src={logo} alt={logoAlt} className="social-logo" />
      <span className='socialText'>{text}</span>
    </button>
  );
}

export default SocialButton;