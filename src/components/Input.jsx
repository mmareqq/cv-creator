import '../styles/Input.css';
function Input({
  className = 'input',
  label,
  id,
  updateInput,
  type = 'text',
  category,
  categoryIndex = 0,
  ...props
}) {
  return (
    <div className='input-container'>
      <label htmlFor={id} className='label--animation'>
        {label}
      </label>
      <input
        onChange={(e) => {
          updateInput(id, e.target.value, category, categoryIndex);
        }}
        className={className}
        type={type}
        id={id}
        {...props}
      />
    </div>
  );
}
export default Input;
