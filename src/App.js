import './App.css';
import { BusinessList } from '../src/components/BusinessList';
import { SearchBar } from "./components/Hero"

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <BusinessList/>
    </div>
  );
}

export default App;
