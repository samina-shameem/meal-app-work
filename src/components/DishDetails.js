import React from 'react';

const DishDetails = ({ dish }) => {
  return (
    <div>
      <h2>{dish.strMeal}</h2>
      {/* Apply Bootstrap classes for image sizing */}
      <img src={dish.strMealThumb} alt={dish.strMeal} className="img-fluid" style={{ maxWidth: '300px', maxHeight: '300px' }} />
      <p>{dish.strInstructions}</p>
    </div>
  );
};

export default DishDetails;
