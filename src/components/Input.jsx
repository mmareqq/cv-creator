import '../styles/Input.css';
function Input({
  className = 'input',
  label,
  id,
  handleChange,
  type = 'text',
  ...props
}) {
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input
        onChange={handleChange}
        className={className}
        type={type}
        id={id}
        {...props}
      />
    </>
  );
}
export default Input;
