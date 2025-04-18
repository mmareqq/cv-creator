import { useState, Fragment } from 'react';
import '../styles/Form.css';
import InputSection from './InputSection';
import InputSegment from './InputSegment';
import Button from './Button';
import Textarea from './Textarea';

function Form({ inputs, updateInput, addInstance, removeInstance, toggleExampleTemplate }) {
  const personalTemplate = [
    { label: 'First Name', id: 'firstName', maxLength: 50 },
    { label: 'Last Name', id: 'lastName', maxLength: 50 },
    { label: 'Address', id: 'address', maxLength: 120 },
    { label: 'Email', id: 'email', maxLength: 80, type: 'email' },
    { label: 'Phone Number', id: 'phoneNumber', maxLength: 20 },
  ];

  const schoolTemplate = [
    { label: 'Field of study', id: 'fieldOfStudy', maxLength: 200 },
    { label: 'School / University Name', id: 'schoolName', maxLength: 100 },
    { label: 'Start Date', id: 'startDate', type: 'month', lblAnim: false },
    { label: 'End Date', id: 'endDate', type: 'month', lblAnim: false },
  ];

  const jobTemplate = [
    { label: 'Job Position', id: 'jobPosition', maxLength: 80 },
    { label: 'Company Name', id: 'companyName', maxLength: 100 },
    { label: 'City', id: 'city', maxLength: 80 },
    { label: 'Start Date', id: 'startDate', lblAnim: false, type: 'month' },
    { label: 'End Date', id: 'endDate', lblAnim: false, type: 'month' },
  ];

  const skillsTemplate = [{ label: 'Skill', id: 'skillName', maxLength: 150 }];

  const idCounters = new Map(Object.keys(inputs).map((key) => [key, inputs[key].length - 1]));

  function generateId(sectionName) {
    const newValue = idCounters.get(sectionName) + 1;
    idCounters.set(sectionName, newValue);
    return newValue;
  }

  const schoolInstance = {
    fieldOfStudy: '',
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

  const skillsInstance = {
    skillName: '',
  };

  function getIdentifiers(catName, index) {
    const id = inputs[catName][index].id;
    return [catName, id, `${catName}-${id}`];
  }

  const [loadExample, setLoadExample] = useState(true);

  return (
    <div className='form__wrapper'>
      <h2 className='mt-5 mb-7'>Form</h2>
      <div className='flex items-center mb-8'>
        <span>Use example?</span>
        <button
          className={
            (loadExample ? 'toggle-btn--on bg-green-50' : 'toggle-btn--off bg-red-50') +
            ' bg-white px-4 py-1'
          }
          onClick={() => {
            setLoadExample(!loadExample);
            toggleExampleTemplate(!loadExample);
          }}
        >
          {loadExample ? 'yes' : 'no'}
        </button>
      </div>
      <form className='form'>
        <InputSection legend='Personal Data' key='personalData'>
          {inputs.personalData.map((instance, instanceIndex) => {
            const [catName, catId, instanceKey] = getIdentifiers('personalData', instanceIndex);
            return (
              <InputSegment
                key={instanceKey}
                category={catName}
                categoryId={catId}
                index={instanceIndex}
                title='Personal Data'
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
              <Fragment key={instanceKey}>
                {instanceIndex !== 0 && <hr className='hr' />}
                <InputSegment
                  category={catName}
                  categoryId={id}
                  index={instanceIndex}
                  title='School / University'
                  template={schoolTemplate}
                  values={instance}
                  includeCheckbox={true}
                  updateInput={updateInput}
                  removeInstance={removeInstance}
                ></InputSegment>
              </Fragment>
            );
          })}
          <Button
            type='button'
            handleClick={() => {
              const newId = generateId('eduInfo');
              addInstance('eduInfo', { id: newId, ...schoolInstance });
            }}
            className='add-section-btn'
          >
            Add School
          </Button>
        </InputSection>

        <InputSection defaultOpened={false} legend='Job Experience' key='jobInfo'>
          {inputs.jobInfo.map((instance, instanceIndex) => {
            const [catName, catId, instanceKey] = getIdentifiers('jobInfo', instanceIndex);

            return (
              <Fragment key={instanceKey}>
                {instanceIndex !== 0 && <hr className='hr' />}
                <InputSegment
                  category={catName}
                  categoryId={catId}
                  index={instanceIndex}
                  title='Job / Employment'
                  template={jobTemplate}
                  values={instance}
                  updateInput={updateInput}
                  includeCheckbox={true}
                  removeInstance={removeInstance}
                >
                  <Textarea
                    id='jobDescription'
                    htmlId={`${catName}-${catId}-jobDescription`}
                    label='About'
                    catName={catName}
                    catId={catId}
                    placeholder='Write about yourself'
                    value={inputs[catName][catId]['jobDescription']}
                    updateInput={updateInput}
                  ></Textarea>
                </InputSegment>
              </Fragment>
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

        <InputSection defaultOpened={false} legend='Skills' key='skills'>
          {inputs.skills.map((instance, instanceIndex) => {
            const [catName, catId, instanceKey] = getIdentifiers('skills', instanceIndex);

            return (
              <Fragment key={instanceKey}>
                {instanceIndex !== 0 && <hr className='hr' />}
                <InputSegment
                  category={catName}
                  categoryId={catId}
                  index={instanceIndex}
                  title='Skill'
                  template={skillsTemplate}
                  values={instance}
                  updateInput={updateInput}
                  removeInstance={removeInstance}
                ></InputSegment>
              </Fragment>
            );
          })}
          <Button
            handleClick={() => {
              const newId = generateId('skills');
              console.log('generated id: ', newId);
              addInstance('skills', { id: newId, ...skillsInstance });
            }}
            className='add-section-btn'
          >
            Add Skill
          </Button>
        </InputSection>
      </form>
    </div>
  );
}

export default Form;
