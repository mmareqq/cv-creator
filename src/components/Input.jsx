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
  categoryId = 0,
  ...props
}) {
  return (
    <div className='input-container'>
      <label htmlFor={htmlId} className={lblAnim ? 'label--animation' : null}>
        {label}
      </label>
      <input
        onChange={(e) => {
          updateInput(id, e.target.value, category, categoryId);
        }}
        className={className}
        type={type}
        data-id={id}
        id={htmlId}
        {...props}
      />
    </div>
  );
}
export default Input;
