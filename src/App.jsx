import "./styles/index.css";
import MainApp from "./components/MainApp";
/* 
Your store item should have the following structure

{
  id: "001-beetroot", <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 <- You can come up with your own prices
}

*/

export default function App() {
  return <div className="App">
    <MainApp />
    </div>;
}
