import { useState } from "react";
import Categories from "./components/Categories";
import Meal from "./components/Meal";
import menu from "./data";
import "./index.css";

const App = () => {
  const [categories, setCategories] = useState(["All"]);
  const [menuItems, setMenuItems] = useState(menu);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(menu);
    } else {
      const newItems = menu.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <h1>Our Menu</h1>
      <div className="categoriesContainer">
        <Categories categories={categories} filterItems={filterItems} />
      </div>
      <div className="allMenu">
        {menuItems.map((item) => (
          <div key={item.id}>
            <Meal {...item} />
            {!categories.includes(item.category) &&
              setCategories([...categories, item.category])}
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
