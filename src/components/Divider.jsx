import '../App.css';

function Divider({ text }) {
  return (
    <div className="divider">
      <span className="divider-line"></span>
      <span className="divider-text">{text}</span>
      <span className="divider-line"></span>
    </div>
  );
}

export default Divider;