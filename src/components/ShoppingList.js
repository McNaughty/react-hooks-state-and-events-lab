import React,{useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {

  const [categorizedItems, setCategorizedItems] = useState(items)

  function handleSelection(event){
    const selectedCategory = event.target.value;
    console.log(selectedCategory);
    const newItems = items.filter((item) => {
      return item.category.toLowerCase().includes(selectedCategory.toLowerCase())
    })
    setCategorizedItems(newItems)
  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categorizedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
