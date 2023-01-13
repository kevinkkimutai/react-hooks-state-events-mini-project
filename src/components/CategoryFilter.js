import React from "react";

function CategoryFilter({categories, handleClick, selected}) {
  const button = categories.map((category) =>{
    const buttonClass = category === selected ? "selected" : "";
    return (
    <button 
            className={buttonClass} 
            onClick={(() => handleClick(category))} 
            key={category}>{category}
    </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {button}
    </div>
  );
}

export default CategoryFilter;