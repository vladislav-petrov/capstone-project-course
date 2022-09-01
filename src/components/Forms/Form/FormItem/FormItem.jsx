import {
  FormItemWrapper,
  Input,
  Label
} from './FormItemStyles';

const FormItem = function(props) {
  const {
    label,
    name,
    type,
    value
  } = props.data;

  return (
    <FormItemWrapper>
      <Input
        name={name}
        type={type}
        value={value}
        required
        onChange={(event) => props.handleChange(name, event.target.value)}
      />
      <Label shrink={value.length}>
        {label}
      </Label>
    </FormItemWrapper>
  );
}

export default FormItem;
