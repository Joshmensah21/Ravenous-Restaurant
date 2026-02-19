import './App.css';
import { BusinessList } from '../src/components/BusinessList';
import { HeroSection } from "./components/Hero"

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <BusinessList/>
    </div>
  );
}

export default App;
