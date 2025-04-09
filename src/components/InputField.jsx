import "../App.css"

function InputField({ type, name, placeholder, value, onChange, required }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-field"
      required={required}
    />
  );
}

export default InputField;