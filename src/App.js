import logo from './logo.svg';
import './App.css';
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioMain from './components/PortfolioMain';

function App() {
  return (
    <div className="portfolio">
      <PortfolioHeader />
      <PortfolioMain />
    </div>
  );
}

export default App;
