import Input from './Input';
function InputSegment({ fields, updateInput, inputs }) {
  return (
    <div className='inputs-segment'>
      <h3 className=''>School / University</h3>
      {fields.map(({ label, id, maxLength, type = 'text' }) => (
        <Input
          key={id}
          label={label}
          id={id}
          updateInput={updateInput}
          className={inputs[id] ? 'input input--not-empty' : 'input'}
          value={inputs[id]}
          maxLength={maxLength}
          type={type}
        />
      ))}
    </div>
  );
}

export default InputSegment;
