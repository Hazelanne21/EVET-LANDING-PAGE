import { useNavigate } from 'react-router-dom';
import petimage from '../assets/petlg.png';
import petimage2 from '../assets/logo2.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-section">
        <div className="home-text">
        <div className="logo-image">
          <img src={petimage2} alt=" Pet" />
        </div>
          <h1 className="home-title">e-Vet</h1>
          <h2 className="home-subtitle">A Platform for Veterinary Health System</h2>
          <p className="home-description">
           Keep your furry friends in the best of health. If your pet is showing symptoms, 
            check their condition today and get insights to ensure their well-being and happiness.
          </p>
          <button onClick={() => navigate('/about')} className="home-button">
            Learn More
          </button>
        </div>
        <div className="home-image">
          <img src={petimage} alt=" Pet" />
        </div>
      </header>
    </div>
  );
}

export default Home;
