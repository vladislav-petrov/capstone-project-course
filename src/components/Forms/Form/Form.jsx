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
      <div className='buttons'>
        <Button
          type="submit"
        >
          {props.submitButtonValue}
        </Button>
        {props.children}
      </div>
    </form>
  );
}

export default Form;
