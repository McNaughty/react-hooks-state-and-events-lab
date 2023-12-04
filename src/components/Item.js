import React,{useState} from "react";

function Item({ name, category }) {

  const [isMode, setMode] = useState(false)

  function handleClick(){
    setMode((setMode) => !isMode);
  }

  const cartClass = isMode ? "in-cart" : ""

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={cartClass}>{isMode ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
