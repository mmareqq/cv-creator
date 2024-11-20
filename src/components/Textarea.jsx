function Textarea({
  className = 'input textarea',
  label,
  lblAnim = false,
  id,
  htmlId,
  updateInput,
  catName,
  catId = 0,
  children,
  ...props
}) {
  return (
    <div className='input-container'>
      <label htmlFor={htmlId}>{label}:</label>
      <textarea
        id={htmlId}
        data-id={id}
        onChange={(e) => updateInput(id, e.target.value, catName, catId)}
        {...props}
      >
        {children}
      </textarea>
    </div>
  );
}
export default Textarea;
