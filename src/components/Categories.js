const Categories = ({ categories, filterItems }) => {
  return (
    <div>
      {categories.map((category) => (
        <button onClick={() => filterItems(category)} key={category}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
