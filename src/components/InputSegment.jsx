import Input from './Input';
function InputSegment({
  updateInput,
  category,
  categoryIndex,
  template,
  values,
}) {
  const isChecked = values.tillNow;
  return (
    <div className='inputs-segment'>
      <h3 className=''>{categoryIndex + 1 + ')'} School / University</h3>
      <button type='button' className='del-section-btn'>
        Delete School
      </button>

      {template.map(({ label, lblAnim, id, maxLength, type = 'text' }) => {
        const key = category + '-' + categoryIndex + '-' + id;
        if (id === 'endDate' && isChecked) return null;

        return (
          <Input
            key={key}
            label={label}
            lblAnim={lblAnim}
            id={id}
            htmlId={key}
            updateInput={updateInput}
            category={category}
            categoryIndex={categoryIndex}
            className={values[id] ? 'input input--not-empty' : 'input'}
            value={values[id]}
            maxLength={maxLength}
            type={type}
          />
        );
      })}

      <div className='input-container'>
        <label htmlFor={`eduInfo-${categoryIndex}-tillNow`}>Till Now?</label>
        <input
          type='checkbox'
          id={category + '-' + categoryIndex + '-tillNow'}
          checked={isChecked}
          onChange={(e) => {
            updateInput('tillNow', e.target.checked, category, categoryIndex);
          }}
        />
      </div>
    </div>
  );
}

export default InputSegment;
