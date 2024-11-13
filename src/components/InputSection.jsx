import { useState } from 'react';
function InputSection({ children, legend = 'null', ...props }) {
  const [isOpened, setIsOpened] = useState('true');
  return (
    <>
      <fieldset {...props}>
        <legend>{legend}</legend>
        {isOpened ? children : ''}
        <button
          className='toggleButton'
          onClick={(e) => {
            e.preventDefault();
            setIsOpened(!isOpened);
          }}
        >
          {isOpened ? 'Collapse' : 'Expand'}
        </button>
      </fieldset>
    </>
  );
}
export default InputSection;
