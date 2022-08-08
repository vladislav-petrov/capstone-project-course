import './Button.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
};

const Button = function({
  buttonType,
  children,
  ...otherProps
}) {
  return (
    <button
      className={`button ${BUTTON_TYPE_CLASSES[buttonType] ?
        BUTTON_TYPE_CLASSES[buttonType] : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
