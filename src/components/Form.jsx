import { useState } from 'react';
import '../styles/Form.css';
import InputSection from './InputSection';
import InputSegment from './InputSegment';
import Button from './Button';
import Textarea from './Textarea';

function Form({ inputs, updateInput, addInstance, removeInstance }) {
  const personalTemplate = [
    { label: 'First Name', id: 'firstName', maxLength: 50 },
    { label: 'Last Name', id: 'lastName', maxLength: 50 },
    { label: 'Job Title', id: 'targetJob', maxLength: 30 },
    { label: 'Email', id: 'email', maxLength: 50, type: 'email' },
    { label: 'Phone Number', id: 'phoneNumber', maxLength: 20 },
  ];

  const schoolTemplate = [
    { label: 'Profession Title', id: 'proffesionTitle', maxLength: 40 },
    { label: 'School / University Name', id: 'schoolName', maxLength: 100 },
    { label: 'Start Date', id: 'startDate', type: 'date', lblAnim: false },
    { label: 'End Date', id: 'endDate', type: 'date', lblAnim: false },
  ];

  const jobTemplate = [
    { label: 'Job Position', id: 'jobPosition', maxLength: 80 },
    { label: 'Company Name', id: 'companyName', maxLength: 100 },
    { label: 'City', id: 'city', maxLength: 80 },
    { label: 'Start Date', id: 'startDate', lblAnim: false, type: 'date' },
    { label: 'End Date', id: 'endDate', lblAnim: false, type: 'date' },
  ];

  const [idCounters, setIdCounters] = useState({
    personalData: 0,
    eduInfo: 0,
    jobInfo: 0,
  });

  function generateId(sectionName) {
    setIdCounters((prevCounters) => {
      const newCounters = { ...prevCounters };
      newCounters[sectionName] += 1;
      return newCounters;
    });
    return idCounters[sectionName] + 1;
  }

  const schoolInstance = {
    proffesionTitle: '',
    schoolName: '',
    startDate: '',
    endDate: '',
    tillNow: false,
  };

  const jobInstance = {
    jobPosition: '',
    companyName: '',
    city: '',
    startDate: '',
    endDate: '',
    tillNow: false,
    jobDescription: '',
  };

  function getIdentifiers(catName, index) {
    const id = inputs[catName][index].id;
    return [catName, id, `${catName}-${id}`];
  }
  return (
    <div className='form__wrapper'>
      <h2>Form</h2>
      <form className='form'>
        <InputSection defaultOpened='false' legend='Personal Data' key='personalData'>
          {inputs.personalData.map((instance, instanceIndex) => {
            const [catName, catId, instanceKey] = getIdentifiers('personalData', instanceIndex);
            return (
              <InputSegment
                key={instanceKey}
                category={catName}
                categoryId={catId}
                index={instanceIndex}
                title=''
                template={personalTemplate}
                values={instance}
                updateInput={updateInput}
              >
                <Textarea
                  id='aboutInfo'
                  htmlId={`${catName}-${catId}-aboutInfo`}
                  label='About'
                  catName={catName}
                  catId={catId}
                  placeholder='Write about yourself'
                  value={inputs[catName][catId]['aboutInfo']}
                  updateInput={updateInput}
                ></Textarea>
              </InputSegment>
            );
          })}
        </InputSection>

        <InputSection defaultOpened={false} legend='Education' key='eduInfo'>
          {inputs.eduInfo.map((instance, instanceIndex) => {
            const [catName, id, instanceKey] = getIdentifiers('eduInfo', instanceIndex);

            return (
              <>
                <InputSegment
                  key={instanceKey}
                  category={catName}
                  categoryId={id}
                  index={instanceIndex}
                  title='School / University'
                  template={schoolTemplate}
                  values={instance}
                  updateInput={updateInput}
                  removeInstance={removeInstance}
                ></InputSegment>
              </>
            );
          })}
          <Button
            type='button'
            handleClick={() => {
              const newId = generateId('eduInfo');
              addInstance('eduInfo', { id: newId, ...jobInstance });
            }}
            className='add-section-btn'
          >
            Add Job
          </Button>
        </InputSection>

        <InputSection legend='Job Experience' key='jobInfo'>
          {inputs.jobInfo.map((instance, instanceIndex) => {
            const [catName, catId, instanceKey] = getIdentifiers('jobInfo', instanceIndex);

            return (
              <>
                <InputSegment
                  key={instanceKey}
                  category={catName}
                  categoryId={catId}
                  index={instanceIndex}
                  title='Job / Employment'
                  template={jobTemplate}
                  values={instance}
                  updateInput={updateInput}
                  removeInstance={removeInstance}
                >
                  <div className='input-container'>
                    <label htmlFor={`${catName}-${catId}-jobDescription`}>Job Description:</label>
                    <textarea
                      id={`${catName}-${catId}-jobDescription`}
                      onChange={(e) => {
                        updateInput('jobDescription', e.target.value, catName, catId);
                      }}
                      value={inputs[catName][`${catName}`]}
                      className='input'
                      placeholder='Describe your role, responsibilities, and achievements in this position.'
                    ></textarea>
                  </div>
                </InputSegment>
              </>
            );
          })}
          <Button
            handleClick={() => {
              const newId = generateId('jobInfo');
              addInstance('jobInfo', { id: newId, ...jobInstance });
            }}
            className='add-section-btn'
          >
            Add Job
          </Button>
        </InputSection>
      </form>
    </div>
  );
}
export default Form;
