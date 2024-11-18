import '../styles/Form.css';
import Input from './Input';
import InputSection from './InputSection';
import InputSegment from './InputSegment';

function Form({ inputs, updateInput, addInstance }) {
  const personalFields = [
    { label: 'First Name', id: 'firstName', maxLength: 50 },
    { label: 'Last Name', id: 'lastName', maxLength: 50 },
    { label: 'Job Title', id: 'targetJob', maxLength: 30 },
    { label: 'Email', id: 'email', maxLength: 50, type: 'email' },
    { label: 'Phone Number', id: 'phoneNumber', maxLength: 20 },
  ];

  const schoolTemplate = [
    { label: 'Profession Title', id: 'proffesionTitle', maxLength: 40 },
    { label: 'School / University Name', id: 'schoolName', maxLength: 100 },
    {
      label: 'Start Date',
      id: 'startDate',
      type: 'date',
      lblAnim: false,
    },
    { label: 'End Date', id: 'endDate', type: 'date', lblAnim: false },
  ];

  const schoolInstance = {
    proffesionTitle: '',
    schoolName: '',
    startDate: '',
    endDate: '',
    tillNow: true,
  };

  return (
    <div className='form__wrapper'>
      <h2>Form</h2>
      <form className='form'>
        <InputSection
          defaultOpened={false}
          legend='Personal Data'
          key='personalData'
        >
          {personalFields.map(
            ({ label, lblAnim, id, maxLength, type = 'text' }) => {
              const key = 'personalData-' + id;
              return (
                <Input
                  key={key}
                  label={label}
                  id={id}
                  htmlId={key}
                  updateInput={updateInput}
                  category='personalData'
                  categoryIndex={0}
                  lblAnim={lblAnim}
                  className={
                    inputs.personalData[id] ? 'input input--not-empty' : 'input'
                  }
                  value={inputs.personalData[0][id]}
                  maxLength={maxLength}
                  type={type}
                />
              );
            },
          )}
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

        <InputSection legend='Education' key='education'>
          {inputs.eduInfo.map((instance, instanceId) => {
            const key = 'edu-' + instanceId;
            return (
              <>
                <InputSegment
                  key={key}
                  category='eduInfo'
                  categoryIndex={instanceId}
                  template={schoolTemplate}
                  values={instance}
                  updateInput={updateInput}
                ></InputSegment>
              </>
            );
          })}
          <button
            type='button'
            className='add-section-btn'
            onClick={() => {
              addInstance('eduInfo', schoolInstance);
            }}
          >
            Add School
          </button>
        </InputSection>

        <InputSection
          defaultOpened={false}
          legend='Job Experience'
          key='jobExperience'
        ></InputSection>
      </form>
    </div>
  );
}
export default Form;
