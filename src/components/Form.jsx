import '../styles/Form.css';
import Input from './input';
import InputSection from './InputSection';

function Form({ inputs, handleInputChange }) {
  return (
    <>
      <div>
        <h2>Form</h2>
        <form>
          <InputSection legend='Personal Data'>
            // Fix DRY
            <Input
              label='First Name'
              id='firstName'
              handleChange={(e) => {
                handleInputChange('firstName', e.target.value);
              }}
              value={inputs.get('firstName')}
              maxLength='30'
            />
            <Input
              label='Last Name'
              id='lastName'
              handleChange={(e) => {
                handleInputChange('lastName', e.target.value);
              }}
              value={inputs.get('lastName')}
              maxLength='30'
            />
          </InputSection>
        </form>
      </div>
    </>
  );
}
export default Form;
