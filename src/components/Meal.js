import "../index.css";

const Meal = ({ img, title, category, price, desc }) => {
  return (
    <div className="meal">
      <img src={img} alt="" className="mealImg" />
      <div className="mealDesc">
        <div className="titlePrice">
          <h3>{title}</h3>
          <h4>${price}</h4>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Meal;
