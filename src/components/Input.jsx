import '../styles/Input.css';
function Input({
  className = 'input',
  label,
  id,
  updateInput,
  type = 'text',
  ...props
}) {
  return (
    <div className='input-container'>
      <label htmlFor={id} className='label--animation'>
        {label}
      </label>
      <input
        onChange={(e) => {
          updateInput(id, e.target.value);
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
