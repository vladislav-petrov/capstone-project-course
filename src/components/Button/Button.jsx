import './Button.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
};

const Button = function({
  type,
  buttonType,
  children,
  onClick
}) {
  return (
    <button
      className={`button ${BUTTON_TYPE_CLASSES[buttonType] ?
        BUTTON_TYPE_CLASSES[buttonType] : ''}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
