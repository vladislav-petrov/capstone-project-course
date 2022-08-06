import './FormItem.scss';

const FormItem = function(props) {
  const {
    label,
    name,
    type,
    value
  } = props.data;

  return (
    <div className="form-item">
      <input
        className="form-item__input"
        name={name}
        type={type}
        value={value}
        required
        onChange={(event) => props.handleChange(name, event.target.value)}
      />
      <label className={`${value.length ? 'shrink' : ''} form-item__label`}>
        {label}
      </label>
    </div>
  );
}

export default FormItem;
