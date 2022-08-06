import FormItem from './FormItem/FormItem';
import FormSubmitItem from './FormSubmitItem/FormSubmitItem';

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
      <FormSubmitItem value={props.submitItemValue} />
    </form>
  );
}

export default Form;
