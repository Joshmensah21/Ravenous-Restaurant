import './App.css';
import { SearchBar } from "./components/SearchBar.jsx"
import { BusinessList } from "./components/BusinessList.jsx"

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <BusinessList businesses={businessesArr} />
    </div>
  );
}


export default App;

const businessesArr = [
  {
    imageSrc: "./images/pizzanos.png",
    name: "Pizzanos",
    address: "1212 Marble Street",
    city: "Foodmania",
    state: "NY",
    zipCode: "10101",
    category: "Italian", 
    rating: 4.3,
    reviewCount: 72
  },
  {
    imageSrc: "./images/pizza-youth.webp",
    name: "Pizza Youth",
    address: "1406 Pennington Lane",
    city: "Houston",
    state: "TX",
    zipCode: "13213",
    category: "Italian",
    rating: 4.5,
    reviewCount: 112
  },
  {
    imageSrc: "./images/la-cucaracha-mexican-grill.jpg",
    name: "La Cucaracha Mexican Grill",
    address: "9221 Holders Grove",
    city: "San Diego",
    state: "California",
    zipCode: "29383",
    category: "Mexican",
    rating: 4.8,
    reviewCount: 83
  },
  {
    imageSrc: "./images/mister-burger.jpg",
    name: "Mister Burger",
    address: "3426 Quarter Pounder Court",
    city: "DC",
    state: "Washington",
    zipCode: "12932",
    category: "American",
    rating: 3.9,
    reviewCount: 70
  },
  {
    imageSrc: "./images/grillmate.jpg",
    name: "Grillmate",
    address: "2450 Bacon Lane",
    city: "Nevada",
    state: "Las Vegas",
    zipCode: "23048",
    category: "American",
    rating: 4.2,
    reviewCount: 234
  }
];
