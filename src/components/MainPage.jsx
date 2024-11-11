import '../styles/MainPage.css';
import Preview from './Preview';
import Form from './Form';
function MainPage() {
  return (
    <main className='main'>
      <div className='main__wrapper wrapper'>
        <Preview />
        <Form />
      </div>
    </main>
  );
}
export default MainPage;
