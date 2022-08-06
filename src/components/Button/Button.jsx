import './Button.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
};

const Button = function({ buttonType, children }) {
  return (
    <button className={`button ${BUTTON_TYPE_CLASSES[buttonType] ?
      BUTTON_TYPE_CLASSES[buttonType] : ''}`}>
      {children}
    </button>
  );
}

export default Button;
