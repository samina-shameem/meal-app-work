import React from 'react';

const DishList = ({ dishes, onDishClick }) => {
  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish.idMeal} onClick={() => onDishClick(dish)} className="mb-3">
          <h3>{dish.strMeal}</h3>
          {/* Apply Bootstrap classes for image sizing */}
          <img src={dish.strMealThumb} alt={dish.strMeal} className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
        </div>
      ))}
    </div>
  );
};

export default DishList;
