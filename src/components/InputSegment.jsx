import Input from './Input';
import TrashIcon from '../assets/props/TrashIcon';
import Button from './Button';
function InputSegment({
  updateInput,
  title,
  category,
  categoryId,
  template,
  index,
  values,
  includeCheckbox = false,
  removeInstance,
  children,
}) {
  const isChecked = values.tillNow || null;
  const checkboxKey = category + '-' + categoryId + '-tillNow' || null;
  return (
    <div className='inputs-segment'>
      <div className='segment__title-wrapper'>
        {title ? <h3 className='segment__title'>{`${index + 1}) ${title}`}</h3> : null}
        {removeInstance ? (
          <Button
            className='del-section-btn'
            data-id={categoryId}
            id={`${category}-delBtn-${categoryId}`}
            handleClick={() => {
              removeInstance(category, categoryId);
            }}
          >
            <TrashIcon className='trash-icon' />
          </Button>
        ) : null}
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
      {includeCheckbox ? (
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
      ) : null}
      {children}
    </div>
  );
}

export default InputSegment;
