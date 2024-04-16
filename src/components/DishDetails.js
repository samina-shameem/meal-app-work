import React from 'react';

const DishDetails = ({ dish }) => {
  return (
    <div>
      <h2>{dish.strMeal}</h2>
      {/* Apply Bootstrap classes for image sizing */}
      <img src={dish.strMealThumb} alt={dish.strMeal} className="img-fluid" style={{ maxWidth: '300px', maxHeight: '300px' }} />
      <div>{dish.strInstructions.split('\n\r').map((instr, idx) => (
        <p key={idx}>{instr}</p>
      ))}</div>
    </div>
  );
};

export default DishDetails;
