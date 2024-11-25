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
  rows = 5,
  ...props
}) {
  return (
    <div className='input-container'>
      <label htmlFor={htmlId}>{label}:</label>
      <textarea
        key={htmlId}
        id={htmlId}
        data-id={id}
        onChange={(e) => updateInput(id, e.target.value, catName, catId)}
        className={className}
        rows={rows}
        {...props}
      >
        {children}
      </textarea>
    </div>
  );
}
export default Textarea;
