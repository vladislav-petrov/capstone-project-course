import FormItem from './FormItem/FormItem';
import Button from '../../Button/Button';
import { ButtonsWrapper } from './FormStyles';

const Form = function(props) {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();

      props.handleSubmit();
    }}>
      {props.itemsData.map((itemData) => {
        return (
          <FormItem
            key={itemData.id}
            data={itemData}
            handleChange={props.handleChange}
          />
        );
      })}
      <ButtonsWrapper>
        <Button type="submit">
          {props.submitButtonValue}
        </Button>
        {props.children}
      </ButtonsWrapper>
    </form>
  );
}

export default Form;
