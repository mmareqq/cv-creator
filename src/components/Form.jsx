import '../styles/Form.css';
import Input from './Input';
import InputSection from './InputSection';
import InputSegment from './InputSegment';

function Form({ inputs, updateInput }) {
  const personalFields = [
    { label: 'First Name', id: 'firstName', maxLength: 50 },
    { label: 'Last Name', id: 'lastName', maxLength: 50 },
    { label: 'Job Title', id: 'targetJob', maxLength: 30 },
    { label: 'Email', id: 'email', maxLength: 50, type: 'email' },
    { label: 'Phone Number', id: 'phoneNumber', maxLength: 20 },
  ];

  const educationFields = [
    [
      { label: 'Profession Title', id: 'proffesionTitle', maxLength: 40 },
      { label: 'School / University Name', id: 'schoolName', maxLength: 100 },
      { label: 'Start Date', id: 'schoolStartDate', type: 'date' },
      { label: 'End Date', id: 'schoolEndDate', type: 'date' },
      { label: 'Till now', id: 'isEnded', type: 'checkbox' },
    ],
  ];
  return (
    <>
      <div>
        <h2>Form</h2>
        <form className='form'>
          <InputSection defaultOpened={false} legend='Personal Data'>
            {personalFields.map(({ label, id, maxLength, type = 'text' }) => (
              <Input
                key={id}
                label={label}
                id={id}
                updateInput={updateInput}
                className={
                  inputs.personalData[id] ? 'input input--not-empty' : 'input'
                }
                value={inputs.personalData[0][id]}
                maxLength={maxLength}
                type={type}
              />
            ))}
            <div className='input-container'>
              <label htmlFor='aboutInfo' className='block'>
                About
              </label>
              <textarea
                key='aboutInfo'
                name='aboutInfo'
                id='aboutInfo'
                onChange={(e) => {
                  e.preventDefault();
                  updateInput('aboutInfo', e.target.value);
                }}
                placeholder='Write about yourself...'
                className='input textarea'
              ></textarea>
            </div>
          </InputSection>
          <InputSection legend='Education'>
            {educationFields.map((fieldInfo) => {
              <InputSegment></InputSegment>;
            })}
          </InputSection>
          <InputSection
            defaultOpened={false}
            legend='Job Experience'
          ></InputSection>
        </form>
      </div>
    </>
  );
}
export default Form;
