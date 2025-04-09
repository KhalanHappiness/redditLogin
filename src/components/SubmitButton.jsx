import '../App.css';

function SubmitButton({ text, disabled }) {
  return (
    <button
      type="submit"
      className={`submit-button ${disabled ? 'disabled' : 'active'}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default SubmitButton;