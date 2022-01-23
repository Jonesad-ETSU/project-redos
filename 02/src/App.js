import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import Meals from "./components/Meals";
import { useState, useEffect, useCallback } from "react";
import CartModal from "./components/CartModal";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [foodItems, setFoodItems] = useState([]);
  const toggleCartHandler = () => {
    setShowCart((prev) => !prev);
  };

  const fetchFoodData = useCallback( async () => {
    const response = await fetch('https://react-fetch-3b018-default-rtdb.firebaseio.com/foods.json');
    const data = await response.json();

    const parsedFoods = [];
    for (const key in data) {
      parsedFoods.push({
        id: key,
        name: data[key].name,
        price: data[key].price,
        description: data[key].description
      });
    }
    console.log(parsedFoods);
    setFoodItems(parsedFoods);
  },[]);
  
  useEffect(()=>{
    fetchFoodData();
  },[fetchFoodData]);

  return (
    <div>
      <Header toggleCart={toggleCartHandler} />
      {showCart && <CartModal toggleCart={toggleCartHandler}/>}
      <MealsSummary />
      <Meals meals={foodItems} />
    </div>
  );
};

export default App;
