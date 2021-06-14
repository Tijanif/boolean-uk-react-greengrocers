import "./styles/index.css";
import MainApp from "./components/MainApp";
import { useState } from "react";



const groceries = [{

  id: "001-beetroot",
  img: './assets/icons/001-beetroot.svg',
  name: "Beetroot",
  price: 0.35 
},
{

  id: "002-carrot",
  img: './assets/icons/002-carrot.svg',
  name: "Carrot",
  price: 0.25 
},
{

  id: "003-apple",
  img: './assets/icons/003-apple.svg',
  name: "Apple",
  price: 0.10 
},
{

  id: "004-apricot",
  img: './assets/icons/004-apricot.svg',
  name: "Apricot",
  price: 0.5 
},
{

  id: "005-avocado",
  img: "../public/assets/icons/005-avocado.svg",
  name: "Avocado",
  price: 0.85 
},
{

  id: "006-banans",
  img: './assets/icons/006-banans.svg',
  name: "Bananas",
  price: 0.15 
},
{

  id: "007-bell-pepper",
  img: './assets/icons/007-bell-pepper.svg',
  name: "Bell Pepper",
  price: 0.35 
},
{

  id: "008-berry",
  img: './assets/icons/008-berry.svg',
  name: "Cherry",
  price: 0.45 
},
{

  id: "009-blueberry",
  img: './assets/icons/009-blueberry.svg',
  name: "Blueberries",
  price: 0.65 
},
{

  id: "010-eggplant",
  img: './assets/icons/010-eggplant.svg',
  name: "Eggplant",
  price: 0.10 
},
]

/* 
Your store item should have the following structure

{
  id: "001-beetroot", <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 <- You can come up with your own prices
}

*/

export default function App() {

  const [storeItems, setStoreItems] = useState(groceries)
 
  const [cartItems, setCartItem] = useState([])


  return <div className="App">
    <MainApp storeItems={storeItems}/>
    </div>;
}
