import './styles/App.css';
import Header from './pages/header.jsx';
import FrontPage from './pages/frontpage.jsx';
import EducationPage from './pages/educationPage.jsx';


function App() {

  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='page'>
        <FrontPage />
        <EducationPage/>
      </div>
    </div>
  );
}

export default App;

