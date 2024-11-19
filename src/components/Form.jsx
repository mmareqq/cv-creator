import { useState } from 'react';
import '../styles/Form.css';
import Input from './Input';
import InputSection from './InputSection';
import InputSegment from './InputSegment';
import TrashIcon from '../assets/props/TrashIcon';

function Form({ inputs, updateInput, addInstance, removeInstance }) {
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
  return (
    <div className='form__wrapper'>
      <h2>Form</h2>
      <form className='form'>
        <InputSection defaultOpened={false} legend='Personal Data' key='personalData'>
          {personalFields.map(({ label, lblAnim = true, id, maxLength, type = 'text' }) => {
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
                className={inputs.personalData[0][id] ? 'input input--not-empty' : 'input'}
                value={inputs.personalData[0][id]}
                maxLength={maxLength}
                type={type}
              />
            );
          })}
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

        <InputSection defaultOpened={false} legend='Education' key='eduInfo'>
          {inputs.eduInfo.map((instance, instanceIndex) => {
            const catName = 'eduInfo';
            const id = inputs[catName][instanceIndex].id;
            const instanceKey = 'eduInfo' + '-' + id;

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
                >
                  <button
                    type='button'
                    className='del-section-btn'
                    data-id={id}
                    id={`${catName}-delBtn-${id}`}
                    onClick={(e) => {
                      removeInstance(catName, id);
                    }}
                  >
                    <TrashIcon className='trash-icon' />
                  </button>
                </InputSegment>
              </>
            );
          })}
          <button
            type='button'
            className='add-section-btn'
            onClick={() => {
              const newId = generateId('eduInfo');
              addInstance('eduInfo', { id: newId, ...schoolInstance });
            }}
          >
            Add School
          </button>
        </InputSection>

        <InputSection legend='Job Experience' key='jobInfo'>
          {inputs.jobInfo.map((instance, instanceIndex) => {
            const catName = 'jobInfo';
            const id = inputs[catName][instanceIndex].id;
            const instanceKey = 'jobInfo' + '-' + id;

            return (
              <>
                <InputSegment
                  key={instanceKey}
                  category={catName}
                  categoryId={id}
                  index={instanceIndex}
                  title='Job / Employment'
                  template={jobTemplate}
                  values={instance}
                  updateInput={updateInput}
                >
                  <button
                    type='button'
                    className='del-section-btn'
                    data-id={id}
                    id={`${catName}-delBtn-${id}`}
                    onClick={() => {
                      removeInstance(catName, id);
                    }}
                  >
                    <TrashIcon className='trash-icon' />
                  </button>
                </InputSegment>
              </>
            );
          })}
          <button
            type='button'
            className='add-section-btn'
            onClick={() => {
              const newId = generateId('jobInfo');
              addInstance('jobInfo', { id: newId, ...jobInstance });
            }}
          >
            Add Job
          </button>
        </InputSection>
      </form>
    </div>
  );
}
export default Form;
