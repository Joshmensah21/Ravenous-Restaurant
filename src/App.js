import './App.css';
import { SearchBar } from "./components/SearchBar.jsx"
import { BusinessList } from "./components/BusinessList.jsx"

import pizzanoas from "./images/pizzanos.png";
import pizzaYouth from "./images/pizza-youth.webp";
import laCucaracha from "./images/la-cucaracha-mexican-grill.jpg";
import misterBurger from "./images/mister-burger.jpg";
import grillmate from "./images/grillmate.jpg";

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
    imageSrc: pizzanoas,
    name: "Pizzanoas",
    address: "1212 Marble Street",
    city: "Foodmania",
    state: "NY",
    zipCode: "10101",
    cuisine: "Italian", 
    rating: "4 stars",
    reviewCount: "72 reviews"
  },
  {
    imageSrc: pizzaYouth,
    name: "Pizza Youth",
    address: "1406 Pennington Lane",
    city: "Houston",
    state: "TX",
    zipCode: "13213",
    cuisine: "American",
    rating: "5 stars",
    reviewCount: "112 reviews"
  },
  {
    imageSrc: laCucaracha,
    name: "La Cucaracha Mexican Grill",
    address: "9221 Holders Grove",
    city: "San Diego",
    state: "California",
    zipCode: "29383",
    cuisine: "Mexican",
    rating: "5 stars",
    reviewCount: "83 reviews"
  },
  {
    imageSrc: misterBurger,
    name: "Mister Burger",
    address: "3426 Quarter Pounder Court",
    city: "DC",
    state: "Washington",
    zipCode: "12932",
    cuisine: "American",
    rating: "4 stars",
    reviewCount: "70 reviews"
  },
  {
    imageSrc: grillmate,
    name: "Grillmate",
    address: "2450 Bacon Lane",
    city: "Nevada",
    state: "Las Vegas",
    zipCode: "23048",
    cuisine: "American",
    rating: "4 stars",
    reviewCount: "234 reviews"
  }
];