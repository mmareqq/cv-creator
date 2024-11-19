import Input from './Input';
function InputSegment({
  updateInput,
  title,
  category,
  categoryId,
  template,
  index,
  values,
  children,
}) {
  const isChecked = values.tillNow;
  const checkboxKey = category + '-' + categoryId + '-tillNow';
  return (
    <div className='inputs-segment'>
      <div className='segment__title-wrapper'>
        <h3 className='segment__title'>{`${index + 1}) ${title}`}</h3>
        <div>{children}</div>
      </div>

      {template.map(({ label, lblAnim, id, maxLength, type = 'text' }) => {
        const key = category + '-' + categoryId + '-' + id;
        if (id === 'endDate' && isChecked) return null;

        return (
          <Input
            key={key}
            id={id}
            category={category}
            categoryId={categoryId}
            htmlId={key}
            updateInput={updateInput}
            className={values[id] ? 'input input--not-empty' : 'input'}
            value={values[id]}
            maxLength={maxLength}
            label={label}
            lblAnim={lblAnim}
            type={type}
          />
        );
      })}

      <div className='input-container'>
        <label htmlFor={checkboxKey}>Till Now?</label>
        <input
          id={checkboxKey}
          checked={isChecked}
          type='checkbox'
          onChange={(e) => {
            updateInput('tillNow', e.target.checked, category, categoryId);
          }}
        />
      </div>
    </div>
  );
}

export default InputSegment;
