import './LinkText.css';

function LinkText({ href, children }) {
  return (
    <a href={href} className="link-text">
      {children}
    </a>
  );
}

export default LinkText;