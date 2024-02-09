import '../../Styles/decorated_btn.css';

const Button = ({ children, onclick }) => {
  return (
    <button
      className="decorated_btn"
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
