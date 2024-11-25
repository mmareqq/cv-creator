import { useState, useEffect } from 'react';
function InputSection({
  children,
  legend = 'null',
  defaultOpened = true,
  buttonType = 'button',
  ...props
}) {
  const [isOpened, setIsOpened] = useState(defaultOpened);

  return (
    <fieldset className='fieldset' {...props}>
      <legend className='legend'>{legend}</legend>
      <div className='fieldset__wrapper'>{isOpened ? children : null}</div>
      <button
        className='toggle-btn'
        type={buttonType}
        onClick={(e) => {
          e.preventDefault();
          setIsOpened(!isOpened);
        }}
      >
        {isOpened ? 'Collapse' : 'Expand'}
      </button>
    </fieldset>
  );
}
export default InputSection;
