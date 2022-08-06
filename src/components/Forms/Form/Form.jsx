import FormItem from './FormItem/FormItem';
import Button from '../../Button/Button';

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
      <Button
        type="submit"
      >
        {props.submitButtonValue}
      </Button>
    </form>
  );
}

export default Form;
