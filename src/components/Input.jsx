import '../styles/Input.css';
function Input({
  className = 'input',
  label,
  lblAnim = true,
  id,
  htmlId,
  updateInput,
  type = 'text',
  category,
  categoryIndex = 0,
  disabled = null,
  ...props
}) {
  return (
    <div className='input-container'>
      <label htmlFor={htmlId} className={lblAnim ? 'label--animation' : null}>
        {label}
      </label>
      <input
        onChange={(e) => {
          updateInput(id, e.target.value, category, categoryIndex);
        }}
        className={className}
        type={type}
        data-id={id}
        id={htmlId}
        data-disabled={disabled}
        {...props}
      />
    </div>
  );
}
export default Input;
