import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
} from './ButtonStyles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted'
};

const getButton = function(buttonType = BUTTON_TYPE_CLASSES.base) {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
  }[buttonType];
}

const Button = function({
  buttonType,
  children,
  ...otherProps
}) {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  );
}

export default Button;
