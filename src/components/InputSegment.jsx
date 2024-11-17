import Input from './Input';
function InputSegment({
  updateInput,
  category,
  categoryIndex,
  template,
  values,
}) {
  return (
    <div className='inputs-segment'>
      <h3 className=''>School / University</h3>
      {template.map(({ label, id, maxLength, type = 'text' }) => (
        <Input
          key={category + '-' + categoryIndex + '-' + id}
          label={label}
          id={id}
          updateInput={updateInput}
          className={values[id] ? 'input input--not-empty' : 'input'}
          value={values[id]}
          maxLength={maxLength}
          type={type}
        />
      ))}
    </div>
  );
}

export default InputSegment;
