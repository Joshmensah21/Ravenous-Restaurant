import './App.css';
import { SearchBar } from "./components/SearchBar.jsx"
import { BusinessList } from "./components/BusinessList.jsx"

<<<<<<< HEAD
import pizzanoas from "./images/pizzanos.png";
=======
import pizzanos from "./images/pizzanos.png";
>>>>>>> 5df83e935020d7818c1452bfb97cd6984043f208
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
<<<<<<< HEAD
    imageSrc: pizzanoas,
    name: "Pizzanoas",
=======
    imageSrc: pizzanos,
    name: "Pizzanos",
>>>>>>> 5df83e935020d7818c1452bfb97cd6984043f208
    address: "1212 Marble Street",
    city: "Foodmania",
    state: "NY",
    zipCode: "10101",
<<<<<<< HEAD
    cuisine: "Italian", 
    rating: "4 stars",
    reviewCount: "72 reviews"
=======
    category: "Italian", 
    rating: 4.3,
    reviewCount: 72
>>>>>>> 5df83e935020d7818c1452bfb97cd6984043f208
  },
  {
    imageSrc: pizzaYouth,
    name: "Pizza Youth",
    address: "1406 Pennington Lane",
    city: "Houston",
    state: "TX",
    zipCode: "13213",
<<<<<<< HEAD
    cuisine: "American",
    rating: "5 stars",
    reviewCount: "112 reviews"
=======
    category: "Italian",
    rating: 4.5,
    reviewCount: 112
>>>>>>> 5df83e935020d7818c1452bfb97cd6984043f208
  },
  {
    imageSrc: laCucaracha,
    name: "La Cucaracha Mexican Grill",
    address: "9221 Holders Grove",
    city: "San Diego",
    state: "California",
    zipCode: "29383",
<<<<<<< HEAD
    cuisine: "Mexican",
    rating: "5 stars",
    reviewCount: "83 reviews"
=======
    category: "Mexican",
    rating: 4.8,
    reviewCount: 83
>>>>>>> 5df83e935020d7818c1452bfb97cd6984043f208
  },
  {
    imageSrc: misterBurger,
    name: "Mister Burger",
    address: "3426 Quarter Pounder Court",
    city: "DC",
    state: "Washington",
    zipCode: "12932",
<<<<<<< HEAD
    cuisine: "American",
    rating: "4 stars",
    reviewCount: "70 reviews"
=======
    category: "American",
    rating: 3.9,
    reviewCount: 70
>>>>>>> 5df83e935020d7818c1452bfb97cd6984043f208
  },
  {
    imageSrc: grillmate,
    name: "Grillmate",
    address: "2450 Bacon Lane",
    city: "Nevada",
    state: "Las Vegas",
    zipCode: "23048",
<<<<<<< HEAD
    cuisine: "American",
    rating: "4 stars",
    reviewCount: "234 reviews"
=======
    category: "American",
    rating: 4.2,
    reviewCount: 234
>>>>>>> 5df83e935020d7818c1452bfb97cd6984043f208
  }
];