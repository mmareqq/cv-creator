import '../styles/Header.css';
import { CVIcon } from '../assets/props/CVIcon';

function Header() {
  return (
    <>
      <header className='header'>
        <div className='wrapper'>
          <div href='#' className='logo-con'>
            <CVIcon size='2em' />
            <h1 className='title'>CV Creator</h1>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
