import {
  EmailIco,
  PhoneIco,
  LocationIco,
  UniversityIco,
  SuitCaseIco,
  LightBulbIco,
  ExportIco,
} from '../assets/props/Icons';
import '../styles/Preview.css';
import convertDate from '../assets/utils/convertDate';

function Preview({ inputs }) {
  const personalData = inputs.personalData[0];

  return (
    <div className='preview__section'>
      <h2 className='mt-5 mb-7'>Preview</h2>

      <div className='preview border border-solid border-1' id='cv-preview'>
        <header className='preview__header p-4'>
          <h1 className='preview__title text-center my-8'>
            {personalData.firstName} {personalData.lastName}
          </h1>

          <div className='flex gap-y-2 gap-x-7 flex-wrap justify-center w-11/12 mx-auto'>
            <div className='flex items-center'>
              <EmailIco width='28' height='28' />
              <span>{personalData.email}</span>
            </div>
            <div className='flex items-center'>
              <PhoneIco width='32' height='32' />
              <span>{personalData.phoneNumber}</span>
            </div>

            <div className='text-center flex items-center justify-center'>
              <LocationIco width='32' height='32' />
              <span>{personalData.address}</span>
            </div>
          </div>
          <div className='about my-10 w-11/12 mx-auto text-white/75'>{personalData.aboutInfo}</div>
        </header>

        <div className='grid mt-10'>
          <section className='mx-auto w-11/12 my-5'>
            <h2 className='mb-7 border-l-2 border-solid border-0 pl-4 flex items-center text-xl'>
              <UniversityIco width='26' height='26' />
              <span>Education</span>
            </h2>
            <div className='schools grid gap-8 ml-8'>
              {inputs.eduInfo.map((element, index) => {
                return (
                  <div key={`preview-eduInfo-${index}`}>
                    <div className='text-blue-950 border-solid border-0 border-current border-l-2 pl-3 font-bold text-base'>
                      <span>{element.schoolName}</span>
                    </div>
                    <span className='mx-8 font-bold text-sm'>
                      {convertDate(element.startDate)} -{' '}
                      {element.tillNow ? 'present' : convertDate(element.endDate)}
                    </span>
                    <div className='mx-8'>{element.fieldOfStudy}</div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className='mx-auto w-11/12 my-5'>
            <h2 className='mb-7 border-l-2 border-solid border-0 pl-4 flex items-center text-lg'>
              <SuitCaseIco width='26' height='26' />
              <span>Job Experience</span>
            </h2>

            <div className='grid gap-8 ml-8'>
              {inputs.jobInfo.map((element, index) => {
                return (
                  <div key={`preview-jobInfo-${index}`} className='school grid gap-0'>
                    <div className='text-blue-950 border-solid border-0 border-current border-l-2 pl-4 font-bold text-base'>
                      <span>{element.companyName}</span>
                    </div>
                    <span className='mt-2 mx-8 font-bold text-sm'>
                      {convertDate(element.startDate)} -{' '}
                      {element.tillNow ? 'present' : convertDate(element.endDate)}
                    </span>
                    <div className='mt-2 mx-8 font-bold text-base'>{element.jobPosition}</div>
                    <div className='mx-8 text-blac/75 max-w-prose text-sm'>
                      {element.jobDescription}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className='mx-auto w-11/12 my-5'>
            <h2 className='mb-7 border-l-2 border-solid border-0 pl-4 flex items-center text-lg'>
              <LightBulbIco width='26' height='26' />
              <span>Skills</span>
            </h2>
            <div className='grid gap-2 ml-8'>
              {inputs.skills.map((element, index) => {
                return (
                  <div key={`preview-skills-${index}`} className='school grid gap-0'>
                    <div className='text-blue-950 border-solid border-0 border-current border-l-2 pl-4 text-sm font-bold'>
                      <span>{element.skillName}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Preview;
