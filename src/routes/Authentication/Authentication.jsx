import SignInForm from '../../components/Forms/SignInForm/SignInForm';
import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm';
import { AuthenticationWrapper } from './AuthenticationStyles';

const Authentication = function() {
  return (
    <AuthenticationWrapper>
      <SignInForm />
      <SignUpForm />
    </AuthenticationWrapper>
  );
}

export default Authentication;
