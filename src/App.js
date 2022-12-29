import logo from './logo.svg';
import './App.css';
import HeroSection from './HeroSection';
import FooterSection from './FooterSection';
import ServicesSection from './ServicesSection';

export default function App() {
  return (
    <div className="App">
      <HeroSection/>
      <ServicesSection/>
      <FooterSection/>
    </div>
  );
}

