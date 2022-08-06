import './Authentication.scss';
import SignInForm from '../../components/Forms/SignInForm/SignInForm';
import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm';

const Authentication = function() {
  return (
    <div className='authentication'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
