import { Fragment } from 'react';

const FormItem = function(props) {
  const {
    label,
    name,
    type,
    value
  } = props.data;

  return (
    <Fragment>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        required
        onChange={(event) => props.handleChange(name, event.target.value)}
      />
    </Fragment>
  );
}

export default FormItem;
